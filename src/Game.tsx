import React, { useMemo, useState } from "react";
import "./game.css";
import Keyboard from "./components/Keyboard";
import { MAX_GUESSES, MAX_LENGTH, REVEAL_TIME_MS } from "./utils/constants";
import { checkIsGameWon, getKeyStatus } from "./utils/statuses";
import Grid from "./components/Grid";

const solution = "APPLES";

function Game() {
   const [isGameWon, setIsGameWon] = useState(false);
   const [isGameLost, setIsGameLost] = useState(false);
   const [guesses, setGuesses] = useState<string[]>([]);
   const [currentGuess, setGuess] = useState<string>("");
   const [isRevealing, setIsRevealing] = useState(false);

   const keyStatus = useMemo(() => getKeyStatus(guesses, solution), [guesses]);

   const handleOnKeyPress = (value: string) => {
      if (isGameWon || isGameLost) return;
      if (currentGuess.length < MAX_LENGTH) setGuess(`${currentGuess}${value}`);
   };
   const handleOnEnter = () => {
      if (isGameWon || isGameLost) return;
      if (currentGuess.length < MAX_LENGTH) return;

      const gameWon = checkIsGameWon(currentGuess, solution);
      if (
         !isGameWon &&
         guesses.length < MAX_GUESSES &&
         currentGuess.length === MAX_LENGTH
      ) {
         // Revealing animation
         setIsRevealing(true);
         setTimeout(() => setIsRevealing(false), MAX_LENGTH * REVEAL_TIME_MS);

         setGuesses([...guesses, currentGuess]);
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
      if (currentGuess.length !== 0) setGuess(currentGuess.slice(0, -1));
   };

   return (
      <div className="game night-mode">
         <div className="game-container">
            <Grid
               guesses={guesses}
               currentGuess={currentGuess}
               solution={solution}
            />
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
