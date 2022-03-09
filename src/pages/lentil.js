import { Link } from "react-router-dom"
import bowl from '../assets/landing/bowl.png';

export const Lentil = () => {
    return (
        <>
            <div className='parallax'>
                <a href='https://www.twitch.tv/lentil_aoe' target='_blank' rel="noreferrer">
                    <h1><i className="fab fa-twitch"></i>{' Lentil_AoE'}</h1>
                </a>
            </div>
            <div className='two'>
                <div className="two-links">
                    <h1>Lentil Cup</h1>
                    <Link to='/tournaments/lentil-cup'>
                        <h2>One</h2>
                    </Link>
                    <Link to='/tournaments'>
                        <h2>One and a half</h2>
                    </Link>
                </div>
                <img src={bowl} alt="" />
            </div>
            <div className='three'>
                <div className='banner'>
                    <h1>Links</h1>
                    <a href='https://twitter.com/LentilDestroyer' target='_blank' rel="noreferrer">
                        <p>@lentildestroyer</p>
                    </a>
                    <a href='https://twitter.com/lentilgarf' target='_blank' rel="noreferrer">
                        <p>@lentilgarf</p>
                    </a>
                </div>
            <footer>
                <p>website by
                    <a href='https://doily.dev/' target='_blank' rel="noreferrer">{' crochet'}</a>
                </p>
            </footer>
            </div>
        </>
    )
}