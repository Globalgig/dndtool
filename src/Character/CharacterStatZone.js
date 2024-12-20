import './CSS/CharacterStatZone.css';
import CharacterPrimaryStats from './CharacterPrimaryStats.js';
import CharacterSecondaryStats from './CharacterSecondaryStats.js';

function CharacterStatZone({setEntries, entry}) {
  return (
    <div className="CharacterStatZone">
      <CharacterPrimaryStats setEntries={setEntries} entry={entry}/>
      <CharacterSecondaryStats />
    </div>
  );
}

export default CharacterStatZone;