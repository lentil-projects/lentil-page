import React from 'react';
import { Brackets } from '../Brackets'
import { Championship } from '../Championship';

export const Page = () => {
    return (
        <div className="display">
            <Brackets />
            <Championship />
        </div>
    )
}