import React, { useMemo, useState } from "react";
import "./game.css";
import Keyboard from "./components/Keyboard";
import { MAX_GUESSES, MAX_LENGTH } from "./utils/constants";
import { checkIsGameWon, getKeyStatus } from "./utils/statuses";

const solution = "INSULT";

function Game() {
   const [isGameWon, setIsGameWon] = useState(false);
   const [isGameLost, setIsGameLost] = useState(false);
   const [guesses, setGuesses] = useState<string[]>([]);
   const [guess, setGuess] = useState<string>("");

   const keyStatus = useMemo(() => getKeyStatus(guesses, solution), [guesses]);

   const handleOnKeyPress = (value: string) => {
      if (guess.length < MAX_LENGTH && (!isGameWon || !isGameLost)) {
         setGuess(`${guess}${value}`);
      }
   };
   const handleOnEnter = () => {
      if (isGameWon || isGameLost) return;
      if (guess.length < MAX_LENGTH) return;

      const gameWon = checkIsGameWon(guess, solution);
      if (
         !isGameWon &&
         guesses.length < MAX_GUESSES &&
         guess.length === MAX_LENGTH
      ) {
         setGuesses([...guesses, guess]);
         setGuess("");
         if (gameWon) {
            setIsGameWon(true);
         }
         if (guesses.length === MAX_GUESSES - 1) {
            setIsGameLost(true);
         }
      }
   };
   const handleDelete = () => {
      if (guess.length !== 0) setGuess(guess.slice(0, -1));
   };

   return (
      <div className="game night-mode">
         <div className="game-container">
            <Keyboard
               keyStatus={keyStatus}
               onKeyPress={handleOnKeyPress}
               onEnter={handleOnEnter}
               onDelete={handleDelete}
            />
         </div>
      </div>
   );
}

export default Game;
