import React, {useState} from 'react';
import {civsList} from '../constants/civs';

export const Civs = () => {
    const [team1Civs, updateCivs] = useState({
        britons: false,
        byzantines: false
    })

    const addX = (civ) => {
        updateCivs({
            ...team1Civs,
            [civ]: !team1Civs[civ],
        })
    }

    const mapCivs = () => {
        return civsList.map(civ => {
            return (
                <div className="civ flex2" onClick={() => addX(civ)}>
                    {team1Civs[civ] && <p id='x'>X</p>}
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