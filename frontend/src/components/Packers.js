import React from 'react';
import { TbEdit } from "react-icons/tb";
import { AiFillDelete } from "react-icons/ai";

function Packers({ packers, onEdit, onDelete }) {
    return (
        <tr>
            <td></td>
            <td><AiFillDelete onClick={() => onDelete(packers._id)} /></td>
            <td><TbEdit onClick={() => onEdit(packers)} /></td>
            <td>{packers.opponent}</td>
            <td>{packers.gameDate.slice(0,10)}</td>
            <td>{packers.pointDifferential}</td>
        </tr>
    );
}

export default Packers;