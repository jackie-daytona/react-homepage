// Controllers for the Packers Collection

import 'dotenv/config';
import express from 'express';
import * as packers from './packers-model.mjs';

const PORT = process.env.PORT;
const app = express();
app.use(express.json());  // REST needs JSON MIME type.


// CREATE controller ******************************************
app.post ('/packers', (req,res) => { 
    packers.createGame(
        req.body.opponent, 
        req.body.gameDate, 
        req.body.pointDifferential
        )
        .then(packersGame => {
            console.log(`"${packersGame.gameDate}" was added to the collection.`);
            res.status(201).json(packersGame);
        })
        .catch(error => {
            console.log(error);
            res.status(400).json({ Error: 'The server cannot fulfill the createGame request due to a client error: the request may be missing a required parameter.' });
        });
});


// RETRIEVE controller ****************************************************
app.get('/packers', (req, res) => {
    packers.retrieveGame()
        .then(packers => { 
            if (packers !== null) {
                console.log(`All games were retrieved successfully from the collection.`);
                res.json(packers);
            } else {
                res.status(404).json({ Error: 'The requested Game cannot be located on the server.' });
            }         
         })
        .catch(error => {
            console.log(error);
            res.status(400).json({ Error: 'The server cannot fulfill the retrieveGame request due to a client error: the request may be missing a required parameter.' });
        });
});


// RETRIEVE by ID controller
app.get('/packers/:_id', (req, res) => {
    packers.retrieveGameByID(req.params._id)
    .then(packersGame => { 
        if (packersGame !== null) {
            console.log(`"${packersGame.gameDate}" was retrieved successfully, based on its ID.`);
            res.json(packersGame);
        } else {
            res.status(404).json({ Error: 'The requested Game ID cannot be located on the server.' });
        }         
     })
    .catch(error => {
        console.log(error);
        res.status(400).json({ Error: 'The server cannot fulfill the retrieveGameByID request due to a client error: the request may be missing a required parameter.' });
    });

});


// UPDATE controller ************************************
app.put('/packers/:_id', (req, res) => {
    packers.updateGame(
        req.params._id, 
        req.body.opponent, 
        req.body.gameDate, 
        req.body.pointDifferential
    )
    .then(packersGame => {
        console.log(`"${packersGame.gameDate}" was updated successfully.`);
        res.json(packersGame);
    })
    .catch(error => {
        console.log(error);
        res.status(400).json({ Error: 'The server cannot fulfill the updateGame request due to a client error: the request may be missing a required parameter.' });
    });
});


// DELETE Controller ******************************
app.delete('/packers/:_id', (req, res) => {
    packers.deleteGameById(req.params._id)
        .then(deletedCount => {
            if (deletedCount === 1) {
                console.log(`Based on its ID, ${deletedCount} game was deleted.`);
                res.status(200).send({ Success: 'The delete request executed successfully.' });
            } else {
                res.status(404).json({ Error: 'The requested Game ID cannot be located on the server.' });
            }
        })
        .catch(error => {
            console.error(error);
            res.send({ Error: 'The server cannot fulfill the deleteGameByID request due to a client error: the request may be missing a required parameter.' });
        });
});


app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});