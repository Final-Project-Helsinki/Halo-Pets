import ChatListPage from './pages/ChatListPage'
import Chat from './pages/Chat'
import {
  Route,
  Switch
} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Switch>
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
