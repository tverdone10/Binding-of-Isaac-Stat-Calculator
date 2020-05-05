import React, { useState, useEffect } from "react";
import axios from "axios";
import CharacterSelect from "./dropdown/CharacterDropdown";
import Isaac from "../images/Characters/Isaac_App.png";
import Maggie from "../images/Characters/Magdalene_App.png";
import Cain from "../images/Characters/Cain_App.png";
import Judas from "../images/Characters/Judas_App.png";
import BlueBaby from "../images/Characters/Blue_Baby_App.png";
import Eve from "../images/Characters/Eve_App.png";
import Samson from "../images/Characters/Samson_App.png";
import Stigmata from "../images/Items/Stigmata_Icon.png"
import Pentagram from "../images/Items/Pentagram_Icon.png"
import Damage from "../images/Attributes/Damage.png"
import Health from "../images/Attributes/Health.png"
import Luck from "../images/Attributes/Luck.png"
import Range from "../images/Attributes/Range.png"
import Shot_Speed from "../images/Attributes/Shot_Speed.png"
import Speed from "../images/Attributes/Speed.png"
import Tears from "../images/Attributes/Tears.png"

import "./characterscreen.css";

export default function CharacterScreen() {
  // Container variable for every character so I can pull them all at once and not
  // worry about it later
  const [characterList, setCharacterList] = useState([]);
  // Base stats for the character you've selected
  const [character, setCharacter] = useState([]);
  // The most recent item you've selected (defaults to Stigmata as a test right now.)
  const [newestItem, setNewestItem] = useState({
      name: "Pentagram",
      modifier: 1,
      baseDamage: 0
  })
  // An array of all your items you've collected
  const [itemArray, setItemArray] = useState([])
  // To keep track of the total number of damage ups collected
  const [totalDmgUp, setTotalDmgUp] = useState(0);
  // Total of all dmg ups collected that are excluded from the above (ex. curved horn, ipecac)
  const [flatDmgUp, setFlatDmgUp] = useState(0);
  // Error, whatever
  const [error, setError] = useState("");

  let isAac = {}
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
   let phaseOne=Math.sqrt(totalDamageUp * 1.2 + 1 + flatDamageUp).toFixed(2)
   console.log(phaseOne + " phase1")
   console.log(baseDamage + " baseDmg before")
    let phaseTwo = baseDamage * phaseOne
  console.log(baseDamage + " baseDmg after")

   return phaseTwo
  }


  // console.log(character.baseDamage)
  // console.log(character.damageModifier)
  // console.log(totalDmgUp)
  // console.log(flatDmgUp)


  // Update state this way. Need to have a function like this for every available stat
  // Need to attach 

  function handleNewItem() {
    setCharacter({
        ...character, 
        damageModifier: damageModifier + newestItem.modifier,
        baseDamage: baseDamage + newestItem.baseDamage
    })
    setTotalDmgUp(totalDmgUp + 1)
    setFlatDmgUp(flatDmgUp)
    setItemArray(...itemArray, newestItem.name)
  }


  let {baseDamage, damageModifier} = {...character}
  console.log(damageModifier)
  console.log(character)


  // HTML JSX whatever here

  return (
    <div>
      <div className="selection-bar">
        <div className="selector">
          {" "}
          <img className="choose" src={Isaac} alt="Isaac" onClick={justPickIsaac} />
          <img
            className="choose"
            src={Maggie}
            alt="Maggie"
            onClick={justPickMagdalene}
          />
          <img className="choose" src={Cain} alt="Cain" onClick={justPickCain} />
          <img className="choose" src={Judas} alt="Judas" onClick={justPickJudas} />
          <img
            className="choose"
            src={BlueBaby}
           alt="???"
            onClick={justPickBaby}
          />
          <img className="choose" src={Eve} alt="Eve" onClick={justPickEve} />
          <img
            className="choose"
            src={Samson}
            alt="Samson"
            onClick={justPickSamson}
          />
        </div>
      </div>

      <div className="statContainer">
     <p>items collected: {itemArray}</p>

        {/* ITEM PLACEHOLDER HERE */}
        <img src={Pentagram} alt="Stigmata-Item"className="item-logo" onClick={handleNewItem}/>
        
        <h1>You have selected {character.name}</h1>
        <div id="stat-list">
        <div>HP: {character.redHealth}</div>
        <div>
          Damage: <img src={Damage}/> {effectiveDamage(character.baseDamage, totalDmgUp, flatDmgUp).toFixed(2)}
        </div>
        <div>Tear Delay: <img src={Tears}/>{tearDelay(character.tears)}</div>
        <div>Shot Speed: <img src={Shot_Speed}/> {character.shotSpeed}</div>
        <div>Range: <img src={Range}/> {character.range}</div>
        <div>Speed: <img src={Speed}/> {character.speed}</div>
        <div>Luck: <img src={Luck}/> {character.luck}</div>
        <div>Special Attributes:</div>
        </div>
        <hr></hr>
        <h3>Hidden stats</h3>
        <div>
          Damage(*Damage Multiplier): {character.baseDamage}(*
          {damageModifier})
        </div>
        <div>Actual Tears: +{character.tears}</div>
        {/* <div>Tear Height: I actually don't know what this one is</div> */}

        {/* <button>click me to increase dmg mult</button> */}
      </div>
      {/* <div id="bg-buttons">
      <button>Basement</button>
      <button>Caves</button>
      <button>Depths</button>
      </div> */}
    </div>
  );
}
