import React from 'react';

export const Championship = () => {
    return (
        <div>
            <h2>backdoor Finals</h2>
            <div className="brackets">
                <div className="round">
                    <div className="heading3">Feb 7</div>
                    <div className="game">
                        <div className='seed inline'>M</div>
                        <div className="inline pair">
                            <div className="team"><em>loser of I</em></div>
                            <div className="team"><em>winner of L</em></div>
                        </div>
                    </div>
                </div>
            </div>
            <h2>Finals</h2>
            <div className="brackets">
                <div className="round">
                    <div className="heading3">Feb 14</div>
                    <div className="game">
                        <div className='seed inline'>N</div>
                        <div className="inline pair">
                            <div className="team"><em>winner of I</em></div>
                            <div className="team"><em>winner of M</em></div>
                        </div>
                    </div>
                </div>
            </div>
            <h2>post-Finals (if needed)</h2>
            <div className="brackets">
                <div className="round">
                    <div className="heading3">Feb 21</div>
                    <div className="game">
                        <div className='seed inline'>O</div>
                        <div className="inline pair">
                            <div className="team"><em>winner of N</em></div>
                            <div className="team"><em>winner of M</em></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}