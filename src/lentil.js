import { Link } from "react-router-dom"

export const Lentil = () => {
    return (
        <div className='lentil'>
            <div className='lentil-div'>
                <h1>Lentil_AoE</h1>
                <a href='https://www.twitch.tv/lentil_aoe' target='_blank' rel="noreferrer">
                    <button><i className="fab fa-twitch large-logo"></i> Twitch</button>
                </a>
                <Link to='/lentil-cup'>
                    <button>Lentil Cup One</button>
                </Link>
            </div>
        </div>
    )
}