import { useState } from "react";

export default function Player({initialName, symbol, isActive}) {
  const [playerName, setPlayerName] = useState(initialName);

  const [isEditing, setIsEditing] = useState(false);
  
  function EditHandler() {
    setIsEditing((prevState) => !prevState);
  }

  function NameChangeHandler(event) {
    setPlayerName(event.target.value);
  }
  
  return (
    <li className={isActive ? 'active' : undefined}>
      <span className="player">
        {
          isEditing ?
          <input type="text" value={playerName} onChange={NameChangeHandler} required/> :
          <span className="player-name">{playerName}</span>
        }
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={EditHandler}>{isEditing ? 'Save' : 'Edit'}</button>
    </li>
  );
}
