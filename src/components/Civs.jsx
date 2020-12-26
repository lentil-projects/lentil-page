import React, {useState} from 'react';
import {civsList, teamCivPicks} from '../constants/civs';

export const Civs = props => {
    const [teamCivs, updateCivs] = useState({})

    const addX = (civ) => {
        if(teamCivPicks[props.team].includes(civ)){
            return
        }

        updateCivs({
            ...teamCivs,
            [civ]: !teamCivs[civ],
        })
    }

    const mapCivs = () => {
        return civsList.map(civ => {
            return (
                <div className="civ flex2" onClick={() => addX(civ)}>
                    {teamCivPicks[props.team].includes(civ) && <p id='x'>X</p>}
                    {teamCivs[civ] && <p id='x'>X</p>}
                    <p>{civ}</p>
                </div>
            )
        })
    }

    return (
    <>
        <h2>Remaining Civs:</h2>
            <div className="civs flex2">
                {mapCivs()}
            </div>
    </>
    )
}