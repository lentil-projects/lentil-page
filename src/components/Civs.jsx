import React, { useState } from 'react';
import { civsList, teamCivPicks } from '../constants/civs';

export const Civs = props => {
    const [teamCivs, updateCivs] = useState({})

    const addX = (civ) => {
        if (teamCivPicks[props.team].includes(civ)) {
            return
        }

        updateCivs({
            ...teamCivs,
            [civ]: !teamCivs[civ],
        })
    }

    const mapUsedCivs = () => {
        if (!teamCivPicks[props.team].length){
            return <h3>None.</h3>
        }

        return teamCivPicks[props.team].map(civ => {
            return (
                <div className={`civ flex2 ${civ} used`} onClick={() => addX(civ)}>
                    {<p id='x' className='locked'>X</p>}
                    {teamCivs[civ] && <p id='x'>X</p>}
                    <p>{civ}</p>
                </div>
            )
        })
    }

    const remainingCivs = civsList.filter(civ => !teamCivPicks[props.team].includes(civ));

    const mapCivs = () => {
        return remainingCivs.map(civ => {
            return (
                <div key={civ} className={`civ flex2 ${civ}`} onClick={() => addX(civ)}>
                    {teamCivPicks[props.team].includes(civ) && <p id='x'>X</p>}
                    {teamCivs[civ] && <p id='x'>X</p>}
                    <p>{civ}</p>
                </div>
            )
        })
    }

    return (
        <>
            <h2>Used Civs:</h2>
            <div className="civs flex2">
                {mapUsedCivs()}
            </div>
            <h2>Remaining Civs:</h2>
            <div className="civs flex2">
                {mapCivs()}
            </div>
        </>
    )
}