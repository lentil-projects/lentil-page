import React from 'react';
import { winners, losers } from './constants/results';

const returnResult = (team, game) => {
    if (team === 'winner' && winners[game]) {
        return (<div className="team">{winners[game]}</div>)
    }
    if (team === 'loser' && losers[game]) {
        return (<div className="team">{losers[game]}</div>)
    }
    return (<div className="team"><em>{`${team} of ${game.toUpperCase()}`}</em></div>)
}

export const Championship = () => {
    return (
        <div>
            <h2>backdoor Finals</h2>
            <div className="brackets">
                <div className="round">
                    <div className="heading3">Feb 7</div>
                    <div className="game">
                        <div className='seed inline'>M</div>
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
                    <div className="pair">
                        {returnResult('winner', 'm')}
                    </div>
                </div>
            </div>
            <h2>Finals</h2>
            <div className="brackets">
                <div className="round">
                    <div className="heading3">Feb 14</div>
                    <div className="game">
                        <div className='seed inline'>N</div>
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
                    <div className="pair">
                        {returnResult('winner', 'n')}
                    </div>
                </div>
            </div>
            <h2>Finals Rd. 2 (if needed)</h2>
            <div className="brackets">
                <div className="round">
                    <div className="heading3">Feb 21</div>
                    <div className="game">
                        <div className='seed inline'>O</div>
                        <div className="inline pair">
                            {returnResult('loser', 'n')}
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
                    <div className="pair">
                        {returnResult('winner', 'o')}
                    </div>
                </div>
            </div>
        </div>
    )
}