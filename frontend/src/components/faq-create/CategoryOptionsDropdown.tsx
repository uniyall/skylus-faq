import { useField } from "formik";
import { useOptionsContext } from "../../context/categoryOptionsContext";

function CategoryOptionsDropdown({ options }: { options: string[] }) {
  const { showOptions, setShowOptions } = useOptionsContext()!;

  const [, , helper] = useField("category");

  function handleOptionClick(optionName: string) {
    helper.setValue(optionName);
    setShowOptions(false);
  }

  return (
    <div
      className={
        showOptions
          ? "flex flex-col absolute w-[40%] max-h-[200px] overflow-y-auto scroll-smooth mt-1 visible opacity-1 transition ease-out duration-[50ms] z-50 drop-shadow-lg"
          : "absolute flex flex-col w-[40%] max-h-[200px] overflow-y-scroll mt-1 invisible opacity-0 transition ease-out duration-[50ms] z-50 drop-shadow-lg"
      }
    >
      {options.map((optionName) => (
        <div
          className="bg-white w-full hover:cursor-pointer border-b-2 hover:bg-[#EEF4FB] p-2"
          onClick={() => handleOptionClick(optionName)}
        >
          {optionName}
        </div>
      ))}
    </div>
  );
}

export default CategoryOptionsDropdown;
