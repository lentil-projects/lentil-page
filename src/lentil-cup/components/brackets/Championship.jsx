import React from 'react';

export const ChampionshipBrackets = props => {
    return (
        <div className='bracket-group championship'>
            <div className="bracket-panel little-bracket">
                <h2>The Stir-Frynals</h2>
                <div className="brackets">
                    <div className="round">
                        <div className="heading3">Feb 14</div>
                        <p>best of 5</p>
                        <div className='game-group'>
                            <div className='seed inline gray'>M</div>
                            <div className='game'>
                                {props.returnResult('loser', 'i', 'm', 0)}
                                {props.returnResult('winner', 'l', 'm', 1)}
                            </div>
                        </div>
                    </div>
                    <div className="space-col mobile-hide">
                        <div className="space"></div>
                        <div className="space"></div>
                        <div className="arrow">{'--'}</div>
                    </div>
                    <div className="round mobile-hide">
                        <div className="space"></div>
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
                <h2>The Lentil SOUPer Bowl</h2>
                <div className="brackets">
                    <div className="round">
                        <div className="heading3">Feb 21</div>
                        <p>best of 7</p>
                        <div className='game-group'>
                            <div className='seed inline gray'>N</div>
                            <div className='game'>
                                {props.returnResult('winner', 'i', 'n', 0)}
                                {props.returnResult('winner', 'm', 'n', 1)}
                            </div>
                        </div>
                    </div>
                    <div className="space-col mobile-hide">
                        <div className="space"></div>
                        <div className="space"></div>
                        <div className="arrow">{'--'}</div>
                    </div>
                    <div className="round mobile-hide">
                        <div className="space"></div>
                        <div className="space"></div>
                        <div className="game">
                            <div className="pair">
                                {props.returnResult('winner', 'n')}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}