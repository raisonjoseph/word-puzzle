import React from "react";
import Cell from "../Cell";
import "./index.css";

const Help = () => {
   return (
      <div className="help">
         <div className="instructions">
            <p>
               Guess the <strong>WORDLE</strong> in 7 tries.
            </p>
            <p>
               Each guess must be a valid 6-letter word. Hit the enter button to
               submit.
            </p>
            <p>
               After each guess, the color of the tiles will change to show how
               close your guess was to the word.
            </p>
         </div>
         <div className="examples">
            <p>
               <strong>Examples</strong>
            </p>
            <div className="example">
               <div className="words">
                  <Cell value="U" status="correct" isCompletedCell isExample />
                  <Cell value="N" isCompletedCell isExample />
                  <Cell value="I" isCompletedCell isExample />
                  <Cell value="T" isCompletedCell isExample />
                  <Cell value="E" isCompletedCell isExample />
                  <Cell value="D" isCompletedCell isExample />
               </div>
               <p>
                  The letter <strong>U</strong> is in the word and in the
                  correct spot.
               </p>
            </div>
            <div className="example">
               <div className="words">
                  <Cell value="T" isCompletedCell isExample />
                  <Cell value="H" isCompletedCell isExample />
                  <Cell value="E" status="present" isCompletedCell isExample />
                  <Cell value="O" isCompletedCell isExample />
                  <Cell value="R" isCompletedCell isExample />
                  <Cell value="Y" isCompletedCell isExample />
               </div>
               <p>
                  The letter <strong>E</strong> is in the word but in the wrong
                  spot.
               </p>
            </div>
            <div className="example">
               <div className="words">
                  <Cell value="S" isCompletedCell isExample />
                  <Cell value="A" isCompletedCell isExample />
                  <Cell value="M" isCompletedCell isExample />
                  <Cell value="P" isCompletedCell isExample />
                  <Cell value="L" status="absent" isCompletedCell isExample />
                  <Cell value="E" isCompletedCell isExample />
                  Theory
               </div>
               <p>
                  The letter <strong>L</strong> is not in the word in any spot.
               </p>
            </div>
         </div>
      </div>
   );
};

export default Help;
