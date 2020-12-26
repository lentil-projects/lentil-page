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
            <div className="team-header">

            <div className="left">
                <img className="team-logo" src="https://www.nicepng.com/png/detail/146-1465832_free-download-pink-starbucks-coffee-clipart-coffee-custom.png" alt=""/>
                {/* <img className="team-logo" src='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/78de9a95-c490-4759-a56f-59fd24b2fa60/d65ebqq-96a2e709-1c6c-4584-9f59-19e662de41ed.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvNzhkZTlhOTUtYzQ5MC00NzU5LWE1NmYtNTlmZDI0YjJmYTYwXC9kNjVlYnFxLTk2YTJlNzA5LTFjNmMtNDU4NC05ZjU5LTE5ZTY2MmRlNDFlZC5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.aDVr5CjtCp1taThztNxKENS4Ov3TA4qixvG073CM_ZA' alt=""/> */}
            </div>
            <div className="right">
            <div className='flex2'>
                <div className='seed inline'>1</div>
                <h1>{teamNames[props.team]}</h1>
            </div>
            <ul>
                <li>{playerNames[team][0].player} ({playerNames[team][0].elo}) {hasTwitch(0)}</li>
                <li>{playerNames[team][1].player} ({playerNames[team][1].elo}) {hasTwitch(1)}</li>
            </ul>
            </div>
            </div>
            <Civs />
        </div>
    )
}