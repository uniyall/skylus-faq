function AccordianItemBody({ answer }: { answer: string }) {
  return (
    <div className="px-5 mb-3">
      <p className="text-gray-700">{answer}</p>
    </div>
  );
}

export default AccordianItemBody;
