import clsx from "clsx";
import { REVEAL_TIME_MS } from "../../utils/constants";
import { Status } from "../../utils/statuses";
import "./index.css";

interface CellProps {
   status?: Status;
   value: string;
   isCompletedCell?: boolean;
   position?: number;
}

const Cell: React.FC<CellProps> = ({
   status = "",
   value,
   isCompletedCell = false,
   position = 0,
}) => {
   const isFillingCell = value && !isCompletedCell;
   const animationDelay = position * REVEAL_TIME_MS + "ms";

   const className = clsx("cell", status, {
      "cell-fill": isFillingCell,
      active: isFillingCell,
   });

   return (
      <div className={className} style={{ animationDelay }}>
         {value}
      </div>
   );
};

export default Cell;
