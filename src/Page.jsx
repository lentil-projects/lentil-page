import React from 'react';
import { Brackets } from './Brackets'
import {Championship} from './Championship';

export const Page = () => {
    return (
        <div>
            <nav>
                <h2>Rulebook</h2>
                <h2>Teams</h2>
            </nav>
            <div className="display">
                <Brackets />
                <Championship />
            </div>
        </div>
    )
}