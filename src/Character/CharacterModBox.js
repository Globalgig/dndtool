import './CSS/CharacterModBox.css';
import { useState } from 'react';

function CharacterModBox({ability}) {
  // const [ability, setAbility] = useState(ability);

  return (
    <div className={"CharacterModBox " + ability}>
      <p>+1</p>
    </div>
  );
}

export default CharacterModBox;