import React from 'react';

const subs = 63;
const subMoney = (150 + (subs * 2.5)).toFixed(2)

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
                    </strong>
                </a>
            </p>
            <a href='https://docs.google.com/document/d/1FeTpa_AYYSYhO7UsA_7CIggEXysJtDuFVvf42aaW1Ts/edit'
                target='_blank'
                rel='noreferrer'
                className='purple'
            >
                Link to Rulebook
            </a>
            <i class="fas fa-external-link-alt"></i>
            <h2>Overview</h2>
            <ul>
                <li>2v2 Co-op</li>
                <li>Megarandom only</li>
                <li>No civ draft, but no civ-repeat for the entire tournament</li>
                <li>Sixteen players, eight teams, double-elimination</li>
                <li>Games start January 9th, casting starts the 16th.</li>
                <li>Five weeks of play, unless an undefeated team loses in the finals, then six weeks of play.</li>
                <li>Casting will be from recs. Each team will be given a week to schedule and play their games.</li>
            </ul>
            <h2>Current Prize Pool: ${subMoney}</h2>
            <p>$150 plus $2.50 for every Lentil sub ({subs} subs @ last update)</p>
            <ul>
                <li>$50 donated by Albatross_Rex!</li>
            </ul>
            <br />
            <p>Prize pool will be split as follows:</p>
            <ul className='money'>
                <li>First place (50%):<strong> ${firstPlace}</strong></li>
                <li>Second place (25%):<strong> ${secondPlace}</strong></li>
                <li>Third place (15%):<strong> ${thirdPlace}</strong></li>
                <li>Fourth place (10%):<strong> ${fourthPlace}</strong></li>
            </ul>
            {/* <h2>Schedule</h2> */}
            {/* <p>Lentil SOUPer Bowl!: casting begins Sunday, February 21st @ 9am (EST)</p> */}
        </div>
    )
}