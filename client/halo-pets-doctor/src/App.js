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
        <Route path="/login">
          <LoginPage/>
        </Route>
        <Route exact path='/'>
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
