import { ReactElement } from "react";
import { Status } from "../../utils/statuses";
import "./index.css";

interface KeyProps {
   value: string;
   icon?: ReactElement;
   status?: Status;
   onClick: (value: string) => void;
}

const Key: React.FC<KeyProps> = ({ value, status, icon, onClick }) => {
   return (
      <button className={`key ${status}`} onClick={() => onClick(value)}>
         {icon ? icon : value}
      </button>
   );
};

export default Key;
