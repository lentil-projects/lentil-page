import React from 'react';
import { Brackets } from '../Brackets'
import { Championship } from '../Championship';

export const Page = () => {
    return (
        <>
        <h1>Bracket</h1>
        <p>Dates reflect when games will be cast.</p>
        <div className="display">
            <Brackets />
            <Championship />
        </div>
        </>
    )
}