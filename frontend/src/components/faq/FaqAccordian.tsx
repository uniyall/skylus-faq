import AccordianItem from "./AccordianItem";
import data from "../../FAQ_DB.json";

function FaqAccordian() {
  return (
    <div className="w-full h-full bg-white">
      {data.map((s) => (
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
      ))}
    </div>
  );
}

export default FaqAccordian;
