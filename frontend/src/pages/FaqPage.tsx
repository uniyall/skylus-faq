import FaqAccordian from "../components/faq/FaqAccordian";

function FaqPage() {
  return (
    <div className="flex flex-col w-[100vw] items-center my-10">
      <h1 className="text-4xl font-extrabold tracking-widest text-blue-500">
        Frequently Asked Questions
      </h1>
      <p className="text-gray-400 text-lg mt-5 mb-20 w-[50vw] text-center">
        If you’ve got a question, there’s a good chance we’ve answered it below.
        Take a look and if you still need help, get in touch, and we’ll happily
        help you out!
      </p>
      <div className="w-[50vw] flex flex-col">
        <FaqAccordian />
      </div>
    </div>
  );
}

export default FaqPage;
