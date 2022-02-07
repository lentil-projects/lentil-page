import { Link } from "react-router-dom"

export const Lentil = () => {
    return (
        <div className='lentil'>
            <div className='lentil-div'>
                <h1>Lentil_AoE</h1>
                <a href='https://www.twitch.tv/lentil_aoe' target='_blank' rel="noreferrer">
                    <button><i className="fab fa-twitch"></i>Lentil Twitch</button>
                </a>
                <a href='https://twitter.com/LentilDestroyer' target='_blank' rel="noreferrer">
                <button><i class="fab fa-twitter"></i> Lentil Destroyer</button>
                </a>
                <a href='https://twitter.com/lentilgarf' target='_blank' rel="noreferrer">
                <button><i class="fab fa-twitter"></i> Lentil Garfield</button>
                </a>
                <Link to='/lentil-cup'>
                    <button>Lentil Cup</button>
                </Link>
            </div>
        </div>
    )
}