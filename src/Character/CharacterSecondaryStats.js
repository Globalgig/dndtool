import CharacterModBox from './CharacterModBox';
import EditableText from '../EditableText.js';
import './CSS/CharacterSecondaryStats.css';
import { useState } from 'react';

function CharacterSecondaryStats() {
  return (
    <div className="CharacterSecondaryStats">
      <CharacterTopStats />
      <CharacterMiddleStats />
      <CharacterBottomStats />
    </div>
  );
}

function CharacterTopStats() {
  const [isEditing, setIsEditing] = useState(false)
  const [characterID, setCharacterID] = useState(1)

  const handleDoubleClick = () => {
    setIsEditing(true);
  };

  return (
    <div className="CharacterTopStats">
      <div className="CharacterIDNumber">
        <EditableText initialText={3} />
      </div>
      <div className="CharacterName">
        <EditableText initialText={"KILLMOG THE DESTROYER"} />
      </div>
    </div>
  );
}

function CharacterMiddleStats() {
  return (
    <div className="CharacterMiddleStats">
    </div>
  );
}

function CharacterBottomStats() {
  return (
    <div className="CharacterBottomStats">
      <CharacterModBox ability="Strength"/>
      <CharacterModBox ability="Dexterity"/>
      <CharacterModBox ability="Constitution"/>
      <CharacterModBox ability="Intelligence"/>
      <CharacterModBox ability="Wisdom"/>
      <CharacterModBox ability="Charisma"/>
    </div>
  );
}

export default CharacterSecondaryStats;