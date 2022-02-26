import reverseArena from '../assets/maps/reverse-arena.png'
import bogSocotra from '../assets/maps/bog-socotra.png'
import crochetbia from '../assets/maps/crochetbia.png'
import ponds from '../assets/maps/ponds.png';
import cliffhell from '../assets/maps/cliffhell.PNG';
import canberra from '../assets/maps/canberra.png';
import michi from '../assets/maps/michi.jpeg';
import zewall from '../assets/maps/zewall.png';

export const Maps = () => {
    return (
        <div className='rulebook'>
            <h1>Lentil Cup 1.5</h1>
            <h2>Original Maps</h2>
            <p>crochet x Lentil</p>
            <div className='maps'>
                <div className='map'>
                    <h3>Reverse Arena</h3>
                    <img src={reverseArena} alt="" />
                    <p>It's Arena... except your walls are around the other player.</p>
                </div>
                <div className='map'>
                    <h3>Bog Socrotra</h3>
                    <img src={bogSocotra} alt="" />
                    <p>A hilly, boggy socotra. Do demolition ships get a hill advantage?</p>
                </div>
                <div className='map'>
                    <h3>Crochetbia</h3>
                    <img src={crochetbia} alt="" />
                    <p>Start with a monk - double the relics.</p>
                </div>
                <div className='map'>
                    <h3>Ponds</h3>
                    <img src={ponds} alt="" />
                    <p>Is it Nomad - or is it the land/water inverse of Team Island? 🤯</p>
                </div>
                <div className='map'>
                    <h3>CLIFFHELL</h3>
                    <img src={cliffhell} alt="" />
                    <p>Regular map with the cliffs dialed up to 11. Not as bad as you think. </p>
                </div>
            </div>
            <h2>Other Maps</h2>
            <div className="maps">
                <div className="map">
                    <h3>Canberra</h3>
                    <img src={canberra} alt="" />
                    <p>"A palisade arena protects players in the early game, but the lure of additional resources may bring players out early. A river connects both arenas, and a single fish sits in the central lake. Not just any fish, it's worth 30,000 food."</p>
                    <p>by <strong>Zetnus</strong></p>
                </div>
                <div className="map">
                    <h3>Michi</h3>
                    <img src={michi} alt="" />
                    <p>What is Michi? (from Reddit):</p>
                    <ul>
                        <li>"It's a map where both teams are separated by a super thick forest. It is the definition of a noob map and I don't even think it's in the game, it's a custom map people keep making"</li>
                        <li>"Them's fighting words son! Have you every played michi with good players? Its really legit, and requires a ton of teamwork."</li>
                        <li>"A miserable pile of waiting."</li>
                    </ul>
                </div>
                <div className="map">
                    <h3>ZeWall</h3>
                    <img src={zewall} alt="" />
                    <p>"It's basically arena but without bases and the players are separated by a gaia wall."</p>
                    <p>by <strong>Bazidrown</strong></p>
                </div>
            </div>
            <p><strong>Also featuring: </strong></p>
            <ul>
                <li>Nomad (WWC version)</li>
                <li>Golden Swamp</li>
            </ul>
        </div>
    )
}