const router = require("express").Router();
let Character = require("../models/character.model");

router.route("/").get((req, res) => {
  Character.find()
    .then((characters) => res.json(characters))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const name = req.body.name;
  const redHealth = req.body.redHealth;
  const blueHealth = req.body.blueHealth;
  const blackHealth = req.body.blackHealth;
  const baseDamage = req.body.baseDamage;
  const damageModifier = req.body.damageModifier;
  const tears = req.body.tears;
  const shotSpeed = req.body.shotSpeed;
  const speed = req.body.speed;
  const range = req.body.speed;
  const luck = req.body.luck;

  const newCharacter = new Character({
    name,
    redHealth,
    blueHealth,
    blackHealth,
    baseDamage,
    damageModifier,
    tears,
    shotSpeed,
    speed,
    range,
    luck,
  });

  newCharacter
    .save()
    .then(() => res.json(`Character ${name} added!`))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
