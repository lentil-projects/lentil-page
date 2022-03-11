import React, { useState } from 'react';
import { FaceoffStyle } from '../style/FaceoffStyle';
import { teamNames } from '../lentil-cup/constants/teams';
import { TeamInfo } from '../lentil-cup/components/TeamInfo';
import cage from '../lentil-cup/assets/faceoff/cage.jpg';
import travolta from '../lentil-cup/assets/faceoff/travolta.jpg';
import title from '../lentil-cup/assets/faceoff/faceoff-title.png';

export const Faceoff = () => {
    const [teamA, chooseTeamA] = useState('team1');
    const [teamB, chooseTeamB] = useState('team2');
    const [teamsVisible, showTeams] = useState(false);

    const chooseTeams = () => {
        showTeams(true)
    }

    const input = (e) => {
        console.log(e.target.value)
        if (e.target.name === 'teamA') {
            chooseTeamA(e.target.value)
        }
        if (e.target.name === 'teamB') {
            chooseTeamB(e.target.value)
        }
    }

    const teamOptions = team => {
        return (
            <select type="text" name={team} onChange={e => input(e)}>
                <option value="" disabled selected>Select a team</option>
                <option value='team1'>{teamNames['team1']}</option>
                <option value='team2'>{teamNames['team2']}</option>
                <option value='team3'>{teamNames['team3']}</option>
                <option value='team4'>{teamNames['team4']}</option>
                <option value='team5'>{teamNames['team5']}</option>
                <option value='team6'>{teamNames['team6']}</option>
                <option value='team7'>{teamNames['team7']}</option>
                <option value='team8'>{teamNames['team8']}</option>
            </select>
        )
    }

    return (
        <FaceoffStyle>
            <img src={cage} alt=""/>
            <img src={travolta} alt=""/>
            <div className="foreground">
                {!teamsVisible &&
                    <div className='container'>
                        <h6>LENTIL/CUP</h6>
                        <img className='gif' src='https://i.pinimg.com/originals/e0/bf/51/e0bf51ef59b428e3dca0b08b1516c839.gif' alt='faceoff movie gif' />
                        <div className="panel">
                            <div>
                                {teamOptions('teamA')}
                            </div>
                            <div>
                                {teamOptions('teamB')}
                            </div>
                            <br />
                            <button onClick={() => chooseTeams()}>submit</button>
                        </div>
                        <img className='title' src={title} alt='faceoff movie title'/>
                    </div>}
                {teamsVisible && <div className='container'>
                    <div className='flex'>
                        <div className="faceoff-team">
                            <TeamInfo team={teamA} />
                        </div>
                        <div className="faceoff-team">
                            <TeamInfo team={teamB} />
                        </div>
                    </div>
                </div>}
            </div>
        </FaceoffStyle>
    )
}