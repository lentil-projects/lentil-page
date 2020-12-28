import React from 'react';

export const ChampionshipBrackets = props => {
    return (
        <div className='bracket-group championship'>
            <div className="bracket-panel little-bracket">
                <h2>backdoor Finals</h2>
                <div className="brackets">
                    <div className="round">
                        <div className="heading3">Feb 7*</div>
                        <div className="game">
                            <div className='seed inline gray'>M</div>
                            <div className="inline pair">
                                {props.returnResult('loser', 'i', 'm', 0)}
                                {props.returnResult('winner', 'l', 'm', 1)}
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
                                {props.returnResult('winner', 'm')}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bracket-panel little-bracket">
                <h2>Finals</h2>
                <div className="brackets">
                    <div className="round">
                        <div className="heading3">Feb 14*</div>
                        <div className="game">
                            <div className='seed inline gray'>N</div>
                            <div className="inline pair">
                                {props.returnResult('winner', 'i', 'n', 0)}
                                {props.returnResult('winner', 'm', 'n', 1)}
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
                                {props.returnResult('winner', 'n')}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bracket-panel little-bracket">
                <h2>Finals round 2** </h2>
                <div className="brackets">
                    <div className="round">
                        <div className="heading3">Feb 21*</div>
                        <div className="game">
                            <div className='seed inline gray'>O</div>
                            <div className="inline pair">
                                {props.returnResult('winner', 'n', 'o', 0)}
                                {props.returnResult('loser', 'n', 'o', 1)}
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
                                {props.returnResult('winner', 'o')}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <p className='white note'>* dates reflect when games are cast</p>
            <p className='white note'>** if needed</p>
        </div>
    )
}