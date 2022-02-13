import '../App.css';
import '../Civs.css';
import { Link } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import { Faceoff } from '../lentil-cup/Faceoff';
import { About } from '../lentil-cup/About';
import cageLogo from '../lentil-cup/assets/faceoff/cage-logo.png';

export const LentilCupRoutes = () => {
  return (
    <div className="App">
      <Routes>
        <Route path='/*' element={<About />} />
        <Route path='/faceoff' element={<Faceoff />} />
      </Routes>
      <Link to='/tournaments/lentil-cup/faceoff' className='mobile-hide'>
        <img className='cage-logo' src={cageLogo} alt="" />
      </Link>
    </div>
  );
}