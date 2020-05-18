const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const itemSchema = new Schema({
    itemName: { type: String, required: true, unique: true},
    itemType: { type: Array, required: true},
    itemQuote: {type: String, required: true},
    itemUrl: {type: String, required: true},
    redHealthMod: {type: Number, required: true, default: 0},
    blueHealthMod: {type: Number, required: true, default: 0},
    blackHealthMod: {type: Number, required: true, default: 0},
    baseDamageMod: {type: Number, required: true, default: 0},
    damageModifierMod: {type: Number, required: true, default: 0},
    totalDamageUpItem: {type: Boolean, default: false},
    flatDamageUpItem: {type: Boolean, default: false},
    tearsMod: { type: Number, required: true, default: 0},
    shotSpeedMod: {type: Number, required: true, default: 0},
    rangeMod: {type: Number, required: true, default: 0},
    speedMod: {type: Number, required: true, default: 0},
    luckMod: {type: Number, required: true, default: 0},
    itemPool: { type: Array, required: true, default: 0},
    interactions: {type: Array}, 
    effects: {type: String},
    notes: {type: String} 
})

const Item = mongoose.model('Item', itemSchema)

module.exports = Item

