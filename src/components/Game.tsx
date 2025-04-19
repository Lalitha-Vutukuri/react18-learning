import React, { useState } from "react";

const Game = () => {
  const [game, setGame] = useState({ id: 1, player: { name: "John" } });
  const handleClick = () => {
    setGame({ ...game, player: { ...game.player, name: "Smith" } });
  };
  return (
    <div>
      <h1>{game.player.name}</h1>
      <button onClick={handleClick}>Change Name</button>
    </div>
  );
};

export default Game;
