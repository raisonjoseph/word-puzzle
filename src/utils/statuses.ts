export type Status = "correct" | "present" | "absent";

export const checkIsGameWon = (guess: string, solution: string) =>
   guess.toUpperCase() === solution.toUpperCase();

export const getKeyStatus = (guesses: string[], solution: string) => {
   const keyStatus: {
      [key: string]: Status;
   } = {};
   const splitSolution = solution.toUpperCase().split("");
   guesses.forEach((guess) => {
      guess.split("").forEach((letter, index) => {
         const letterIndex = splitSolution.indexOf(letter.toUpperCase());
         // Correct cases
         if (letterIndex === index) {
            keyStatus[letter] = "correct";
         }
         // Absent cases
         else if (letterIndex < 0) {
            keyStatus[letter] = "absent";
            return;
         } else {
            keyStatus[letter] = "present";
            return;
         }
      });
   });
   return keyStatus;
};
