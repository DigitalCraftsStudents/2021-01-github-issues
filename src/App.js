import { NavLink, Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import IssueDetail from './pages/IssueDetail';
import IssueList from './pages/IssueList';
import IssuesByLabel from './pages/IssuesByLabel';
import Users from './pages/Users';

function App() {

  return (
    <div className="App">
      <ul class="nav">
        <li><NavLink exact to="/">Issues</NavLink></li>
        <li><NavLink to="/users">User Search</NavLink></li>
      </ul>
      <div>
        <Switch>
          <Route path="/" exact>
            <IssueList />
          </Route>
          <Route path="/issues/:number">
            <IssueDetail />
          </Route>
          <Route path="/labels/:name">
            <IssuesByLabel />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route>
            <Redirect to="/" />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
