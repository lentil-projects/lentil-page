import React from 'react';
import { teamNames, playerNames } from './constants/teams';
import { winners, losers } from './constants/results';

const returnResult = (team, game) => {
    if (team === 'winner' && winners[game]) {
        return (<>
            <div className='seed small-seed inline'>{playerNames[winners[game]][0].seed}</div>
            <div className="inline team">{teamNames[winners[game]]}</div>
            <div className='inline score'>0</div>
        </>)
    }
    if (team === 'loser' && losers[game]) {
        return (<>
            <div className='seed small-seed inline'>{playerNames[losers[game]][0].seed}</div>
            <div className="inline team">{teamNames[losers[game]]}</div>
            <div className='inline score'>0</div>
        </>)
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
                            <div className='seed inline gray'>A</div>
                            <div className="inline pair">
                                <div className="line">
                                    <div className='seed small-seed inline'>{playerNames.team1[0].seed}</div>
                                    <div className="team inline">{teamNames.team1}</div>
                                    <div className='inline score'>0</div>
                                </div>
                                <div className="line">
                                    <div className='seed small-seed inline'>{playerNames.team8[0].seed}</div>
                                    <div className="team inline">{teamNames.team8}</div>
                                    <div className='inline score'>0</div>
                                </div>
                            </div>
                        </div>
                        <div className="game">
                            <div className='seed inline gray'>B</div>
                            <div className="inline pair">
                                <div className="line">
                                    <div className='seed small-seed inline'>{playerNames.team4[0].seed}</div>
                                    <div className="team inline">{teamNames.team4}</div>
                                    <div className='inline score'>0</div>
                                </div>
                                <div className="line">
                                    <div className='seed small-seed inline'>{playerNames.team5[0].seed}</div>
                                    <div className="team inline">{teamNames.team5}</div>
                                    <div className='inline score'>0</div>
                                </div>
                            </div>
                        </div>
                        <div className="space"></div>
                        <div className="game">
                            <div className='seed inline gray'>C</div>
                            <div className="inline pair">
                                <div className="line">
                                    <div className='seed small-seed inline'>{playerNames.team2[0].seed}</div>
                                    <div className="team inline">{teamNames.team2}</div>
                                    <div className='inline score'>0</div>
                                </div>
                                <div className="line">
                                    <div className='seed small-seed inline'>{playerNames.team7[0].seed}</div>
                                    <div className="team inline">{teamNames.team7}</div>
                                    <div className='inline score'>0</div>
                                </div>
                            </div>
                        </div>
                        <div className="game">
                            <div className='seed inline gray'>D</div>
                            <div className="inline pair">
                                <div className="line">
                                    <div className='seed small-seed inline'>{playerNames.team3[0].seed}</div>
                                    <div className="team inline">{teamNames.team3}</div>
                                    <div className='inline score'>0</div>
                                </div>
                                <div className="line">
                                    <div className='seed small-seed inline'>{playerNames.team6[0].seed}</div>
                                    <div className="team inline">{teamNames.team6}</div>
                                    <div className='inline score'>0</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='space-col'>
                        <div className="space"></div>
                        <div className="triangle">{']-'}</div>
                        <div className="space"></div>
                        <div className="space"></div>
                        <div className="space"></div>
                        <div className="triangle">{']-'}</div>
                    </div>
                    <div className="round">
                        <div className="heading">Jan 24*</div>
                        <div className="game">
                            <div className='seed inline gray'>E</div>
                            <div className="inline pair">
                                {returnResult('winner', 'a')}
                                {returnResult('winner', 'b')}
                            </div>
                        </div>
                        <div className="space"></div>
                        <div className="space"></div>
                        <div className="space"></div>
                        <div className="game">
                            <div className='seed inline gray'>F</div>
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
                            <div className='seed inline gray'>I</div>
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
                        <div className="game">
                            <div className="pair">
                                {returnResult('winner', 'i')}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bracket-panel">

                <h2>Rice bracket</h2>
                <div className="brackets">
                    <div className="round">
                        <div className="heading2">Jan 24*</div>
                        <div className="game">
                            <div className='seed inline gray'>G</div>
                            <div className="inline pair">
                                {returnResult('loser', 'a')}
                                {returnResult('loser', 'b')}
                            </div>
                        </div>
                        <div className="game">
                            <div className='seed inline gray'>H</div>
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
                            <div className='seed inline gray'>J</div>
                            <div className="inline pair">
                                {returnResult('winner', 'g')}
                                {returnResult('loser', 'f')}
                            </div>
                        </div>
                        <div className="game">
                            <div className='seed inline gray'>K</div>
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
                            <div className='seed inline gray'>L</div>
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
                        <div className="game">
                            <div className="pair">
                                {returnResult('winner', 'l')}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}