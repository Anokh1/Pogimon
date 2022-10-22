const mongoose = require('mongoose');

const favoritePokemon = new mongoose.Schema(
    {
    //userFrom: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    userFrom: { type: mongoose.Schema.Types.String, ref: 'User' },
    pokemonId: { type: String },
    pokemonName: { type: String },
    pokemonImage: { type: String },
    pokemonType: { type: String },
    },
    { collection: 'favorite-pokemon' }
)

const favoritePoke = mongoose.model('FavoritePokemon', favoritePokemon);

module.exports = favoritePoke; 


