import React from 'react';

export const MobileLentil = props => {
    return (
        <div className='mobile-only'>
            <div className="round">
                <div className="heading">Jan 31*: The Lentil Bowl</div>
                <p>best of 5</p>
                <div className="game-group">
                    <div className='seed inline gray'>I</div>
                    <div className="game">
                        {props.returnResult('winner', 'e', 'i', 0)}
                        {props.returnResult('winner', 'f', 'i', 1)}
                    </div>
                </div>
            </div>
        </div>
    )
}