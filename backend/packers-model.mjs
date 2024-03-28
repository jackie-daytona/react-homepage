// Models for the Packers Collection

// Import dependencies.
import mongoose from 'mongoose';
import 'dotenv/config';

// Connect based on the .env file parameters.
mongoose.connect(
    process.env.MONGODB_CONNECT_STRING,
    { useNewUrlParser: true }
);
const db = mongoose.connection;

// Confirm that the database has connected and print a message in the console.
db.once("open", (err) => {
    if(err){
        res.status(500).json({ Error: 'Unable to connect to the MongoDB server.' });
    } else  {
        console.log('The connection to the MongoDB server "games" over Atlas was successful.' );
    }
});

// SCHEMA: Define the collection's schema.
const packersSchema = mongoose.Schema({
	opponent:    { type: String, required: true },
	gameDate:     { type: Date, required: true },
	pointDifferential: { type: Number, required: true }
});

// Compile the model from the schema 
// by defining the collection name "packersGame".
const packersGame = mongoose.model('Games', packersSchema);


// CREATE model *****************************************
const createGame = async (opponent, gameDate, pointDifferential) => {
    const game = new packersGame({ 
        opponent: opponent, 
        gameDate: gameDate, 
        pointDifferential: pointDifferential 
    });
    return game.save();
}


// RETRIEVE model *****************************************
// Retrieve all documents and return a promise.
const retrieveGame = async () => {
    const query = packersGame.find();
    return query.exec();
}

// RETRIEVE by ID
const retrieveGameByID = async (_id) => {
    const query = packersGame.findById({_id: _id});
    return query.exec();
}

// DELETE model based on _id  *****************************************
const deleteGameById = async (_id) => {
    const result = await packersGame.deleteOne({_id: _id});
    return result.deletedCount;
};


// UPDATE model *****************************************************
const updateGame = async (_id, opponent, gameDate, pointDifferential) => {
    const result = await packersGame.replaceOne({_id: _id }, {
        opponent: opponent,
        gameDate: gameDate,
        pointDifferential: pointDifferential
    });
    return { 
        _id: _id, 
        opponent: opponent,
        gameDate: gameDate,
        pointDifferential: pointDifferential 
    }
}

// EXPORT the variables for use in the controller file.
export { createGame, retrieveGame, retrieveGameByID, updateGame, deleteGameById }