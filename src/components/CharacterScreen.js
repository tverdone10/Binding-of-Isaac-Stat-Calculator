import React, { useState, useEffect } from "react";
import axios from "axios";
import CharacterSelect from "./dropdown/CharacterDropdown";
import Isaac from "../images/Characters/Isaac_App.png";
import Maggie from "../images/Characters/Magdalene_App.png";
import Cain from '../images/Characters/Cain_App.png';
import Judas from '../images/Characters/Judas_App.png';
import BlueBaby from '../images/Characters/Blue_Baby_App.png';
import Eve from '../images/Characters/Eve_App.png';
import Samson from '../images/Characters/Samson_App.png';


import "./characterscreen.css";

export default function CharacterScreen() {
  // Container variable for every character so I can pull them all at once and not
  // worry about it later
  const [characterList, setCharacterList] = useState([]);
  // Base stats for the character you've selected
  const [character, setCharacter] = useState([]);
  // To keep track of the total number of damage ups collected
  const [totalDmgUp, setTotalDmgUp] = useState(0);
  // Total of all dmg ups collected that are excluded from the above (ex. curved horn, ipecac)
  const [flatDmgUp, setFlatDmgUp] = useState(0);
  // Error, whatever
  const [error, setError] = useState("");

  // API call on page render. Just puts everything in the Character List
  useEffect(() => {
    axios
      .get("http://localhost:5000/characters/")
      .then((res) => {
        console.log(res.data);
        setCharacterList(res.data);
      })
      .catch((err) => {
        setError(err.message);
      });
  }, []);

  console.log(characterList);

  //Character Select functions

  function justPickIsaac() {
    setCharacter(characterList[0]);
  }

  function justPickMagdalene() {
    setCharacter(characterList[1]);
  }

  function justPickCain() {
    setCharacter(characterList[2]);
  }

  function justPickJudas() {
    setCharacter(characterList[3]);
  }

  function justPickBaby() {
    setCharacter(characterList[4]);
  }

  function justPickEve() {
    setCharacter(characterList[5]);
  }
  
  function justPickSamson() {
    setCharacter(characterList[6]);
  }


  //Stat getter functions

  function tearDelay(t) {
    return 16 - 6 * Math.sqrt(t * 1.3 + 1);
  }

  function effectiveDamage(baseDamage, totalDamageUp, flatDamageUp) {
    return baseDamage * Math.sqrt(totalDamageUp * 1.2 + 1 + flatDamageUp);
  }





  const charBaseDamage = character.baseDamage * character.damageModifier;
  // console.log(character.baseDamage)
  // console.log(character.damageModifier)
  // console.log(totalDmgUp)
  // console.log(flatDmgUp)

  const modifier = character.damageModifier;
  console.log(modifier);

  function multiplierAdder(t) {
    return t + 1;
  }

  function handleChange(e) {
    if ((e.target.value = "Isaac")) {
      setCharacter(characterList[0]);
    } else {
      console.log("w");
    }
  }

  console.log(character);

function clicked(){
    console.log('button clicked')
}

  // HTML JSX whatever here

  return (
<div>
      <div className="selection-bar">
        <div className="selector">

          {" "}
        <img className="choose" src={Isaac} onClick={justPickIsaac} /> 
          <img  className="choose" src={Maggie} value={1} onClick={justPickMagdalene} />
          <img className="choose" src={Cain} id={2} onClick={justPickCain} />
            <img className="choose" src={Judas} id={3} onClick={justPickJudas}/> 
          <img className="choose" src={BlueBaby} value={4} onClick={justPickBaby} />
          <img className="choose" src={Eve} value={5} onClick={justPickEve} />
          <img className="choose" src={Samson} value={6}onClick={justPickSamson} />
        </div>
      </div>

    <div className="statContainer">
    <p>items pools go here</p>
      <h1>You have selected {character.name}</h1>
      <div>HP: {character.redHealth}</div>
      <div>
        Damage: {effectiveDamage(charBaseDamage, totalDmgUp, flatDmgUp)}
      </div>
      <div>Tear Delay: {tearDelay(character.tears)}</div>
      <div>Shot Speed: {character.shotSpeed}</div>
      <div>Range: {character.range}</div>
      <div>Speed: {character.speed}</div>
      <div>Luck: {character.luck}</div>

      <hr></hr>
      <h3>Hidden stats</h3>

      {/* <h1>test modifier: {multiplierAdder(modifier)}</h1>
      <button>click me</button> */}

      <div>
        Damage(*Damage Multiplier): {character.baseDamage}(*
        {character.damageModifier})
      </div>
      <div>Actual Tears: +{character.tears}</div>
      <div>Tear Height: I actually don't know what this one is</div>

      {/* <button>click me to increase dmg mult</button> */}
    </div>
    </div>
  );
}
