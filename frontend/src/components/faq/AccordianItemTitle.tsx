import { NavArrowDown, NavArrowUp } from "iconoir-react";

function AccordianItemTitle({
  isExpanded,
  question,
}: {
  isExpanded: boolean;
  question: string;
}) {
  return (
    <div className="flex justify-between px-5 py-3 hover:bg-[#EEF4FB] hover:cursor-pointer">
      <h1 className="font-normal">{question}</h1>
      {isExpanded ? <NavArrowUp /> : <NavArrowDown />}
    </div>
  );
}

export default AccordianItemTitle;
