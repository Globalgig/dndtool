import './CSS/CharacterStatZone.css';
import CharacterPrimaryStats from './CharacterPrimaryStats.js';
import CharacterSecondaryStats from './CharacterSecondaryStats.js';

function CharacterStatZone() {
  return (
    <div className="CharacterStatZone">
      <CharacterPrimaryStats />
      <CharacterSecondaryStats />
    </div>
  );
}

export default CharacterStatZone;