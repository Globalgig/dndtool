import { useState } from 'react';
import './CSS/CharacterField.css';
import CharacterEntry from './CharacterEntry.js';

function CharacterField() {
  const [initiatives, setInitiatives] = useState([{id: "1", init: 1}, {id: "2", init: 400}])
  const [entries, setEntries] = useState([{id: "1", init: 1, ac: 4}, {id: "2", init: 400, ac: 5}]);

  const setEntryHandler = (id, property, updatedValue) => {
    console.log(entries)
    const newEntries = entries.map(entry => {
      if (entry.id !== id) {
        // No change
        return entry;
      } else {
        // Return a new entry with the adjusted value
        let newEntry = {...entry};
        newEntry[property] = parseInt(updatedValue);
        return newEntry
      }
    });

    // Re-render with the new array
    setEntries(newEntries);
  }

  return (
    <div className="CharacterField">
      {entries.sort((a, b) => b.init - a.init)
        .map((item) => (
          <div className="CharacterEntry" id={item.id}>
            <CharacterEntry setEntries={setEntryHandler} entry={item} key={item.init}/>
          </div>
        )
      )}
    </div>
  )
}

export default CharacterField;