import React, { useState, useEffect } from "react";
import axios from "axios";

export default  function TestHome()  {
    const [character, setCharacter] = useState([])
    const [totalDmgUp, setTotalDmgUp] = useState(0)
    const [flatDmgUp, setFlatDmgUp] = useState(0)
    const [error, setError] = useState('')

    useEffect( () => {
        axios.get('http://localhost:5000/characters/')
        .then(res => {
            console.log(res.data)
            setCharacter(res.data[0])
    
        })
        .catch(err => {
            setError(err.message)
        })
    }, []);

function tearDelay (t) {
    return 16-6 * Math.sqrt(t * 1.3 + 1)

}

function effectiveDamage (baseDamage, totalDamageUp, flatDamageUp){
    return baseDamage * Math.sqrt(totalDamageUp * 1.2 + 1 + flatDamageUp)
}

const charBaseDamage = character.baseDamage * character.damageModifier
console.log(character.baseDamage)
console.log(character.damageModifier)
console.log(totalDmgUp)
console.log(flatDmgUp)
const modifier = character.damageModifier

function fixFunction(val){
    return val.toFixed(2)
}

console.log(modifier)

    return (
      <div>
        <h1>You have selected {character.name}</h1>
            <div>
                HP: {character.redHealth}
            </div>
            <div>
                Damage: {effectiveDamage(charBaseDamage, totalDmgUp, flatDmgUp)}
            </div>
            <div>
                Tear Delay: {tearDelay(character.tears)}
            </div>
            <div>
                Shot Speed: {character.shotSpeed}
            </div>
            <div>
                Range: {character.range}
            </div>
            <div>
                Speed: {character.speed}
            </div>
            <div>
                Luck: {character.luck}
            </div>

    <hr></hr>
        <h3>Hidden stats</h3>
        <div> Damage(*Damage Multiplier): {character.baseDamage}(*{modifier})</div>
        <div>Actual Tears: +{character.tears}</div>
        <div>Tear Height: I actually don't know what this one is</div>
    </div>

    );
  
}
