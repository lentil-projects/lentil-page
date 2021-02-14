import './App.css';
import './Civs.css';
import { Switch, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Brackets } from './pages/Brackets';
import { Teams } from './pages/Teams';
import {Faceoff} from './pages/Faceoff';
import {About} from './pages/About';


function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path='/' component={Brackets} />
        <Route path='/teams' component={Teams} />
        <Route path='/faceoff' component={Faceoff} />
        <Route path='/about' component={About} />
      </Switch>
      <a href='https://github.com/lentil-projects/lentil-cup' target='_blank' rel='noreferrer'>
        <i className="fab fa-github"></i>
      </a>
    </div>
  );
}

export default App;
