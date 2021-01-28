import React from 'react';

export const MobileRice = props => {
    return (
        <div className='mobile-only'>
                 <div className="round">
                        <div className="heading2">Jan 31*</div>
                        <p>best of 3</p>
                        <div className="game-group">
                            <div className='seed inline gray'>J</div>
                            <div className="game">
                                {props.returnResult('winner', 'g', 'j', 0)}
                                {props.returnResult('loser', 'f', 'j', 1)}
                            </div>
                        </div>
                        <div className="game-group">
                            <div className='seed inline gray'>K</div>
                            <div className="game">
                                {props.returnResult('winner', 'h', 'k', 0)}
                                {props.returnResult('loser', 'e', 'k', 1)}
                            </div>
                        </div>
                    </div>
        </div>
    )
}