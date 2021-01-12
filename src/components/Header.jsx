import React from 'react';
import { Link } from 'react-router-dom';
import cageLogo from '../assets/faceoff/cage-logo.png';

export const Header = () => {
    return (
        <header>
            <div>
                <Link to='/'>
                    <h1 className='inline'>Lentil Cup</h1>
                </Link>
                <a href='https://www.twitch.tv/lentil_aoe' target='_blank' rel="noreferrer"><i class="fab fa-twitch large-logo"></i></a>
            </div>
            <nav>
                <Link to='/'>
                    <h2>Bracket</h2>
                </Link>
                <Link to='/teams'>
                    <h2>Teams</h2>
                </Link>
                <Link to='/caster'>
                <h2>About</h2>
                </Link>
                <Link to='/rulebook'>
                    <h2>Rulebook</h2>
                </Link>
                <Link to='/faceoff'>
                    <img className='cage-logo' src={cageLogo} alt="" />
                </Link>
            </nav>
        </header>
    )
}