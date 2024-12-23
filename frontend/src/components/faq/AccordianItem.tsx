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
    <div>
      <div
        onClick={() => {
          setIsExpanded((s) => !s);
          console.log("clicked");
        }}
        className="select-none target:border"
      >
        <AccordianItemTitle question={question} isExpanded={isExpanded} />
      </div>
      <div
        data-active={isExpanded}
        className={`${
          isExpanded
            ? "visible opacity-1 transition ease-linear duration-[50ms]"
            : "absolute invisible opacity-0 transition ease-linear duration-[50ms]"
        } data-[active=true]:bg-blue-100/10`}
      >
        <AccordianItemBody answer={answer} />
      </div>
    </div>
  );
}

export default AccordianItem;
