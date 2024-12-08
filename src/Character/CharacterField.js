import './CharacterField.css';
import CharacterEntry from './CharacterEntry.js';

function CharacterField() {
  return (
    <div className="CharacterField">
      <CharacterEntry />
      <CharacterEntry />
      <CharacterEntry />
      <CharacterEntry />  
    </div>
  );
}

export default CharacterField;