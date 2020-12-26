import React from 'react';
import { teamNames, playerNames } from '../constants/teams';
import {Civs} from './Civs';

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

    return (
        <div className="modal" >
            <i class="fas fa-times" onClick={() => props.hideModal()}></i>
            <div className='flex2'>
                <div className='seed inline'>1</div>
                <h1>{teamNames[props.team]}</h1>
            </div>
            <ul>
                <li>{playerNames[team][0].player} ({playerNames[team][0].elo}) {hasTwitch(0)}</li>
                <li>{playerNames[team][1].player} ({playerNames[team][1].elo}) {hasTwitch(1)}</li>
            </ul>
            <Civs />
        </div>
    )
}