import React from 'react';

export const Championship = () => {
    return (
        <div>
            <h1>Finals</h1>
            <div className="brackets">
                <div className="round">
                <div className="heading3">Jan 31</div>
                    <div className="pair">
                        <div className="team">Team 1</div>
                        <div className="team">Team 5</div>
                    </div>
                </div>
                <div className="round">
                    <div className="team">Team 5</div>
                </div>
            </div>
            <h1>Post-Finals</h1>
            <p>(if necessary)</p>
            <div className="brackets">
                <div className="round">
                <div className="heading3">Feb 7</div>
                    <div className="pair">
                        <div className="team">Team 5</div>
                        <div className="team">Team 2</div>
                    </div>
                </div>
                <div className="round">
                    <div className="team">Champion</div>
                </div>
            </div>
        </div>
    )
}