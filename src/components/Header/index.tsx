import React from "react";
import "./index.css";

type HeaderProps = {
   onHelpClick: () => void;
};

const Header: React.FC<HeaderProps> = ({ onHelpClick }) => {
   return (
      <header className="header">
         <div className="container">
            <h1 className="title">Wordle</h1>
            <div className="menu">
               <button className="menu-item" onClick={onHelpClick}>
                  <span className="material-symbols-rounded">help</span>
               </button>
               <button className="menu-item" onClick={onHelpClick}>
                  <span className="material-symbols-rounded">bar_chart</span>
               </button>
               <button className="menu-item" onClick={onHelpClick}>
                  <span className="material-symbols-rounded">settings</span>
               </button>
            </div>
         </div>
      </header>
   );
};

export default Header;
