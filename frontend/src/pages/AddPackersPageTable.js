import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";


export const AddPackersPageTable = () => {

    const [opponent, setOpponent] = useState('');
    const [gameDate, setGameDate] = useState('');
    const [pointDifferential, setPointDifferential] = useState('');
    
    const redirect = useNavigate();

    const addPackers = async () => {
        const response = await fetch('/packers', {
            method: 'post',
            body: JSON.stringify ({
                opponent: opponent,
                gameDate: gameDate,
                pointDifferential: pointDifferential
            }),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if(response.status === 201){
            alert(`The game was successfully added to the collection.`);
        } else {
            alert(`Error: the game was unable to be added, status code = ${response.status}`);
        }
        redirect("/packers");
    };


    return (
        <>
        <article>
            <h2>Add a Packers game</h2>
            <p>This page adds a Packers game to the collection.</p>
            
            <table id="packers">
                <caption>Which game are you adding?</caption>
                <thead>
                    <tr>
                        <th>Opponent</th>
                        <th>Date of Game</th>
                        <th>Point Differential</th>
                    </tr>
                </thead>
                <tbody>
                <tr>
                <td><label for="opponent">Opponent</label>
                        <input
                            type="text"
                            placeholder="Opposing team's name"
                            value={opponent}
                            onChange={e => setOpponent(e.target.value)} 
                            id="opponent" />
                    </td>

                    <td><label for="exdate">Date of Game</label>
                        <input
                            type="date"
                            value={gameDate}
                            placeholder="Date of Game"
                            onChange={e => setGameDate(e.target.value)} 
                            id="exdate" />
                    </td>

                    <td><label for="pointDif">Point Differential</label>
                        <input
                            type="number"
                            placeholder="Pos. for win/neg. for loss"
                            value={pointDifferential}
                            onChange={e => setPointDifferential(e.target.value)} 
                            id="pointDif" />
                    </td>

                    <td>
                    <label for="submit">Commit</label>
                        <button
                            type="submit"
                            onClick={addPackers}
                            id="submit"
                        >Add</button>
                    </td>
                </tr>
                </tbody>
            </table>
        </article>
    </>
);
}

export default AddPackersPageTable;