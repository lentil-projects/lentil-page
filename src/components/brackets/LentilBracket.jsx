import React from 'react';
import { teamNames, playerNames } from '../../constants/teams';

export const LentilBracket = props => {
    return (
        <div className="bracket-panel">
        <h2>Lentil bracket</h2>
        <div className='brackets'>
            <div className='round'>
                <div className="heading">Jan 17*</div>
                <div className='game-group'>
                    <div className='seed inline gray'>A</div>
                    <div className="game">
                        <div className="row winner">
                            {props.returnScore('a', 0)}
                            <div className='seed small-seed'>{playerNames.team1[0].seed}</div>
                            <div>{teamNames.team1}</div>
                        </div>
                        <div className="row loser">
                            {props.returnScore('a', 1)}
                            <div className='seed small-seed'>{playerNames.team8[0].seed}</div>
                            <div className="">{teamNames.team8}</div>
                        </div>
                    </div>
                </div>
                <div className="game-group">
                    <div className='seed inline gray'>B</div>
                    <div className="game">
                        <div className="row loser">
                            {props.returnScore('b', 0)}
                            <div className='seed small-seed inline'>{playerNames.team4[0].seed}</div>
                            <div className="team inline">{teamNames.team4}</div>
                        </div>
                        <div className="row winner">
                            {props.returnScore('b', 1)}
                            <div className='seed small-seed inline'>{playerNames.team5[0].seed}</div>
                            <div className="team inline">{teamNames.team5}</div>
                        </div>
                    </div>
                </div>
                <div className="space"></div>
                <div className="game-group">
                    <div className='seed inline gray'>C</div>
                    <div className="game">
                        <div className="row">
                            {props.returnScore('c', 0)}
                            <div className='seed small-seed inline'>{playerNames.team2[0].seed}</div>
                            <div className="team inline">{teamNames.team2}</div>
                        </div>
                        <div className="row">
                            {props.returnScore('c', 1)}
                            <div className='seed small-seed inline'>{playerNames.team7[0].seed}</div>
                            <div className="team inline">{teamNames.team7}</div>
                        </div>
                    </div>
                </div>
                <div className="game-group">
                    <div className='seed inline gray'>D</div>
                    <div className="game">
                        <div className="row">
                            {props.returnScore('d', 0)}
                            <div className='seed small-seed inline'>{playerNames.team3[0].seed}</div>
                            <div className="team inline">{teamNames.team3}</div>
                        </div>
                        <div className="row">
                            {props.returnScore('d', 1)}
                            <div className='seed small-seed inline'>{playerNames.team6[0].seed}</div>
                            <div className="team inline">{teamNames.team6}</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='space-col'>
                <div className="space"></div>
                <div className="triangle">{']-'}</div>
                <div className="space"></div>
                <div className="space"></div>
                <div className="space"></div>
                <div className="triangle">{']-'}</div>
            </div>
            <div className="round">
                <div className="heading">Jan 24*</div>
                <div className="game-group">
                    <div className='seed inline gray'>E</div>
                    <div className="game">
                        {props.returnResult('winner', 'a', 'e', 0)}
                        {props.returnResult('winner', 'b', 'e', 1)}
                    </div>
                </div>
                <div className="space"></div>
                <div className="space"></div>
                <div className="space"></div>
                <div className="game-group">
                    <div className='seed inline gray'>F</div>
                    <div className="game">
                        {props.returnResult('winner', 'c', 'f', 0)}
                        {props.returnResult('winner', 'd', 'f', 1)}
                    </div>
                </div>
            </div>
            <div className="space-col">
                <div className="space"></div>
                <div className="triangle">{']-'}</div>
            </div>
            <div className="round">
                <div className="heading">Jan 31*</div>
                <div className="game-group">
                    <div className='seed inline gray'>I</div>
                    <div className="game">
                        {props.returnResult('winner', 'e', 'i', 0)}
                        {props.returnResult('winner', 'f', 'i', 1)}
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
                        {props.returnResult('winner', 'i')}
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}