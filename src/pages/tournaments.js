import { Link } from "react-router-dom"
import { LentilCupOneAndAHalfBrackets } from "../lc-1.5/brackets"
import '../style/New.css'

export const Tournaments = () => {
    return (
        <>
            <header>
                <div className='flex'>
                    <h1>Upcoming Tournaments</h1>
                    <a href='https://www.twitch.tv/lentil_aoe' target='_blank' rel="noreferrer"><i className="fab fa-twitch large-logo mobile-hide"></i></a>
                </div>
                <nav>
                    <Link to='/tournaments/lentil-cup/'>
                        <h2>Lentil Cup</h2>
                    </Link>
                    <Link to='/'>
                        <h2>Back</h2>
                    </Link>
                </nav>
            </header>
            <div className='rulebook'>
                <h1>Lentil Cup 1.5</h1>
                <h2>About</h2>
                <ul>
                    <li>Single elimination?</li>
                    <li>Best of 5?</li>
                </ul>
                <br />
                <p>Each round a player can choose one of the following game modes:</p>
                <ul>
                    <li>King of the Hill</li>
                    <li>Game Speed? (Turbo, etc)</li>
                </ul>
                <h2>Maps</h2>
                <p>Game 1: MegaRandom</p>
                <br />
                <h3>Map Pool (1 ban?):</h3>
                <div className='flex'>
                    <ul>
                        <li>Bog Socotra</li>
                        <li>Canberra</li>
                        <li>Cliff Hell</li>
                        <li>Crochetbia</li>
                    </ul>
                    <ul>
                        <li>Golden Swamp</li>
                        <li>Reverse Arena</li>
                        <li>WWC Nomad</li>
                        <li>ZeWall?</li>
                    </ul>
                </div>
                <br />
                <p>Maps will be available <a href='https://github.com/lentil-projects/lc1.5-maps' target='_blank' rel='noreferrer' className='purple'>here</a>.</p>
                <h2>Players</h2>
                {/* <div className='flex'>
                    <ul>
                        <li>Albatross Rex</li>
                        <li>FireEMT?</li>
                        <li>Frizune</li>
                        <li>Lord's Servant</li>
                    </ul>
                    <ul>
                        <li>JtotheRebellion?</li>
                        <li>Master Beef</li>
                        <li>Monkeyninja</li>
                        <li>Nathan Skip</li>
                    </ul>
                </div> */}
                <div className='flex'>
                    <ul>
                        <li>Player 1</li>
                        <li>Player 2</li>
                        <li>Player 3</li>
                        <li>Player 4</li>
                    </ul>
                    <ul>
                        <li>Player 5</li>
                        <li>Player 6</li>
                        <li>Player 7</li>
                        <li>Player 8</li>
                    </ul>
                </div>
                <br />
                <LentilCupOneAndAHalfBrackets />
            </div>
            <div className="rulebook">
                <h1>Lentil Cup 2</h1>
                <p>coming soon... ish</p>
            </div>
        </>
    )
}