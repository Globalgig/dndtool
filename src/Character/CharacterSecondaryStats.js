import CharacterModBox from './CharacterModBox';
import './CSS/CharacterSecondaryStats.css';

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
  return (
    <div className="CharacterTopStats">
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