const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const itemSchema = new Schema({
    itemName: { type: String, required: true, unique: true},
    itemType: { type: Array, required: true},
    itemQuote: {type: String, required: true},
    itemUrl: {type: String, required: true},
    redHealthMod: {type: Number},
    blueHealthMod: {type: Number},
    blackHealthMod: {type: Number},
    baseDamageMod: {type: Number},
    damageModifierMod: {type: Number},
    totalDamageUpItem: {type: Boolean},
    flatDamageUpItem: {type: Boolean},
    tearsMod: { type: Number},
    shotSpeedMod: {type: Number},
    rangeMod: {type: Number},
    speedMod: {type: Number},
    luckMod: {type: Number},
    itemPool: { type: Array, required: true},
    interactions: {type: Array}, 
    effects: {type: String},
    notes: {type: String} 
})

const Item = mongoose.model('Item', itemSchema)

module.exports = Item

