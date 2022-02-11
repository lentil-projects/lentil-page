import { Routes, Route } from 'react-router-dom';
import { Tournaments } from '../pages/tournaments';
import { LentilCupRoutes } from './lentil-cup';

export const TournamentRoutes = () => {
  return (
    <div className="App">
      <Routes>
        <Route path='/*' element={<Tournaments/>} />
        <Route path='/lentil-cup/*' element={<LentilCupRoutes/>} />
      </Routes>
    </div>
  );
}