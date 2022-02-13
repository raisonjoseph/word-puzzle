import { MAX_GUESSES, MAX_LENGTH } from "../../utils/constants";
import { getGuessStatus, Status } from "../../utils/statuses";
import Cell from "../Cell";
import "./index.css";

interface GridProps {
   guesses: string[];
   currentGuess: string;
   solution: string;
}

const Grid: React.FC<GridProps> = ({ guesses, currentGuess, solution }) => {
   const getCurrentGuessGrid = () => (
      <div className="row current">
         {Array.from(Array(MAX_LENGTH)).map((_, index) => (
            <Cell key={index} value={currentGuess[index]} />
         ))}
      </div>
   );

   const getCompletedGuessGrid = () =>
      guesses.map((guess, guessIndex) => {
         const splitGuess = guess.split("");
         const guessStatuses: Status[] = getGuessStatus(guess, solution);
         return (
            <div className="row completed" key={`guess-${guessIndex}`}>
               {splitGuess.map((letter, index) => (
                  <Cell
                     key={index}
                     value={letter}
                     status={guessStatuses[index]}
                     position={index}
                     isCompletedCell
                  />
               ))}
            </div>
         );
      });

   const getEmptyGrids = () =>
      Array.from(Array(MAX_GUESSES - guesses.length - 1)).map(
         (_, guessIndex) => (
            <div className="row empty">
               {Array.from(Array(MAX_LENGTH)).map((_, index) => (
                  <Cell key={index} value="" />
               ))}
            </div>
         )
      );

   return (
      <div className="grid">
         {getCompletedGuessGrid()}
         {guesses.length < MAX_GUESSES && getCurrentGuessGrid()}
         {guesses.length < MAX_GUESSES && getEmptyGrids()}
      </div>
   );
};

export default Grid;
