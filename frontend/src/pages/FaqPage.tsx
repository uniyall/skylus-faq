import FaqAccordian from "../components/faq/FaqAccordian";

function FaqPage() {
  return (
    <div className="flex flex-col md:w-4/5 mx-auto items-center my-10">
      <h1 className="text-4xl text-center font-extrabold text-blue-500">
        Frequently Asked Questions
      </h1>
      <p className="text-gray-400 text-lg mt-5 mb-5 w-[50vw] text-center">
        Welcome to the Skylus FAQ section! Here, you’ll find answers to the most
        common questions about our services and solutions.
      </p>
      <div className="w-full flex flex-col">
        <FaqAccordian />
      </div>
    </div>
  );
}

export default FaqPage;
