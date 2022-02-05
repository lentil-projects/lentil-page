import './App.css';
import './Civs.css';
import { Routes, Route } from 'react-router-dom';
import { Lentil } from './lentil';
import { LentilCupRoutes } from './routes/lentil-cup';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='*' element={<Lentil/>} />
        <Route path='/lentil-cup/*' element={<LentilCupRoutes/>} />
      </Routes>
    </div>
  );
}

export default App;
