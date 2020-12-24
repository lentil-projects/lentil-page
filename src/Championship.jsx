import React from 'react';

export const Championship = () => {
    return (
        <div>
            <h2>backdoor Finals</h2>
            <div className="brackets">
                <div className="round">
                <div className="heading3">Feb 7</div>
                    <div className="pair">
                        <div className="team">Team 3</div>
                        <div className="team">Team 2</div>
                    </div>
                </div>
            </div>
            <h2>Finals</h2>
            <div className="brackets">
                <div className="round">
                <div className="heading3">Feb 14</div>
                    <div className="pair">
                        <div className="team">Team 1</div>
                        <div className="team">Team 3</div>
                    </div>
                </div>
            </div>
            <h2>post-Finals (if needed)</h2>
            <div className="brackets">
                <div className="round">
                <div className="heading3">Feb 21</div>
                    <div className="pair">
                        <div className="team">Team 5</div>
                        <div className="team">Team 2</div>
                    </div>
                </div>
            </div>
        </div>
    )
}