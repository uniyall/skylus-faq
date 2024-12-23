import MarkdownView from "./MarkdownView";

function AccordianItemBody({ answer }: { answer: string }) {
  return (
    <div className="p-2.5 -mt-1 w-full shadow-sm rounded-b-md text-sm border border-blue-50">
      <MarkdownView content={answer} />
    </div>
  );
}

export default AccordianItemBody;
