import React from 'react';
import { teamNames, playerNames } from '../../lentil-cup/constants/teams';

export const Teams = () => { 

    const mapTeams = (team) => {
        const hasTwitch = (index) => {
            if (playerNames[team][index].twitch) {
                return (
                    <a href={playerNames[team][index].twitch} target='_blank' rel="noreferrer">
                        <i class="fab fa-twitch"></i>
                    </a>
                )
            }
            return <></>
        }

        const hasFlag = (index) => {
            if (playerNames[team][index].flag) {
                return (
                    <img src={playerNames[team][index].flag} alt={playerNames[team][index].flag} />
                )
            }
            return <></>
        }

        return (
            <>
                <div className='team-info' >
                    {playerNames[team][0].logo && <img className='team-logo' src={playerNames[team][0].logo} alt={`${team} logo`} />}
                    <div className="team-name flex">
                        <div className='seed inline'>{playerNames[team][0].seed}</div>
                        <h2 className='inline'>{teamNames[team]}</h2>
                    </div>
                    <ul>
                        <li>{hasTwitch(0)} {playerNames[team][0].player} ({playerNames[team][0].elo}) {hasFlag(0)}</li>
                        <li>{hasTwitch(1)} {playerNames[team][1].player} ({playerNames[team][1].elo}) {hasFlag(1)}</li>
                    </ul>
                </div>
            </>
        )
    }

    return (
        <div>
            <div className="teams">
                {mapTeams('team1')}
                {mapTeams('team2')}
                {mapTeams('team3')}
                {mapTeams('team4')}
                {mapTeams('team5')}
                {mapTeams('team6')}
                {mapTeams('team7')}
                {mapTeams('team8')}
            </div>
        </div>
    )
}