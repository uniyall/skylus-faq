import CreateFaqForm from "../components/faq-create/CreateFaqForm";

function FaqCreatePage() {
  return (
    <div className="w-full pb-[200px] mt-20">
      <h1 className="text-4xl text-center font-extrabold tracking-widest text-blue-500 mb-10">
        Create entry for FAQ
      </h1>
      <CreateFaqForm />
    </div>
  );
}

export default FaqCreatePage;
