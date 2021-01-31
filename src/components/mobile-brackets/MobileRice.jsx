import React from 'react';

export const MobileRice = props => {
    return (
        <div className='mobile-only'>
            <div className="round">
                <div className="heading2">Feb 7*: The Rice Bowl</div>
                <p>best of 5</p>
                <div className="game-group">
                    <div className='seed inline gray'>L</div>
                    <div className="game">
                        {props.returnResult('winner', 'j', 'l', 0)}
                        {props.returnResult('winner', 'k', 'l', 1)}
                    </div>
                </div>
            </div>
        </div>
    )
}