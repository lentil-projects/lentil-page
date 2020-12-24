import React from 'react';
import { Link } from 'react-router-dom';

export const Header = () => {
    return (
        <header>
            <Link to='/'>
                <h1>Lentil Cup <i class="fab fa-twitch"></i></h1>
            </Link>
            <nav>
                <Link to='/teams'>
                    <h2>Teams</h2>
                </Link>
                <Link to='/rulebook'>
                    <h2>Rulebook</h2>
                </Link>
            </nav>
        </header>
    )
}