import React, { useState, useEffect } from "react";
import { Dropdown } from 'semantic-ui-react'

const selectCharacter =  [
    {
      key: 'Isaac',
      text: 'Isaac',
      value: 'Isaac',
      image: { avatar: true, src: 'https://react.semantic-ui.com/images/avatar/small/jenny.jpg' },
    },
    {
        key: 'Magdalene',
        text: 'Magdalene',
        value: 'Magdalene',
        image: { avatar: true, src: 'https://react.semantic-ui.com/images/avatar/small/jenny.jpg' },
      },
      {
        key: 'Cain',
        text: 'Cain',
        value: 'Cain',
        image: { avatar: true, src: 'https://react.semantic-ui.com/images/avatar/small/jenny.jpg' },
      },
      {
        key: 'Judas',
        text: 'Judas',
        value: 'Judas',
        image: { avatar: true, src: 'https://react.semantic-ui.com/images/avatar/small/jenny.jpg' },
      },
      {
        key: '???',
        text: '???',
        value: '???',
        image: { avatar: true, src: 'https://react.semantic-ui.com/images/avatar/small/jenny.jpg' },
      },
      {
        key: "Samson",
        text: 'Samson',
        value: 'Samson',
        image: { avatar: true, src: 'https://react.semantic-ui.com/images/avatar/small/jenny.jpg' },
      },
]


export default function CharacterSelect() {
    return (
        <Dropdown
        placeholder='Select Your Character'
        fluid
        selection
        options={selectCharacter}
      />
    )

}