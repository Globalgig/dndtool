import './CSS/CharacterEntry.css';
import CharacterStatZone from './CharacterStatZone.js';
import CharacterConZone from './CharacterConZone.js';
import React, { useState } from 'react';

function CharacterEntry({setEntries, entry}) {
  return (
    <div className="CharacterEntry">
      <CharacterStatZone setEntries={setEntries} entry={entry}/>
      <CharacterConZone />
    </div>
  );
}

export default CharacterEntry;