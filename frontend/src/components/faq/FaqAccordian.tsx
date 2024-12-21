import axios from "axios";
import AccordianItem from "./AccordianItem";
import { useQuery } from "react-query";

function FaqAccordian() {
  const { isLoading, isError, data, error } = useQuery("faqs", {
    cacheTime: 20000,
    queryFn: async () => {
      const { data, status } = await axios.get("http://localhost:7800/faq");
      console.log(data);

      return data;
    },
  });
  return (
    <div className="w-full h-full bg-white">
      {data ? (
        data.map((s) => (
          <div className="">
            <h1 className="text-center font-bold mb-5 mt-7 text-xl tracking-widest text-[#47ADEA]">
              {s.section_title.toUpperCase()}
            </h1>
            {s.content.map((i) => (
              <div>
                <AccordianItem question={i.question} answer={i.answer} />
              </div>
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
