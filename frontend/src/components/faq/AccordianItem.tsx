import { useState } from "react";
import AccordianItemBody from "./AccordianItemBody";
import AccordianItemTitle from "./AccordianItemTitle";

function AccordianItem({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <div className="border-b-[2px] border-opacity-90 border-[#EEF4FB]">
      <div
        onClick={() => {
          setIsExpanded((s) => !s);
          console.log("clicked");
        }}
        className="select-none target:border target:border-blue-500 "
      >
        <AccordianItemTitle question={question} isExpanded={isExpanded} />
      </div>
      <div
        className={
          isExpanded
            ? "visible opacity-1 transition ease-linear duration-[50ms]"
            : "absolute invisible opacity-0 transition ease-linear duration-[50ms]"
        }
      >
        <AccordianItemBody answer={answer} />
      </div>
    </div>
  );
}

export default AccordianItem;
