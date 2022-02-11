import '../App.css';
import '../Civs.css';
import { Link } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import { Header } from '../components/Header';
import { Brackets } from '../lentil-cup-1/Brackets';
import { Teams } from '../lentil-cup-1/Teams';
import { Faceoff } from '../lentil-cup-1/Faceoff';
import { About } from '../lentil-cup-1/About';
import cageLogo from '../assets/faceoff/cage-logo.png';

export const LentilCupRoutes = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/*' element={<Brackets />} />
        <Route path='/teams' element={<Teams />} />
        <Route path='/faceoff' element={<Faceoff />} />
        <Route path='/about' element={<About />} />
      </Routes>
      <Link to='/tournaments/lentil-cup/faceoff' className='mobile-hide'>
        <img className='cage-logo' src={cageLogo} alt="" />
      </Link>
    </div>
  );
}