import { Routes, Route } from 'react-router-dom';
import { Tournaments } from '../pages/tournaments';
import { LentilCupRoutes } from './lentil-cup';
import { Link } from 'react-router-dom';

export const TournamentRoutes = () => {
  return (
    <div className="App">
      <header>
        <div className='flex'>
          <h1>Tournaments</h1>
          <a href='https://www.twitch.tv/lentil_aoe' target='_blank' rel="noreferrer"><i className="fab fa-twitch large-logo mobile-hide"></i></a>
        </div>
        <nav>
          <Link to='/tournaments/upcoming/'>
            <h2>Lentil Cup 1.5</h2>
          </Link>
          <Link to='/tournaments/lentil-cup/'>
            <h2>Lentil Cup 1</h2>
          </Link>
          <Link to='/'>
            <h2>Back</h2>
          </Link>
        </nav>
      </header>
      <Routes>
        <Route path='/*' element={<Tournaments />} />
        <Route path='/upcoming/*' element={<Tournaments />} />
        <Route path='/lentil-cup/*' element={<LentilCupRoutes />} />
      </Routes>
    </div>
  );
}