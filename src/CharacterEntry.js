import './CharacterEntry.css';
import CharacterStatZone from './CharacterStatZone.js';
import CharacterConZone from './CharacterConZone.js';

function CharacterEntry() {
  return (
    <div className="CharacterEntry">
      <CharacterStatZone />
      <CharacterConZone />
    </div>
  );
}

export default CharacterEntry;