import React from 'react';
import { Brackets } from '../Brackets'
import { Championship } from '../Championship';

export const Page = () => {
    return (
        <>
        <h1>Brackets</h1>
        <div className="display">
            <Brackets />
            <Championship />
        </div>
        </>
    )
}