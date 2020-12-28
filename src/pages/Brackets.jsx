import React from 'react';
import { ChampionshipBrackets} from '../components/brackets/Championship';
import { LentilBracket } from '../components/brackets/LentilBracket'
import { RiceBracket } from '../components/brackets/RiceBracket'
import { teamNames, playerNames } from '../constants/teams';
import { results } from '../constants/results';

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

export const Brackets = () => {
    return (
        <>
            <div className="display">
                <div className='bracket-group'>
                    <LentilBracket returnResult={returnResult} returnScore={returnScore} />
                    <RiceBracket returnResult={returnResult} returnScore={returnScore} />
                </div>
                <ChampionshipBrackets returnResult={returnResult} returnScore={returnScore}/>
            </div>
        </>
    )
}