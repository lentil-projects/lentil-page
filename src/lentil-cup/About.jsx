import React from 'react';
import { LentilCupOneBrackets } from './components/brackets';
import { Teams } from './components/Teams';
import { shortNames } from './constants/teams';
import { Link } from 'react-router-dom';
import cageLogo from '../lentil-cup/assets/faceoff/cage-logo.png';

const subs = 63;
const subMoney = (150 + (subs * 2.5)).toFixed(2)

const firstPlace = (subMoney * .5).toFixed(2);
const secondPlace = (subMoney * .25).toFixed(2);
const thirdPlace = (subMoney * .15).toFixed(2);
const fourthPlace = (subMoney * .1).toFixed(2);

export const About = () => {
    window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });

    return (
        <div className='rulebook'>
            <h1>Lentil Cup 1</h1>
            <p><strong>Winner: </strong>Ernest Pudding's Gourd Surprise (Airiel and SurlyFish)</p>
            <LentilCupOneBrackets />
            <h2>About</h2>
            <ul>
                <li>2v2 co-op mode</li>
                <li>No civ draft, but no civ-repeat for the entire tournament</li>
                <li>Sixteen players, eight teams, double-elimination</li>
                <li>Games start January 9th, casting starts the 16th.</li>
                <li>Casting will be from recs. Each team will be given a week to schedule and play their games.</li>
            </ul>
            <br />
            <a href='https://docs.google.com/document/d/1FeTpa_AYYSYhO7UsA_7CIggEXysJtDuFVvf42aaW1Ts/edit'
                target='_blank'
                rel='noreferrer'
                className='purple'
            >
                Link to Rulebook
            </a>
            <i class="fas fa-external-link-alt"></i>
            <br />
            <h2>Maps</h2>
            <p>Megarandom only</p>
            <h2>Teams</h2>
            <Teams />
            <h2>Prize Pool: ${subMoney}</h2>
            <p>$150 plus $2.50 for every Lentil sub ({subs})</p>
            <p>$50 donated by Albatross_Rex!</p>
            <br />
            <ul className='money'>
                <li>1. {shortNames.team1} (50%): <strong>${firstPlace}</strong></li>
                <li>2. {shortNames.team2} (25%):<strong> ${secondPlace}</strong></li>
                <li>3. {shortNames.team3} (15%):<strong> ${thirdPlace}</strong></li>
                <li>4. {shortNames.team4} (10%):<strong> ${fourthPlace}</strong></li>
            </ul>
            <br />
            <Link to='/lentil-cup/1/faceoff' className='mobile-hide'>
                <img className='cage-logo' src={cageLogo} alt="" />
            </Link>
        </div>
    )
}