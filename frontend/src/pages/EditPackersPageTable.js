import React, { useState }  from 'react';
import { useNavigate } from "react-router-dom";

export const EditPackersPageTable = ({ game }) => {
 
    const [opponent, setOpponent]       = useState(game.opponent);
    const [gameDate, setGameDate]         = useState(game.gameDate.slice(0,10));
    const [pointDifferential, setPointDifferential] = useState(game.pointDifferential);
    
    const redirect = useNavigate();

    const editPackers = async () => {
        const response = await fetch(`/packers/${game._id}`, {
            method: 'PUT',
            body: JSON.stringify({ 
                opponent: opponent, 
                gameDate: gameDate, 
                pointDifferential: pointDifferential
            }),
            headers: {'Content-Type': 'application/json',},
        });

        if (response.status === 200) {
            alert(`The edit completed successfully.`);
        } else {
            const errMessage = await response.json();
            alert(`Unable to process the edit request, error code: ${response.status}. ${errMessage.Error}`);
        }
        redirect("/packers");
    }

    return (
        <>
        <article>
            <h2>Edit a Packers game.</h2>
            <p>Below you can edit the game you selected on the previous page.</p>
            <table id="packers">
                <caption>Edit the game:</caption>
                <thead>
                    <tr>
                        <th>Opponent</th>
                        <th>Date of Game</th>
                        <th>Point Differential</th>
                    </tr>
                </thead>
                <tbody>
                <tr>
                <td><label for="opponent">Opposing Team</label>
                        <input
                            type="text"
                            placeholder="Opposing team's name"
                            value={opponent}
                            onChange={e => setOpponent(e.target.value)} 
                            id="opponent" />
                    </td>

                    <td><label for="date">Date of Game</label>
                        <input
                            type="date"
                            value={gameDate}
                            placeholder="Game's Date"
                            onChange={e => setGameDate(e.target.value)} 
                            id="date" />
                    </td>

                    <td><label for="pointDif">Point Differential</label>
                        <input
                            type="number"
                            placeholder="Point differential of the game"
                            value={pointDifferential}
                            onChange={e => setPointDifferential(e.target.value)} 
                            id="pointDif" />
                    </td>

                    <td>
                    <label for="submit">Commit</label>
                        <button
                            type="submit"
                            onClick={editPackers}
                            id="submit"
                        >Edit</button>
                    </td>
                </tr>
                </tbody>
            </table>
            </article>
        </>
    );
}
export default EditPackersPageTable;