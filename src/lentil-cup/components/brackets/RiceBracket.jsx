import React from 'react';
import {MobileRice} from '../mobile-brackets/MobileRice';

export const RiceBracket = props => {
    return (
        <div className="bracket-panel">
                <h2>Rice bracket</h2>
            <MobileRice returnResult={props.returnResult} returnScore={props.returnScore} />
                <div className="brackets mobile-hide">
                    <div className="round">
                        <div className="heading2">Jan 24</div>
                        <p>best of 3</p>
                        <div className="game-group">
                            <div className='seed inline gray'>G</div>
                            <div className='game'>
                                {props.returnResult('loser', 'a', 'g', 0)}
                                {props.returnResult('loser', 'b', 'g', 1)}
                            </div>
                        </div>
                        <div className="game-group">
                            <div className='seed inline gray'>H</div>
                            <div className="game">
                                {props.returnResult('loser', 'c', 'h', 0)}
                                {props.returnResult('loser', 'd', 'h', 1)}
                            </div>
                        </div>
                    </div>
                    <div className="space-col">
                        <div className="space"></div>
                        <div className="space"></div>
                        <div className="arrow">{'--'}</div>
                        <div className="arrow">{'--'}</div>
                    </div>
                    <div className="round">
                        <div className="heading2">Jan 31</div>
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
                    <div className="space-col">
                        <div className="space"></div>
                        <div className="space"></div>
                        <div className="triangle">{']-'}</div>
                    </div>
                    <div className="round">
                        <div className="heading2">Feb 7: The Rice Bowl</div>
                        <p>best of 5</p>
                        <div className="game-group">
                            <div className='seed inline gray'>L</div>
                            <div className="game">
                                {props.returnResult('winner', 'j', 'l', 0)}
                                {props.returnResult('winner', 'k', 'l', 1)}
                            </div>
                        </div>
                    </div>
                    <div className="space-col">
                        <div className="space"></div>
                        <div className="space"></div>
                        <div className="arrow">{'--'}</div>
                    </div>
                    <div className="round">
                        <div className="space"></div>
                        <div className="space"></div>
                        <div className="game">
                            <div className="pair">
                                {props.returnResult('winner', 'l')}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}