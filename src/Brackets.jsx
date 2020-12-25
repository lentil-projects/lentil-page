import React from 'react';
import {teamNames} from './constants/teams';

export const Brackets = () => {
    return (
        <div>
            <h2>Lentil bracket</h2>
            <div className='brackets'>
                <div className='round'>
                    <div className="heading">Jan 17</div>
                    <div className='game'>
                        <div className='seed inline'>A</div>
                        <div className="inline pair">
                            <div className="team">{teamNames.team1}</div>
                            <div className="team">{teamNames.team8}</div>
                        </div>
                    </div>
                    <div className="game">
                        <div className='seed inline'>B</div>
                        <div className="inline pair">
                            <div className="team">{teamNames.team4}</div>
                            <div className="team">{teamNames.team5}</div>
                        </div>
                    </div>
                    <div className="space"></div>
                    <div className="game">
                        <div className='seed inline'>C</div>
                        <div className="inline pair">
                            <div className="team">{teamNames.team2}</div>
                            <div className="team">{teamNames.team7}</div>
                        </div>
                    </div>
                    <div className="game">
                        <div className='seed inline'>D</div>
                        <div className="inline pair">
                            <div className="team">{teamNames.team3}</div>
                            <div className="team">{teamNames.team6}</div>
                        </div>
                    </div>
                </div>
                <div className='space-col'>
                   <div className="space"></div>
                    <div className="triangle">{']-'}</div>
                   <div className="space"></div>
                   {/* <div className="space"></div> */}
                   <div className="space"></div>
                    <div className="triangle">{']-'}</div>
                </div>
                <div className="round">
                    <div className="heading">Jan 24</div>
                    <div className="game">
                        <div className='seed inline'>E</div>
                        <div className="inline pair">
                            <div className="team"><em>winner of A</em></div>
                            <div className="team"><em>winner of B</em></div>
                        </div>
                    </div>
                    <div className="space"></div>
                    {/* <div className="space"></div> */}
                    <div className="space"></div>
                    <div className="game">
                        <div className='seed inline'>F</div>
                        <div className="inline pair">
                            <div className="team"><em>winner of C</em></div>
                            <div className="team"><em>winner of D</em></div>
                        </div>
                    </div>
                </div>
                <div className="space-col">
                    <div className="space"></div>
                    <div className="triangle">{']-'}</div>
                </div>
                <div className="round">
                    <div className="heading">Jan 31</div>
                    <div className="game">
                        <div className='seed inline'>I</div>
                        <div className="inline pair">
                            <div className="team"><em>winner of E</em></div>
                            <div className="team"><em>winner of F</em></div>
                        </div>
                    </div>
                </div>
                <div className="space-col">
                        <div className="space"></div>
                        <div className="arrow">{'--'}</div>
                    </div>
                <div className="round">
                    <div className="space"></div>
                    <div className="team pair"><em>winner of I</em></div>
                </div>
                <div className="round"></div>
            </div>
            <h2>Rice bracket</h2>
            <div className="brackets">
                <div className="round"></div>
                <div className="round">
                    <div className="heading2">Jan 24</div>
                    <div className="game">
                        <div className='seed inline'>G</div>
                        <div className="inline pair">
                            <div className="team"><em>loser of A</em></div>
                            <div className="team"><em>loser of B</em></div>
                        </div>
                    </div>
                    <div className="game">
                        <div className='seed inline'>H</div>
                        <div className="inline pair">
                            <div className="team"><em>loser of C</em></div>
                            <div className="team"><em>loser of D</em></div>
                        </div>
                    </div>
                </div>
                    <div className="space-col">
                        <div className="space"></div>
                        <div className="arrow">{'--'}</div>
                        <div className="arrow">{'--'}</div>
                    </div>
                <div className="round">
                    <div className="heading2">Jan 31</div>
                    <div className="game">
                        <div className='seed inline'>J</div>
                        <div className="inline pair">
                            <div className="team"><em>winner of G</em></div>
                            <div className="team"><em>loser of F</em></div>
                        </div>
                    </div>
                    <div className="game">
                        <div className='seed inline'>K</div>
                        <div className="inline pair">
                            <div className="team"><em>winner of H</em></div>
                            <div className="team"><em>loser of E</em></div>
                        </div>
                    </div>
                </div>
                <div className="space-col">
                    <div className="space"></div>
                    <div className="triangle">{']-'}</div>
                </div>
                <div className="round">
                    <div className="heading2">Feb 7</div>
                    <div className="game">
                        <div className='seed inline'>L</div>
                        <div className="inline pair">
                            <div className="team"><em>winner of J</em></div>
                            <div className="team"><em>winner of K</em></div>
                        </div>
                    </div>
                </div>
                <div className="space-col">
                        <div className="space"></div>
                        <div className="arrow">{'--'}</div>
                    </div>
                <div className="round">
                    <div className="space"></div>
                    <div className="team pair"><em>winner of L</em></div>
                </div>
            </div>
        </div>
    )
}