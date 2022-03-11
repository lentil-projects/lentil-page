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
                    <div className="banner2">
                        <h1>Lentil Cup</h1>
                        <div className='buttons'>
                            <Link to='/lentil-cup/1'>
                                <button>1</button>
                            </Link>
                            <Link to='/lentil-cup/1.5'>
                                <button>1.5</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <img src={bowl} alt='bowl of lentils' />
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
            </div>
            <footer>
                <p>website by
                    <a href='https://doily.dev/' target='_blank' rel="noreferrer">{' crochet'}</a>
                </p>
            </footer>
        </>
    )
}