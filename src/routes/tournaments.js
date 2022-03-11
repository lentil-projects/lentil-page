import { Routes, Route } from 'react-router-dom';
import { Tournaments } from '../pages/tournaments';
import { LentilCupRoutes } from './lentil-cup';
import { Link } from 'react-router-dom';
import { Maps } from '../pages/maps';

export const TournamentRoutes = () => {
  return (
    <div className="App">
      <header>
        <nav>
          <div className='flex'>
            <a href='https://www.twitch.tv/lentil_aoe' target='_blank' rel="noreferrer"><i className="fab fa-twitch large-logo mobile-hide"></i></a>
            <h1>Lentil_AoE</h1>
          </div>
          <Link to='/lentil-cup/1.5/'>
            <h2 className='tab'>Lentil Cup 1.5</h2>
          </Link>
          <Link to='/lentil-cup/1'>
            <h2 className='tab'>Lentil Cup 1</h2>
          </Link>
          <Link to='/lentil-cup/maps/'>
            <h2 className='tab'>Maps</h2>
          </Link>
          <Link to='/'>
            <h2 className='tab'>Back</h2>
          </Link>
        </nav>
      </header>
      <Routes>
        <Route path='/*' element={<Tournaments />} />
        <Route path='/1.5/*' element={<Tournaments />} />
        <Route path='/1/*' element={<LentilCupRoutes />} />
        <Route path='/maps/*' element={<Maps />} />
      </Routes>
      <footer>
        <p>website by
          <a href='https://doily.dev/' target='_blank' rel="noreferrer">{' crochet'}</a>
        </p>
      </footer>
    </div>
  );
}