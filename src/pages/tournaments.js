import { LentilCupOneAndAHalfBrackets } from "../lc-1.5/brackets"

export const Tournaments = () => {
    return (
        <>
            <div className='rulebook'>
                <h1>Lentil Cup 1.5</h1>
                <LentilCupOneAndAHalfBrackets />
                <h2>About</h2>
                <ul>
                    <li>Double elimination</li>
                    <li>First Round Best of 3</li>
                    <li>Random seeding</li>
                </ul>
                {/* <br />
                <p>Each round a player can choose one of the following game modes:</p>
                <ul>
                    <li>King of the Hill</li>
                    <li>Game Speed? (Turbo, etc)</li>
                </ul> */}
                <h2>Maps</h2>
                <p>Game 1: MegaRandom</p>
                <p>2 map bans each, 2 home maps each</p>
                <br />
                <h3>Map Pool:</h3>
                <div className='flex'>
                    <ul>
                        <li>Bog Socotra</li>
                        <li>Canberra</li>
                        <li>Cliff Hell</li>
                        <li>Crochetbia</li>
                        <li>Golden Swamp</li>
                    </ul>
                    <ul>
                        <li>Michi</li>
                        <li>Ponds</li>
                        <li>Reverse Arena</li>
                        <li>WWC Nomad</li>
                        <li>ZeWall</li>
                    </ul>
                </div>
                <br />
                <p>Maps available <a href='https://github.com/lentil-projects/lc1.5-maps' target='_blank' rel='noreferrer' className='purple'>here</a>.</p>
                <h2>Civs</h2>
                <p>2 global bans each, 4 civ picks each</p>
                <br />
                <p>Civ draft available <a href='https://aoe2cm.net/preset/WBnoK' target='_blank' rel='noreferrer' className='purple'>here</a>.</p>
                <h2>Players</h2>
                <div className='flex'>
                    <ul>
                        <li>Albatross Rex</li>
                        <li>DerIKM</li>
                        <li>FireEMT</li>
                        <li>Frizune</li>
                    </ul>
                    <ul>
                        <li>Master Beef</li>
                        <li>Monkeyninja</li>
                        <li>Nathan Skip</li>
                        <li>RedBearded</li>
                    </ul>
                </div>
                <h2>Prize Pool: $100.00</h2>
                <p>$100 has been gifted by an anonymous benefactor!</p>
            </div>
            {/* <div className="rulebook">
                <h1>Lentil Cup 2</h1>
                <p>coming soon... ish</p>
            </div> */}
        </>
    )
}