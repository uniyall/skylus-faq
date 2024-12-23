import { MinusSquareSolid, PlusSquareSolid } from "iconoir-react";

function AccordianItemTitle({
  isExpanded,
  question,
}: {
  isExpanded: boolean;
  question: string;
}) {
  return (
    <div className="flex items-center justify-between text-gray-600 px-3 py-1.5 rounded-md bg-blue-50 hover:cursor-pointer">
      <h1 className="font-normal text-base">{question}</h1>
      {isExpanded ? (
        <MinusSquareSolid className="text-red-600 text-xs" />
      ) : (
        <PlusSquareSolid className="text-emerald-600 text-xs" />
      )}
    </div>
  );
}

export default AccordianItemTitle;
