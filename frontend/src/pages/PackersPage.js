import { React, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import PackersList from '../components/PackersList';

function PackersPage({ setGame }) {
    // Use the Navigate for redirection
    
    const redirect = useNavigate();

    // Use state to bring in the data
    const [packers, setPackers] = useState([]);

    // RETRIEVE the entire list of Packers games
    const loadPackers = async () => {
        const response = await fetch('/packers');
        const packers = await response.json();
        setPackers(packers);
    } 
    

    // UPDATE a single Packers game
    const onEditPackers = async game => {
        setGame(game);
        redirect("/update");
    }


    // DELETE a single Packers game
    const onDeletePackers = async _id => {
        const response = await fetch(`/packers/${_id}`, { method: 'DELETE' });
        if (response.status === 200) {
            const getResponse = await fetch('/packers');
            const packers = await getResponse.json();
            setPackers(packers);
        } else {
            console.error(`Unable to delete game = ${_id}, status code = ${response.status}`)
        }
    }

    // LOAD all the games
    useEffect(() => {
        loadPackers();
    }, []);

    // DISPLAY the games
    return (
        <>
            <h2>List of Packers games</h2>
            <p>Click the icons (add, edit or delete) to change the games.</p>
            <PackersList 
                packers={packers}
                onEdit={onEditPackers} 
                onDelete={onDeletePackers} 
            />
        </>
    );
}

export default PackersPage;