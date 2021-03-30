import { NavLink, Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import IssueDetail from './pages/IssueDetail';
import IssueList from './pages/IssueList';
import IssuesByLabel from './pages/IssuesByLabel';

function App() {

  return (
    <div className="App">
      <ul class="nav">
        <li><NavLink exact to="/">Issues</NavLink></li>
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
          <Route>
            <Redirect to="/" />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
