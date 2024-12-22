import Markdown from "react-markdown";

function MarkdownView({ content }: { content: string }) {
  return (
    <div className="">
      <Markdown className="prose">{content}</Markdown>
    </div>
  );
}

export default MarkdownView;
