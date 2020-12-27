import React from 'react';
import { teamNames, playerNames } from '../constants/teams';
import { Civs } from './Civs';

export const TeamInfo = props => {
    const { team } = props

    const hasTwitch = (index) => {
        if (playerNames[team][index].twitch) {
            return (
                <a href={playerNames[team][index].twitch} target='_blank' rel="noreferrer">
                    <i className="fab fa-twitch"></i>
                </a>
            )
        }
        return <></>
    }

    const hasFlag = (index) => {
        if (playerNames[team][index].flag){
            return (
                <img src={playerNames[team][index].flag} alt={playerNames[team][index].flag} />
            )
        }
        return <></>
    }

    return (
        <div className="modal-container">
            <div className="modal" >
                <i class="fas fa-times" onClick={() => props.hideModal()}></i>
                <div className="team-header">
                    <div className="left">
                        {playerNames[props.team][0].logo && <img className="team-logo" src={playerNames[props.team][0].logo} alt="" />}
                    </div>
                    <div className="right">
                        <div className='flex2'>
                            <div className='seed inline'>{playerNames[props.team][0].seed}</div>
                            <h1>{teamNames[props.team]}</h1>
                        </div>
                        <ul>
                            <li>
                                {hasTwitch(0)}
                                {playerNames[team][0].player}
                                ({playerNames[team][0].elo})
                                {hasFlag(0)}
                            </li>
                            <li>
                                {hasTwitch(1)}
                                {playerNames[team][1].player}
                                ({playerNames[team][1].elo})
                                {hasFlag(1)}
                            </li>
                        </ul>
                    </div>
                </div>
                <Civs team={props.team} />
            </div>
        </div>
    )
}