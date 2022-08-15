import { MAX_LENGTH } from "./constants";

export type Status = "correct" | "present" | "absent";

export const checkIsGameWon = (guess: string, solution: string) =>
   guess.toUpperCase() === solution.toUpperCase();

export const getKeyStatus = (guesses: string[], solution: string) => {
   const keyStatus: {
      [key: string]: Status;
   } = {};
   const splitSolution = solution.split("");
   guesses.forEach((guess) => {
      guess?.split("").forEach((letter, index) => {
         const letterIndex = splitSolution.indexOf(letter);
         // Correct cases
         if (letterIndex === index) {
            keyStatus[letter] = "correct";
            return;
         }
         // Absent cases
         else if (letterIndex < 0) {
            keyStatus[letter] = "absent";
            return;
         } // Mark other letters if not already marked
         else if (!keyStatus[letter]) {
            keyStatus[letter] = "present";
            return;
         }
      });
   });
   return keyStatus;
};

export const getGuessStatus = (guess: string, solution: string) => {
   const splitSolution = solution.split("");
   const splitGuess = guess.split("");

   const guessStatus: Status[] = Array(MAX_LENGTH);
   const solutionCharsStatus = Array(MAX_LENGTH).fill(false);

   splitGuess.forEach((letter, index) => {
      if (letter === splitSolution[index]) {
         guessStatus[index] = "correct";
         solutionCharsStatus[index] = true;
         return;
      }
      // All absent cases
      if (!splitSolution.includes(letter)) {
         guessStatus[index] = "absent";
         return;
      }

      const letterIndex = splitSolution.findIndex((x, splitIndex) => {
         return x === letter && !solutionCharsStatus[splitIndex];
      });
      if (letterIndex < 0) {
         guessStatus[index] = "absent";
         return;
      } else {
         guessStatus[index] = "present";
         solutionCharsStatus[letterIndex] = true;
         return;
      }
   });
   return guessStatus;
};
