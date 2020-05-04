const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const itemSchema = new Schema({
    name: { type: String, required: true, unique: true},
    redHealth: {type: Number, required: true},
    blueHealth: {type: Number, required: true},
    blackHealth: {type: Number, required: true},
    baseDamage: {type: Number, required: true},
    damageModifier: {type: Number, required: true},
    tears: { type: Number, required: true },
    shotSpeed: {type: Number, required: true},
    range: {type: Number, required: true},
    speed: {type: Number, required: true},
    luck: {type: Number, required: true}

})