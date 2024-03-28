import React from 'react';
import Packers from './Packers';
import { Link } from 'react-router-dom';
import { GrAdd } from "react-icons/gr";

function PackersList({ packers, onDelete, onEdit }) {
    return (
        <table id="packers">
            <caption>Log of Green Bay Packers games</caption>
            <thead>
                <tr>
                    <th><Link to="/create"><GrAdd title="Add a game to the log" /></Link></th>
                    <th>Delete</th>
                    <th>Edit</th>
                    <th>Opponent</th>
                    <th>Game Date</th>
                    <th>Point Differential</th>
                </tr>
            </thead>
            <tbody>
                {packers.map((packers, i) => 
                    <Packers 
                        packers={packers} 
                        key={i}
                        onDelete={onDelete}
                        onEdit={onEdit} 
                    />)}
            </tbody>
        </table>
    );
}

export default PackersList;
