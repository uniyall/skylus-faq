import { NavArrowDown, NavArrowUp } from "iconoir-react";

function AccordianItemTitle({ isExpanded }) {
  const title = "Nth Accordian";
  return (
    <div className="flex justify-between px-5 py-5 hover:bg-slate-200 hover:cursor-pointer">
      <h1>{title}</h1>
      {isExpanded ? <NavArrowUp /> : <NavArrowDown />}
    </div>
  );
}

export default AccordianItemTitle;
