import '../App.css';
import '../Civs.css';
import { Routes, Route } from 'react-router-dom';
import { Faceoff } from '../lentil-cup/Faceoff';
import { About } from '../lentil-cup/About';

export const LentilCupRoutes = () => {
  return (
    <div className="App">
      <Routes>
        <Route path='/*' element={<About />} />
        <Route path='/faceoff' element={<Faceoff />} />
      </Routes>
    </div>
  );
}