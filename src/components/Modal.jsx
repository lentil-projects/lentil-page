import React from 'react';
import {TeamInfo} from './TeamInfo';

export const Modal = props => {
    return (
        <div className="modal-container">
            <div className="modal" >
            <i class="fas fa-times" onClick={() => props.hideModal()}></i>
            <TeamInfo team={props.team} />
            </div>
        </div>
    )
}