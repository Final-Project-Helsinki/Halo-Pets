import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router";
import { auth } from "../services/firebase";
import { db } from "../services/firebase"

export default function Chat() {
  const [user, setUser] = useState(auth().currentUser)
  const [chats, setChats] = useState([])
  const [content, setContent] = useState('')
  const [readError, setreadError] = useState(null)
  const [writeError, setwriteError] = useState(null)
  const location = useLocation()

  useEffect(() => {
    console.log(location.state)
    setreadError(null)
    async function fetchMessages() {
      try {
        const roomId = db.ref("chats")
        roomId.child(`${location.state.id}`).on("value", snapshot => {
          let chatsFirebase = [];
          snapshot.forEach((snap) => {
            chatsFirebase.push(snap.val());
          });
          setChats(c => chatsFirebase)
        });
      } catch (error) {
        setreadError(error.message)
      }
    }
    fetchMessages();
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    setwriteError(null)
    try {
      const roomId = db.ref("chats")
      await roomId.child(`${location.state.id}`).push({
        content,
        timestamp: Date.now(),
        uid: user.uid
      });
      setContent('')
    } catch (error) {
      setwriteError(error.message)
    }
  }
  function handleChange(e) {
    setContent(e.target.value)
  }

  return (
    <div>
      <h1>Chat</h1>
      <div className="chats">
        {chats.map(chat => {
          return <p key={chat.timestamp}>{chat.content}</p>
        })}
      </div>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} value={content}></input>
        {readError ? <p>{writeError}</p> : null}
        <button type="submit">Send</button>
      </form>
    </div>
  )
}