import ChatListPage from './pages/ChatListPage'
import Chat from './pages/Chat'
import LoginPage from './pages/LoginPage'
import {
  Route,
  Switch
} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <LoginPage/>
        </Route>
        <Route path='/chatlist'>
          <ChatListPage />
        </Route>
        <Route path='/chat'>
          <Chat />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
