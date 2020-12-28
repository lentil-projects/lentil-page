import React from 'react';
import { teamNames, playerNames } from './constants/teams';
import { results} from './constants/results';

const returnResult = (team, game) => {
    if (team === 'winner' && results[game].winner){
        return (<div className='team'>{teamNames[results[game].winner]}</div>)
    }
    if (team === 'loser' && results[game].loser){
        return (<div className='team'>{teamNames[results[game].loser]}</div>)
    }
    return (<div className="team"><em>{`${team} of ${game.toUpperCase()}`}</em></div>)
}

const returnScore = (game, index) => {
    if (!results[game].score.length){
        return (<div className='inline score'>0</div>)
    }
    return (<div className='inline score'>{results[game].score[index]}</div>)
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
                                    {returnScore('a', 0)}
                                </div>
                                <div className="line">
                                    <div className='seed small-seed inline'>{playerNames.team8[0].seed}</div>
                                    <div className="team inline">{teamNames.team8}</div>
                                    {returnScore('a', 1)}
                                </div>
                            </div>
                        </div>
                        <div className="game">
                            <div className='seed inline gray'>B</div>
                            <div className="inline pair">
                                <div className="line">
                                    <div className='seed small-seed inline'>{playerNames.team4[0].seed}</div>
                                    <div className="team inline">{teamNames.team4}</div>
                                    {returnScore('b', 0)}
                                </div>
                                <div className="line">
                                    <div className='seed small-seed inline'>{playerNames.team5[0].seed}</div>
                                    <div className="team inline">{teamNames.team5}</div>
                                    {returnScore('b', 1)}
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
                                    {returnScore('c', 0)}
                                </div>
                                <div className="line">
                                    <div className='seed small-seed inline'>{playerNames.team7[0].seed}</div>
                                    <div className="team inline">{teamNames.team7}</div>
                                    {returnScore('a', 1)}
                                </div>
                            </div>
                        </div>
                        <div className="game">
                            <div className='seed inline gray'>D</div>
                            <div className="inline pair">
                                <div className="line">
                                    <div className='seed small-seed inline'>{playerNames.team3[0].seed}</div>
                                    <div className="team inline">{teamNames.team3}</div>
                                    {returnScore('d', 0)}
                                </div>
                                <div className="line">
                                    <div className='seed small-seed inline'>{playerNames.team6[0].seed}</div>
                                    <div className="team inline">{teamNames.team6}</div>
                                    {returnScore('d', 1)}
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