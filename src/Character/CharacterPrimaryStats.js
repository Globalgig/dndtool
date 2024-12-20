import './CSS/CharacterPrimaryStats.css';
import EditableText from '../EditableText.js';
import { useState } from 'react';

function CharacterPrimaryStats({setEntries, entry}) {
  const blurHandler = e => {
    setEntries(e.target.id, e.target.getAttribute("field"), e.target.value);
  }

  return (
    <div className="CharacterPrimaryStats">
      <div className="Initiative StatSubunit">
        {/* <input type="text" value={text} id={id} onChange={initiativeHandler} />
        <p>17 🗲</p> */}
        <EditableText textIn={entry.init} parentBlurHandler={blurHandler} id={entry.id} field="init" postSupp="🗲"/>
      </div>
      <div className="AC StatSubunit">
        <EditableText textIn={entry.ac} parentBlurHandler={blurHandler} id={entry.id} field="ac" postSupp="⛨"/>
        {/* <p>14 ⛨</p> */}
      </div>
      <div className="Health StatSubunit">
        <p>12/12 ♥</p>
      </div>
    </div>
  );
}

export default CharacterPrimaryStats;