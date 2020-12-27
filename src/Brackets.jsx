import React from 'react';
import { teamNames } from './constants/teams';
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

export const Brackets = () => {
    return (
        <div className='bracket-group'>
            <div className="bracket-panel">

            <h2>Lentil bracket</h2>
            <div className='brackets'>
                <div className='round'>
                    <div className="heading">Jan 17*</div>
                    <div className='game'>
                        <div className='seed inline'>A</div>
                        <div className="inline pair">
                            <div className='seed inline gray'>0</div>
                            <div className="team inline">{teamNames.team1}</div>
                            <div className='seed inline gray'>0</div>
                            <div className="team inline">{teamNames.team8}</div>
                        </div>
                    </div>
                    <div className="game">
                        <div className='seed inline'>B</div>
                        <div className="inline pair">
                        <div className='seed inline gray'>0</div>
                            <div className="team inline">{teamNames.team4}</div>
                            <div className='seed inline gray'>0</div>
                            <div className="team inline">{teamNames.team5}</div>
                        </div>
                    </div>
                    <div className="space"></div>
                    <div className="game">
                        <div className='seed inline'>C</div>
                        <div className="inline pair">
                        <div className='seed inline gray'>0</div>
                            <div className="team inline">{teamNames.team2}</div>
                            <div className='seed inline gray'>0</div>
                            <div className="team inline">{teamNames.team7}</div>
                        </div>
                    </div>
                    <div className="game">
                        <div className='seed inline'>D</div>
                        <div className="inline pair">
                        <div className='seed inline gray'>0</div>
                            <div className="team inline">{teamNames.team3}</div>
                            <div className='seed inline gray'>0</div>
                            <div className="team inline">{teamNames.team6}</div>
                        </div>
                    </div>
                </div>
                <div className='space-col'>
                    <div className="space"></div>
                    <div className="triangle">{']-'}</div>
                    <div className="space"></div>
                    <div className="space"></div>
                    <div className="triangle">{']-'}</div>
                </div>
                <div className="round">
                    <div className="heading">Jan 24*</div>
                    <div className="game">
                        <div className='seed inline'>E</div>
                        <div className="inline pair">
                            {returnResult('winner', 'a')}
                            {returnResult('winner', 'b')}
                        </div>
                    </div>
                    <div className="space"></div>
                    <div className="space"></div>
                    <div className="game">
                        <div className='seed inline'>F</div>
                        <div className="inline pair">
                            {returnResult('winner', 'c')}
                            {returnResult('winner', 'd')}
                        </div>
                    </div>
                </div>
                <div className="space-col">
                    <div className="space"></div>
                    <div className="triangle">{']-'}</div>
                </div>
                <div className="round">
                    <div className="heading">Jan 31*</div>
                    <div className="game">
                        <div className='seed inline'>I</div>
                        <div className="inline pair">
                            {returnResult('winner', 'e')}
                            {returnResult('winner', 'f')}
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
                        {returnResult('winner', 'i')}
                    </div>
                </div>
                {/* <div className="round"></div> */}
            </div>
            </div>
            <div className="bracket-panel">

            <h2>Rice bracket</h2>
            <div className="brackets">
                {/* <div className="round"></div> */}
                <div className="round">
                    <div className="heading2">Jan 24*</div>
                    <div className="game">
                        <div className='seed inline'>G</div>
                        <div className="inline pair">
                            {returnResult('loser', 'a')}
                            {returnResult('loser', 'b')}
                        </div>
                    </div>
                    <div className="game">
                        <div className='seed inline'>H</div>
                        <div className="inline pair">
                            {returnResult('loser', 'c')}
                            {returnResult('loser', 'd')}
                        </div>
                    </div>
                </div>
                <div className="space-col">
                    <div className="space"></div>
                    <div className="arrow">{'--'}</div>
                    <div className="arrow">{'--'}</div>
                </div>
                <div className="round">
                    <div className="heading2">Jan 31*</div>
                    <div className="game">
                        <div className='seed inline'>J</div>
                        <div className="inline pair">
                            {returnResult('winner', 'g')}
                            {returnResult('loser', 'f')}
                        </div>
                    </div>
                    <div className="game">
                        <div className='seed inline'>K</div>
                        <div className="inline pair">
                            {returnResult('winner', 'h')}
                            {returnResult('loser', 'e')}
                        </div>
                    </div>
                </div>
                <div className="space-col">
                    <div className="space"></div>
                    <div className="triangle">{']-'}</div>
                </div>
                <div className="round">
                    <div className="heading2">Feb 7*</div>
                    <div className="game">
                        <div className='seed inline'>L</div>
                        <div className="inline pair">
                            {returnResult('winner', 'j')}
                            {returnResult('winner', 'k')}
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
                        {returnResult('winner', 'l')}
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}