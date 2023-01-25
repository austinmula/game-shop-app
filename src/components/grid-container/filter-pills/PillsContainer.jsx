import { MdFilterList } from "react-icons/md";
import { SiPlaystation4, SiPlaystation5, SiWindows } from "react-icons/si";
import "./pills.scss";
const PillsContainer = ({ filterItems }) => {
  return (
    <div className="flex w-full mb-7">
      <div className="pills-container flex gap-4 flex-1">
        <div className="pill" onClick={() => filterItems("PC")}>
          <SiWindows className="pill-icon" />
          <span>Windows</span>
        </div>
        <div className="pill">
          <SiPlaystation4 className="pill-icon" />
          <span>PlayStation 4</span>
        </div>
        <div className="pill">
          <SiPlaystation5 className="pill-icon" />
          <span>Playstation 5</span>
        </div>
      </div>
      <div className="actions-container">
        <div className="filter pill flex items-center h-full p-4">
          <MdFilterList className="pill-icon text-lg" />
        </div>
      </div>
    </div>
  );
};

export default PillsContainer;
