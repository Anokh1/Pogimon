const mongoose = require('mongoose');

const favoriteDigimon = new mongoose.Schema(
    {
    //userFrom: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    userFrom: { type: mongoose.Schema.Types.String, ref: 'User' },
    digimonId: { type: String },
    digimonName: { type: String },
    digimonImage: { type: String },
    digimonType: { type: String },
    },
    { collection: 'favorite-digimon' }
)

const favoriteDigi = mongoose.model('FavoriteDigimon', favoriteDigimon);

module.exports = favoriteDigi; 


