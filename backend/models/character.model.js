const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const characterSchema = new Schema({
    name: { type: String, required: true, unique: true},
    redHealth: {type: String, required: true},
    blueHealth: {type: String, required: true},
    blackHealth: {type: String, required: true},
    baseDamage: {type: Number, required: true},
    damageModifier: {type: Number, required: true},
    tears: { type: Number, required: true },
    shotSpeed: {type: Number, required: true},
    range: {type: Number, required: true},
    speed: {type: Number, required: true},
    luck: {type: Number, required: true}

}, {
    timestamps: true,
})

const Character = mongoose.model('Character', characterSchema)

module.exports = Character