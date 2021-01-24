import React from 'react';

const subs = 59;
const subMoney = (100 + (subs * 2.5)).toFixed(2)

const firstPlace = (subMoney * .5).toFixed(2);
const secondPlace = (subMoney * .25).toFixed(2);
const thirdPlace = (subMoney * .15).toFixed(2);
const fourthPlace = (subMoney * .1).toFixed(2);

export const About = () => {
    return (
        <div className='rulebook'>
            <h1>About</h1>
            <p>Tournament presented by
                <a href='https://www.twitch.tv/lentil_aoe' target='_blank' rel="noreferrer">
                    <strong> Lentil
                <i class="fab fa-twitch large-logo"></i>
                    </strong></a></p>
            <h2>Current Prize Pool: ${subMoney}</h2>
            <p>$100 plus $2.50 for every Lentil sub ({subs} subs @ last update)</p>
            <p>Prize pool will be split as follows:</p>
            <ul className='money'>
                <li>First place (50%):<strong> ${firstPlace}</strong></li>
                <li>Second place (25%):<strong> ${secondPlace}</strong></li>
                <li>Third place (15%):<strong> ${thirdPlace}</strong></li>
                <li>Fourth place (10%):<strong> ${fourthPlace}</strong></li>
            </ul>
            <h2>Schedule</h2>
            <p>Round 2 casting begins Sunday, January 24th @ 10am (EST).</p>
        </div>
    )
}