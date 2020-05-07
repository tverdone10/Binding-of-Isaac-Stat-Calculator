const router = require("express").Router();
let Item = require("../models/item.model");

router.route("/").get((req, res) => {
  Item.find()
    .then((items) => res.json(items))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
    const itemName = req.body.itemName
    const itemType = req.body.itemType
    const itemQuote = req.body.itemQuote
    const itemUrl = req.body.itemUrl
    const redHealthMod = req.body.redHealthMod
    const blueHealthMod = req.body.blueHealthMod
    const blackHealthMod= req.body.blackHealthMod
    const baseDamageMod= req.body.baseDamageMod
    const damageModifierMod= req.body.damageModifierMod
    const totalDamageUpItem = req.body.totalDamageUpItem
    const flatDamageUpItem = req.body.flatDamageUpItem
    const tearsMod= req.body.tearsMod
    const shotSpeedMod= req.body.shotSpeedMod
    const rangeMod= req.body.rangeMod
    const speedMod= req.body.speedMod
    const luckMod= req.body.luckMod
    const itemPool= req.body.itemPool
    const interactions= req.body.interactions
    const effects = req.body.requests
    const notes = req.body.notes

    const newItem = new Item ({
        itemName,
        itemType,
        itemQuote,
        itemUrl,
        redHealthMod,
        blueHealthMod,
        blackHealthMod,
        baseDamageMod,
        damageModifierMod,
        totalDamageUpItem,
        flatDamageUpItem,
        tearsMod,
        shotSpeedMod,
        rangeMod,
        speedMod,
        luckMod,
        itemPool,
        interactions,
        effects,
        notes
    })

    newItem
    .save()
    .then(() => res.json(`${itemName} has been added! -${itemQuote}-`))
    .catch((err) => res.status(400).json("Error: " + err))
})

module.exports = router