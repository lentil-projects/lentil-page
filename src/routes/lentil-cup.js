import '../App.css';
import '../Civs.css';
import { Routes, Route } from 'react-router-dom';
import { Header } from '../components/Header';
import { Brackets } from '../pages/Brackets';
import { Teams } from '../pages/Teams';
import {Faceoff} from '../pages/Faceoff';
import {About} from '../pages/About';

export const LentilCupRoutes = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/*' element={<Brackets/>} />
        <Route path='/teams' element={<Teams/>} />
        <Route path='/faceoff' element={<Faceoff/>} />
        <Route path='/about' element={<About/>} />
      </Routes>
      <a href='https://github.com/lentil-projects/lentil-cup' target='_blank' rel='noreferrer'>
        <i className="fab fa-github"></i>
      </a>
    </div>
  );
}