import './CSS/CharacterPrimaryStats.css';

function CharacterPrimaryStats() {
  return (
    <div className="CharacterPrimaryStats">
      <div className="Initiative StatSubunit">
        <p>17 🗲</p>
      </div>
      <div className="AC StatSubunit">
        <p>14 ⛨</p>
      </div>
      <div className="Health StatSubunit">
        <p>12/12 ♥</p>
      </div>
    </div>
  );
}

export default CharacterPrimaryStats;