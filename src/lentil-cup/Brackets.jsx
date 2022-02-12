import React from 'react';
import { ChampionshipBrackets } from '../lentil-cup/components/brackets/Championship';
import { LentilBracket } from '../lentil-cup/components/brackets/LentilBracket'
import { RiceBracket } from '../lentil-cup/components/brackets/RiceBracket'
import { playerNames, shortNames } from '../lentil-cup/constants/teams';
import { results } from '../lentil-cup/constants/results';

const returnResult = (team, game, newGame, newIndex) => {
    if (team === 'winner' && results[game].winner) {
        return (
            <div className='row'>
                <div className='team-name'>
                    <div className='seed small-seed inline'>{playerNames[results[game].winner][0].seed}</div>
                    <div className='team inline'>{shortNames[results[game].winner]}</div>
                </div>
                {returnScore(newGame, newIndex)}
            </div>
        )
    }
    if (team === 'loser' && results[game].loser) {
        return (
            <div className='row'>
                <div className='team-name'>
                    <div className='seed small-seed inline'>{playerNames[results[game].loser][0].seed}</div>
                    <div className='team inline'>{shortNames[results[game].loser]}</div>
                </div>
                {returnScore(newGame, newIndex)}
            </div>
        )
    }
    return (<div className="row"><em>{`${team} of ${game.toUpperCase()}`}</em></div>)
}

const returnScore = (game, index) => {
    if (game === undefined || index === undefined) {
        return
    }
    if (!results[game].score.length) {
        return (<div className='score'>0</div>)
    }
    return (<div className='score'>{results[game].score[index]}</div>)
}

export const Brackets = () => {
    return (
        <>
            <div className="display">
                <div className='bracket-group'>
                    <LentilBracket returnResult={returnResult} returnScore={returnScore} />
                    <RiceBracket returnResult={returnResult} returnScore={returnScore} />
                </div>
                <ChampionshipBrackets returnResult={returnResult} returnScore={returnScore} />
            </div>
        </>
    )
}