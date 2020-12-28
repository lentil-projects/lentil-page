import React from 'react';
import { teamNames, playerNames } from './constants/teams';
import { results } from './constants/results';

const returnResult = (team, game, newGame, newIndex) => {
    if (team === 'winner' && results[game].winner) {
        return (
            <div className='row'>
                {returnScore(newGame, newIndex)}
                <div className='seed small-seed inline'>{playerNames[results[game].winner][0].seed}</div>
                <div className='team inline'>{teamNames[results[game].winner]}</div>
            </div>
        )
    }
    if (team === 'loser' && results[game].loser) {
        return (
            <div className='row'>
                {returnScore(newGame, newIndex)}
                <div className='seed small-seed inline'>{playerNames[results[game].loser][0].seed}</div>
                <div className='team inline'>{teamNames[results[game].loser]}</div>
            </div>
        )
    }
    return (<div className="team"><em>{`${team} of ${game.toUpperCase()}`}</em></div>)
}

const returnScore = (game, index) => {
    if (game === undefined || index === undefined) {
        return
    }
    if (!results[game].score.length) {
        return (<div className='inline score'>0</div>)
    }
    return (<div className='inline score'>{results[game].score[index]}</div>)
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
                                {returnResult('loser', 'i', 'm', 0)}
                                {returnResult('winner', 'l', 'm', 1)}
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
                                {returnResult('winner', 'i', 'n', 0)}
                                {returnResult('winner', 'm', 'n', 1)}
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
                                {returnResult('winner', 'n', 'o', 0)}
                                {returnResult('loser', 'n', 'o', 1)}
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