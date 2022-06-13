import { Routes, Route } from 'react-router-dom';
import { Tournaments } from '../pages/tournaments';
import { LentilCupRoutes } from './lentil-cup';
import { Link } from 'react-router-dom';
import { Maps } from '../pages/maps';
import {Footer} from '../components/footer';

export const TournamentRoutes = () => {
  return (
    <div className="App">
      <header>
        <nav>
          <div className='flex'>
            <a href='https://www.twitch.tv/lentil_aoe' target='_blank' rel="noreferrer"><i className="fab fa-twitch large-logo mobile-hide"></i></a>
            <Link to='/'>
              <h1>Lentil_AoE</h1>
            </Link>
          </div>
          <div className='flex'>
            <Link to='/lentil-cup/1.5/'>
              <h2 className='tab'>Lentil Cup 1.5</h2>
            </Link>
            <Link to='/lentil-cup/1'>
              <h2 className='tab'>Lentil Cup 1</h2>
            </Link>
            <Link to='/lentil-cup/maps/'>
              <h2 className='tab'>Maps</h2>
            </Link>
          </div>
        </nav>
      </header>
      <Routes>
        <Route path='/*' element={<Tournaments />} />
        <Route path='/1.5/*' element={<Tournaments />} />
        <Route path='/1/*' element={<LentilCupRoutes />} />
        <Route path='/maps/*' element={<Maps />} />
      </Routes>
      <Footer/>
    </div>
  );
}