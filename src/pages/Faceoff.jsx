import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaceoffStyle } from '../style/FaceoffStyle';

export const Faceoff = () => {
    const [teamA, chooseTeamA] = useState('Team 1');
    const [teamB, chooseTeamB] = useState('Team 1');
    const [teamsVisible, showTeams] = useState(false);

    const chooseTeams = () => {
        showTeams(true)
    }

    const input = (e) => {
        console.log(e.target.value)
        if (e.target.name === 'teamA'){
            chooseTeamA(e.target.value)
        }
        if (e.target.name === 'teamB'){
            chooseTeamB(e.target.value)
        }
    }

    const teamOptions = team => {
        return (
            <select type="text" name={team} onChange={e => input(e)}>
                <option>Team 1</option>
                <option>Team 2</option>
                <option>Team 3</option>
                <option>Team 4</option>
                <option>Team 5</option>
                <option>Team 6</option>
                <option>Team 7</option>
                <option>Team 8</option>
            </select>
        )
    }

    return (
        <FaceoffStyle>
            <div className="foreground">
                <Link to='/'>
                    <h3>X</h3>
                </Link>
                        {!teamsVisible && 
                <div className='container'>
                    <h1>Lentil Cup Face/Off</h1>
                    <div className="panel">
                            <div>
                                Pick Team
                                {teamOptions('teamA')}
                            </div>
                            <div>
                                Pick Team
                                {teamOptions('teamB')}
                            </div>
                            <br />
                            <button onClick={() => chooseTeams()}>submit</button>
                    </div>
                    <img className='gif' src='https://i.pinimg.com/originals/e0/bf/51/e0bf51ef59b428e3dca0b08b1516c839.gif' alt='faceoff movie gif' />
                        </div>}
                        {teamsVisible && <div className='container'>
                    <div className='flex'>
                        <div className='panel'>{teamA}</div>
                        <div className='panel'>{teamB}</div>
                </div>
                        </div>}
            </div>
        </FaceoffStyle>
    )
}