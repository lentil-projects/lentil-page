import React from 'react';
import hi from '../assets/soundboard/hi.m4a'

export const Rulebook = () => {
    const hello = new Audio(hi)

    const playHi = () => {
        hello.play()
    }

    return (
        <div className='rulebook'>
            <h1>Rulebook</h1>
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
            <h2>Specifics</h2>
            <h3>Coming Soon!</h3>
            <br/>
            {/* <h3>Good Luck Have Fun!</h3> */}
            <button className='soundboard' onClick={() => playHi()}>glhf<i class="fas fa-volume-up"></i></button>
        </div>
    )
}