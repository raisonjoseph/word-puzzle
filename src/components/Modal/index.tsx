import clsx from "clsx";
import React, { useEffect, useRef, useState } from "react";
import "./index.css";

interface ModalProps {
   title?: string;
   open?: boolean;
   onClose?: () => void;
}

const Modal: React.FC<ModalProps> = ({ title, open, children, onClose }) => {
   const [animationStatus, setAnimationStatus] = useState<"start" | "end">(
      "end"
   );
   const timeoutIntervalRef = useRef<NodeJS.Timeout>();

   useEffect(() => {
      if (open) setAnimationStatus("start");
   }, [open]);

   const handleCloseClick = () => {
      if (timeoutIntervalRef.current) clearInterval(timeoutIntervalRef.current);
      timeoutIntervalRef.current = setTimeout(
         () => setAnimationStatus("end"),
         300
      );
      onClose?.();
   };
   return (
      <div className={clsx("modal-overlay", open && "active")}>
         <div className="modal">
            <div className="head">
               {title}

               <div className="close" onClick={handleCloseClick}>
                  <span className="material-symbols-rounded">close</span>
               </div>
            </div>
            <div className="content">{children}</div>
         </div>
      </div>
   );
};

export default Modal;
