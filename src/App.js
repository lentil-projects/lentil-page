import './App.css';
import './Civs.css';
import { Switch, Route } from 'react-router-dom';
import { Brackets } from './pages/Brackets';
import { Rulebook } from './pages/Rulebook';
import { Teams } from './pages/Teams';
import { Header } from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path='/' component={Brackets} />
        <Route path='/teams' component={Teams} />
        <Route path='/rulebook' component={Rulebook} />
      </Switch>
      <a href='https://github.com/lentil-projects/lentil-cup' target='_blank' rel='noreferrer'>
        <i className="fab fa-github"></i>
      </a>
    </div>
  );
}

export default App;
