import React from 'react';
import { results} from './constants/results';

const returnResult = (team, game) => {
    if (team === 'winner' && results[game].winner){
        return (<div className='team'>{results[game].winner}</div>)
    }
    if (team === 'loser' && results[game].loser){
        return (<div className='team'>{results[game].loser}</div>)
    }
    return (<div className="team"><em>{`${team} of ${game.toUpperCase()}`}</em></div>)
}


export const Championship = () => {
    return (
        <div className='bracket-group championship'>
            <div className="bracket-panel little-bracket">
                <h2>backdoor Finals</h2>
                <div className="brackets">
                    <div className="round">
                        <div className="heading3">Feb 7*</div>
                        <div className="game">
                            <div className='seed inline gray'>M</div>
                            <div className="inline pair">
                                {returnResult('loser', 'i')}
                                {returnResult('winner', 'l')}
                            </div>
                        </div>
                    </div>
                    <div className="space-col">
                        <div className="space"></div>
                        <div className="arrow">{'--'}</div>
                    </div>
                    <div className="round">
                        <div className="space"></div>
                        <div className="game">
                            <div className="pair">
                                {returnResult('winner', 'm')}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bracket-panel little-bracket">
                <h2>Finals</h2>
                <div className="brackets">
                    <div className="round">
                        <div className="heading3">Feb 14*</div>
                        <div className="game">
                            <div className='seed inline gray'>N</div>
                            <div className="inline pair">
                                {returnResult('winner', 'i')}
                                {returnResult('winner', 'm')}
                            </div>
                        </div>
                    </div>
                    <div className="space-col">
                        <div className="space"></div>
                        <div className="arrow">{'--'}</div>
                    </div>
                    <div className="round">
                        <div className="space"></div>
                        <div className="game">
                            <div className="pair">
                                {returnResult('winner', 'n')}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bracket-panel little-bracket">
                <h2>Finals round 2** </h2>
                <div className="brackets">
                    <div className="round">
                        <div className="heading3">Feb 21*</div>
                        <div className="game">
                            <div className='seed inline gray'>O</div>
                            <div className="inline pair">
                                {returnResult('winner', 'n')}
                                {returnResult('loser', 'n')}
                            </div>
                        </div>
                    </div>
                    <div className="space-col">
                        <div className="space"></div>
                        <div className="arrow">{'--'}</div>
                    </div>
                    <div className="round">
                        <div className="space"></div>
                        <div className="game">
                            <div className="pair">
                                {returnResult('winner', 'o')}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <p className='white note'>* dates reflect when games are cast</p>
            <p className='white note'>** if needed</p>
        </div>
    )
}