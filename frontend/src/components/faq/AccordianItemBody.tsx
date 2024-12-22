import MarkdownView from "./MarkdownView";

function AccordianItemBody({ answer }: { answer: string }) {
  return (
    <div className="px-5 mb-3">
      <MarkdownView content={answer} />
    </div>
  );
}

export default AccordianItemBody;
