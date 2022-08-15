import React, { useMemo, useState } from "react";
import "./assets/styles/game.css";
import Keyboard from "./components/Keyboard";
import { MAX_GUESSES, MAX_LENGTH, REVEAL_TIME_MS } from "./utils/constants";
import { checkIsGameWon, getKeyStatus } from "./utils/statuses";
import Grid from "./components/Grid";
import { getTodaySolution } from "./utils/words";
import Header from "./components/Header";
import Modal from "./components/Modal";
import Help from "./components/Help";

const solution = getTodaySolution();

function Game() {
   const [isGameWon, setIsGameWon] = useState(false);
   const [isGameLost, setIsGameLost] = useState(false);
   const [guesses, setGuesses] = useState<string[]>([]);
   const [currentGuess, setGuess] = useState<string>("");
   const [isRevealing, setIsRevealing] = useState(false);
   const [showHelpModal, setShowHelpModal] = useState(false);

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

   const onHelpClick = () => setShowHelpModal(true);
   const onHelpModalClose = () => setShowHelpModal(false);

   return (
      <main className="game night-mode">
         <Header onHelpClick={onHelpClick} />
         <Modal
            title="How to play"
            onClose={onHelpModalClose}
            open={showHelpModal}
         >
            <Help />
         </Modal>
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
      </main>
   );
}

export default Game;
