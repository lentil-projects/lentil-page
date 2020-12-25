import React from 'react';
import { teamNames, playerNames } from '../constants/teams';

const mapTeams = (seed, team) => {
    const hasTwitch = (index) => {
        if (playerNames[team][index].twitch){
            return (
                <a href={playerNames[team][index].twitch} target='_blank'>
                    <i class="fab fa-twitch"></i>
                </a>
            )
        } 
        return <></>
    }

    return (
        <>
            <div className="team-info">
                <div className="team-name flex">
                    <div className='seed inline'>{seed}</div>
                    <h2 className='inline'>{teamNames[team]}</h2>
                </div>
            <ul>
                <li>{playerNames[team][0].player} ({playerNames[team][0].elo}) {hasTwitch(0)}</li>
                <li>{playerNames[team][1].player} ({playerNames[team][1].elo}) {hasTwitch(1)}</li>
            </ul>
            </div>
        </>
    )
}

export const Teams = () => {
    return (
        <div>
            <h1>Teams</h1>
            <p>Click team name for more information.</p>
            <div className="teams">
                {mapTeams(1, 'team1')}
                {mapTeams(2, 'team2')}
                {mapTeams(3, 'team3')}
                {mapTeams(4, 'team4')}
                {mapTeams(5, 'team5')}
                {mapTeams(6, 'team6')}
                {mapTeams(7, 'team7')}
                {mapTeams(8, 'team8')}
            </div>
        </div>
    )
}