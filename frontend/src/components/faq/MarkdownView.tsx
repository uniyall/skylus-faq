import Markdown from "react-markdown";

function MarkdownView({ content }: { content: string }) {
  return (
    <div className="w-full">
      <Markdown className="prose prose-sm max-w-none text-gray-500">
        {content}
      </Markdown>
    </div>
  );
}

export default MarkdownView;
