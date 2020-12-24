import React from 'react';

export const Brackets = () => {
    return (
        <div>
            <h2>Lentil bracket</h2>
            <div className='brackets'>
                <div className='round'>
                    <div className="heading">Jan 17</div>
                    <div className="pair">
                        <div className="team">Team 1</div>
                        <div className="team">Team 8</div>
                    </div>
                    <div className="pair">
                        <div className="team">Team 4</div>
                        <div className="team">Team 5</div>
                    </div>
                    <div className="pair">
                        <div className="team">Team 2</div>
                        <div className="team">Team 7</div>
                    </div>
                    <div className="pair">
                        <div className="team">Team 3</div>
                        <div className="team">Team 6</div>
                    </div>
                </div>
                <div className="round">
                <div className="heading">Jan 24</div>
                    <div className="pair">
                        <div className="team">Team 1</div>
                        <div className="team">Team 4</div>
                    </div>
                    <div className="pair">
                        <div className="team">Team 2</div>
                        <div className="team">Team 3</div>
                    </div>
                </div>
                <div className="round">
                <div className="heading">Jan 31</div>
                    <div className="pair">
                        <div className="team">Team 1</div>
                        <div className="team">Team 2</div>
                    </div>
                </div>
                <div className="round">
                    <div className="team">Team 1</div>
                </div>
                <div className="round"></div>
            </div>
            <h2>Rice bracket</h2>
            <div className="brackets">
                <div className="round"></div>
                <div className="round">
                <div className="heading2">Jan 24</div>
                    <div className="pair">
                        <div className="team">Team 8</div>
                        <div className="team">Team 5</div>
                    </div>
                    <div className="pair">
                        <div className="team">Team 7</div>
                        <div className="team">Team 6</div>
                    </div>
                </div>
                <div className="round">
                <div className="heading2">Jan 31</div>
                    <div className="pair">
                        <div className="team">Team 5</div>
                        <div className="team">Team 4</div>
                    </div>
                    <div className="pair">
                        <div className="team">Team 3</div>
                        <div className="team">Team 6</div>
                    </div>
                </div>
                <div className="round">
                <div className="heading2">Feb 7</div>
                <div className="pair">
                        <div className="team">Team 4</div>
                        <div className="team">Team 3</div>
                    </div>
                </div>
                <div className="round">
                    <div className="team">Team 3</div>
                </div>
            </div>
        </div>
    )
}