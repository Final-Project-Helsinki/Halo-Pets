import ChatListPage from './pages/ChatListPage'
import Chat from './pages/Chat'
import LoginPage from './pages/LoginPage'
import {
  Route,
  Switch
} from 'react-router-dom'
import { GuardProvider, GuardedRoute } from 'react-router-guards';
import getIsLoggedIn from './helpers/getIsLoggedIn'
import Loading from './components/Loading'
import ErrorNotFound from './components/NotFound'

const requireLogin = (to, from, next) => {
  if (to.meta.auth) {
    if (getIsLoggedIn()) {
      next();
    }
    next.redirect('/');
  } else {
    if (getIsLoggedIn()) {
      next.redirect('/chatlist');
    }
    next();
  }
};

function App() {
  return (
    <GuardProvider guards={[requireLogin]} loading={Loading} error={ErrorNotFound}>
      <Switch>
        <GuardedRoute path="/" exact component={LoginPage} />
        <GuardedRoute path="/chatlist" exact component={ChatListPage} meta={{ auth: true }} />
        <GuardedRoute path="/chat" exact component={Chat} meta={{ auth: true }} />
      </Switch>
    </GuardProvider>
  );
}

export default App;
