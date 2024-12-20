import { useState } from "react";
import AccordianItemBody from "./AccordianItemBody";
import AccordianItemTitle from "./AccordianItemTitle";

function AccordianItem() {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <div>
      <div
        onClick={() => {
          setIsExpanded((s) => !s);
          console.log("clicked");
        }}
        className="select-none target:border target:border-blue-500 "
      >
        <AccordianItemTitle isExpanded={isExpanded} />
      </div>
      <div className={isExpanded ? "block" : "hidden"}>
        <AccordianItemBody />
      </div>
    </div>
  );
}

export default AccordianItem;
