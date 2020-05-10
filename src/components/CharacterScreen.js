import React, { useState, useEffect } from "react";
import axios from "axios";
import ItemList from "./itemlist/ItemList"
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
import Nails from "../images/8_Inch_Nails.png"
import Health from "../images/Attributes/Health.png"
import Luck from "../images/Attributes/Luck.png"
import Range from "../images/Attributes/Range.png"
import Shot_Speed from "../images/Attributes/Shot_Speed.png"
import Speed from "../images/Attributes/Speed.png"
import Tears from "../images/Attributes/Tears.png"

import "./characterscreen.css";

export default function CharacterScreen() {
  
  // The most recent item you've selected (defaults to Stigmata as a test right now.)
  const [newestItem, setNewestItem] = useState({})
  
  // Container variable for for all the items so I can pull them all at once and not worry about it later
  const [itemCompendium, setItemCompendium] = useState([]);
  
  // An array of all your items you've collected
  const [itemArray, setItemArray] = useState(["None!"]);
  console.log(itemArray)

  // Base stats for the character you've selected
  const [character, setCharacter] = useState([]);
  
  
  // To keep track of the total number of damage ups collected
  const [totalDmgUp, setTotalDmgUp] = useState(0);
  
  // Total of all dmg ups collected that are excluded from the above (ex. curved horn, ipecac)
  const [flatDmgUp, setFlatDmgUp] = useState(0);

  // Container variable for every character so I can pull them all at once and not worry about it later
  const [characterList, setCharacterList] = useState([{}]);
  
  // Error, whatever
  const [error, setError] = useState("");




  

 // --------------------------------------------------------------- 


  // API call on page render. Just puts everything in the Character List and Item Compendium
  // and attaches them to their respective container variables

  useEffect(() => {
    axios
      .get("http://localhost:5000/characters/")
      .then((res) => {
        console.log(res.data + "Character List Response");
        setCharacterList(res.data);
        
      })
      axios
      .get("http://localhost:5000/items/")
      .then((res) => {
        console.log(res.data + "Items list response")
        setItemCompendium(res.data)
        console.log(itemCompendium + "total item list compendium")
      })
      .catch((err) => {
        setError(err.message);
      });

  }, []);




// ------------------------------------------------------------------


  // Checking out all the characters here and items here.
  
  characterList.forEach(character => console.log(character))
  itemCompendium.forEach(item => console.log(item))

  // Character Select function

  function characterSelector(i) {
    setCharacter(characterList[i])   
    console.log(character)
  }








  // Update state this way. Need to have a function like this for every available stat

  //FIRST update the newest item here.
  function addNewItem(i) {
    setNewestItem(itemCompendium[i])

    //THEN do all your stat calculations here
    handleNewItem()
  }



  //Stat calculations go here
  function handleNewItem() {
    console.log(newestItem)

    setCharacter({
      // do this for every stat. need to make if else though.
      // if !whateverStatMod, return, else return whateverStatMod + newestItem.whateverStatMod    
      ...character, 
        damageModifier: damageModifier + newestItem.damageModifierMod
        // baseDamage: baseDamage + newestItem.baseDamage
    })
    setTotalDmgUp(totalDmgUp + 1)
    setFlatDmgUp(flatDmgUp)
    // console.log(itemArray)
    updateItems()
  }

  function updateItems() {
    setItemArray( itemArray => [...itemArray, newestItem.itemName])
    console.log(itemArray)
  }

console.log(newestItem)
console.log(character)
  let {baseDamage, damageModifier} = {...character}
  // console.log(damageModifier)
  // console.log(character)


  //Stat getter functions

  // TEARS obviously
  function tearDelay(t) {
    if (t >= 0){
    return 16 - 6 * Math.sqrt(t * 1.3 + 1);
    } else if (t < 0 && t>-0.77) {
      return 16 - 6 * Math.sqrt(t * 1.3 + 1 - 6 * t);
    }
    else if (t < 0.77){
     return 16 - 6 * t
    }
  }

  //DMG obviously
  function effectiveDamage(baseDamage, totalDamageUp, flatDamageUp) {
   let phaseOne=Math.sqrt(totalDamageUp * 1.2 + 1 + flatDamageUp).toFixed(2)
    let phaseTwo = baseDamage * phaseOne

   return phaseTwo
  }

  let actualDamage = effectiveDamage(character.baseDamage, totalDmgUp, flatDmgUp) * character.damageModifier

// -----------------------------------------------------------------------

  // HTML JSX whatever here


  return (
    <div>
      <div className="row header selection-bar">
        <div className="selector">
          {" "}
        <img className="choose" src={Isaac} alt="Isaac" onClick={() => characterSelector(0)}/>
          <img
            className="choose"
            src={Maggie}
            alt="Maggie"
            onClick={() => characterSelector(1)}
          />
          <img className="choose" src={Cain} alt="Cain" onClick={() => characterSelector(2)} />
          <img className="choose" src={Judas} alt="Judas" onClick={() => characterSelector(3)} />
          <img
            className="choose"
            src={BlueBaby}
           alt="???"
            onClick={() => characterSelector(4)}
          />
          <img className="choose" src={Eve} alt="Eve" onClick={() => characterSelector(5)} />
          <img
            className="choose"
            src={Samson}
            alt="Samson"
            onClick={() => characterSelector(6)}
          />
        </div>
      </div>
{
  (!character.name) 
  ? <h1 className="character-query">Choose your character</h1>
  :
  <div>
  <div className="statContainer">

     <h1 className="character-query">You have selected {character.name}</h1>
     {/* ITEM PLACEHOLDER HERE */}
     <img src={Pentagram} alt="Pentagram-Item"className="item-logo" onClick={()=> addNewItem (0)}/>
     <img src={Nails} alt="Pentagram-Item"className="item-logo" onClick={()=> addNewItem (1)}/>

     </div>
    <div className="row content">
     {/* <ItemList className ="column" id="item-list"/> */}

     {/* ITEMS LIST ON THE LEFT SIDE HERE (DESKTOP) */}
     <div className="column" id="item-list">
      <div className="item-containers">

        <p>items collected:</p>
        </div>
        <div className="item-containers">
        <p>{itemArray.join(", ")} &nbsp; </p>
     </div>

     
      </div>

    {/* STATS ON THE RIGHT SIDE HERE (ON DESKTOP) */}

     <div className="column" id="stat-list">
     <div>HP: {character.redHealth}</div>
     <div>
       Damage: <img src={Damage}/> {actualDamage.toFixed(2)}
     </div>
     <div>Tear Delay: <img src={Tears}/>{tearDelay(character.tears).toFixed(2)}</div>
     <div>Shot Speed: <img src={Shot_Speed}/> {character.shotSpeed}</div>
     <div>Range: <img src={Range}/> {character.range}</div>
     <div>Speed: <img src={Speed}/> {character.speed}</div>
     <div>Luck: <img src={Luck}/> {character.luck}</div>
     <div>Special Attributes:</div>
     
     <hr style={{width: "50%"}}></hr>
     <h3>Hidden stats</h3>
     <div>
       Damage(*Damage Multiplier): {character.baseDamage}(*
       {damageModifier})
       {console.log(damageModifier)}
     </div>
     <div>Actual Tears: +{character.tears}</div>
     </div>
     {/* <div>Tear Height: I actually don't know what this one is</div> */}

     {/* <button>click me to increase dmg mult</button> */}
   </div>
{/* <h1>Thanks for using this! New items added every day.</h1> */}

</div>

}


</div>
     

  );
    
}


