import React from 'react';
import { teamNames, playerNames } from './constants/teams';
import { results} from './constants/results';

const returnResult = (team, game, newGame, newIndex) => {
    if (team === 'winner' && results[game].winner){
        return (
            <div>
            <div className='seed small-seed inline'>{playerNames[results[game].winner][0].seed}</div>
            <div className='team inline'>{teamNames[results[game].winner]}</div>
            {returnScore(newGame, newIndex)}
            </div>
        )
    }
    if (team === 'loser' && results[game].loser){
        return (
        <div>
        <div className='seed small-seed inline'>{playerNames[results[game].loser][0].seed}</div>
        <div className='team inline'>{teamNames[results[game].loser]}</div>
        {returnScore(newGame, newIndex)}
        </div>
        )
    }
    return (<div className="team"><em>{`${team} of ${game.toUpperCase()}`}</em></div>)
}

const returnScore = (game, index) => {
    if (game === undefined || index === undefined){
        return
    }
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
                                    {returnScore('c', 1)}
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
                                {returnResult('winner', 'a', 'e', 0)}
                                {returnResult('winner', 'b', 'e', 1)}
                            </div>
                        </div>
                        <div className="space"></div>
                        <div className="space"></div>
                        <div className="space"></div>
                        <div className="game">
                            <div className='seed inline gray'>F</div>
                            <div className="inline pair">
                                {returnResult('winner', 'c', 'f', 0)}
                                {returnResult('winner', 'd', 'f', 1)}
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
                                {returnResult('winner', 'e', 'i', 0)}
                                {returnResult('winner', 'f', 'i', 1)}
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
                                {returnResult('loser', 'a', 'g', 0)}
                                {returnResult('loser', 'b', 'g', 1)}
                            </div>
                        </div>
                        <div className="game">
                            <div className='seed inline gray'>H</div>
                            <div className="inline pair">
                                {returnResult('loser', 'c', 'h', 0)}
                                {returnResult('loser', 'd', 'h', 1)}
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
                                {returnResult('winner', 'g', 'j', 0)}
                                {returnResult('loser', 'f', 'j', 1)}
                            </div>
                        </div>
                        <div className="game">
                            <div className='seed inline gray'>K</div>
                            <div className="inline pair">
                                {returnResult('winner', 'h', 'k', 0)}
                                {returnResult('loser', 'e', 'k', 1)}
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
                                {returnResult('winner', 'j', 'l', 0)}
                                {returnResult('winner', 'k', 'l', 1)}
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