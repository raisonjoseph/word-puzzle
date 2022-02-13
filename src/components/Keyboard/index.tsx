import { useEffect } from "react";
import { Status } from "../../utils/statuses";
import Key from "../Key";
import "./index.css";
interface KeyboardProps {
   keyStatus: { [key: string]: Status };
   onKeyPress: (value: string) => void;
   onEnter: () => void;
   onDelete: () => void;
}

const Keyboard: React.FC<KeyboardProps> = ({
   keyStatus,
   onKeyPress,
   onEnter,
   onDelete,
}) => {
   useEffect(() => {
      const listener = (e: KeyboardEvent) => {
         if (e.code === "Enter") {
            onEnter();
         } else if (e.code === "Backspace") {
            onDelete();
         } else {
            const key = e.key.toUpperCase();
            if (key.length === 1 && key >= "A" && key <= "Z") {
               onKeyPress(key);
            }
         }
      };
      window.addEventListener("keyup", listener);
      return () => window.removeEventListener("keyup", listener);
   }, [onKeyPress, onEnter, onDelete]);

   const handleOnKeyPress = (value: string) => {
      onKeyPress(value.toUpperCase());
   };
   return (
      <div className="keyboard">
         <div className="key-row">
            <Key status={keyStatus["Q"]} onClick={handleOnKeyPress} value="Q" />
            <Key status={keyStatus["W"]} onClick={handleOnKeyPress} value="W" />
            <Key status={keyStatus["E"]} onClick={handleOnKeyPress} value="E" />
            <Key status={keyStatus["R"]} onClick={handleOnKeyPress} value="R" />
            <Key status={keyStatus["T"]} onClick={handleOnKeyPress} value="T" />
            <Key status={keyStatus["Y"]} onClick={handleOnKeyPress} value="Y" />
            <Key status={keyStatus["U"]} onClick={handleOnKeyPress} value="U" />
            <Key status={keyStatus["I"]} onClick={handleOnKeyPress} value="I" />
            <Key status={keyStatus["O"]} onClick={handleOnKeyPress} value="O" />
            <Key status={keyStatus["P"]} onClick={handleOnKeyPress} value="P" />
         </div>
         <div className="key-row">
            <div className="spacer" />
            <Key status={keyStatus["A"]} onClick={handleOnKeyPress} value="A" />
            <Key status={keyStatus["S"]} onClick={handleOnKeyPress} value="S" />
            <Key status={keyStatus["D"]} onClick={handleOnKeyPress} value="D" />
            <Key status={keyStatus["F"]} onClick={handleOnKeyPress} value="F" />
            <Key status={keyStatus["G"]} onClick={handleOnKeyPress} value="G" />
            <Key status={keyStatus["H"]} onClick={handleOnKeyPress} value="H" />
            <Key status={keyStatus["J"]} onClick={handleOnKeyPress} value="J" />
            <Key status={keyStatus["K"]} onClick={handleOnKeyPress} value="K" />
            <Key status={keyStatus["L"]} onClick={handleOnKeyPress} value="L" />
            <div className="spacer" />
         </div>
         <div className="key-row">
            <Key
               onClick={onEnter}
               value="Enter"
               icon={<i className="bi bi-arrow-return-left" />}
            />
            <Key status={keyStatus["Z"]} onClick={handleOnKeyPress} value="Z" />
            <Key status={keyStatus["X"]} onClick={handleOnKeyPress} value="X" />
            <Key status={keyStatus["C"]} onClick={handleOnKeyPress} value="C" />
            <Key status={keyStatus["V"]} onClick={handleOnKeyPress} value="V" />
            <Key status={keyStatus["B"]} onClick={handleOnKeyPress} value="B" />
            <Key status={keyStatus["N"]} onClick={handleOnKeyPress} value="N" />
            <Key status={keyStatus["M"]} onClick={handleOnKeyPress} value="M" />
            <Key
               onClick={onDelete}
               value="Delete"
               icon={<i className="bi bi-backspace"></i>}
            />
         </div>
      </div>
   );
};

export default Keyboard;
