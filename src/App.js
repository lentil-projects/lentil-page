import './App.css';
import { Switch, Route } from 'react-router-dom';
import { Page } from './pages/Page';
import { Rulebook } from './pages/Rulebook';
import { Teams } from './pages/Teams';
import {Header} from './components/Header';

function App() {
  return (
    <div className="App">
     <Header/>
      <Switch>
        <Route exact path='/' component={Page} />
        <Route path='/teams' component={Teams} />
        <Route path='/rulebook' component={Rulebook} />
      </Switch>
    </div>
  );
}

export default App;
