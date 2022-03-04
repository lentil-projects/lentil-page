import './App.css';
import './Civs.css';
import './style/header.css';
import './style/maps.css';
import './style/landing.css';
import { Routes, Route } from 'react-router-dom';
import { Lentil } from './pages/lentil';
import { TournamentRoutes } from './routes/tournaments';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='*' element={<Lentil/>} />
        <Route path='/tournaments/*' element={<TournamentRoutes/>} />
      </Routes>
    </div>
  );
}

export default App;
