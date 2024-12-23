import axios from "axios";
import AccordianItem from "./AccordianItem";
import { useQuery } from "react-query";

function FaqAccordian() {
  const { isLoading, isError, data, error } = useQuery("faqs", {
    cacheTime: 0,
    queryFn: async () => {
      const { data, status } = await axios.get("http://localhost:7800/faq");
      console.log(data);

      return data;
    },
  });
  return (
    <div className="w-full h-full p-5 bg-white rounded-xl border shadow-xl flex flex-col gap-4 mt-2.5">
      {data ? (
        data.map((s) => (
          <div className="flex flex-col gap-3">
            <h1 className=" font-extrabold text-xl text-blue-500">
              {s.section_title}
            </h1>
            {s.content.map((i) => (
              <AccordianItem question={i.question} answer={i.answer} />
            ))}
          </div>
        ))
      ) : (
        <div className="h-screen bg-white w-[50vw]"></div>
      )}
    </div>
  );
}

export default FaqAccordian;
