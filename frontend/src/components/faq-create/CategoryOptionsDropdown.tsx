import { useOptionsContext } from "../../context/categoryOptionsContext";

function CategoryOptionsDropdown({ options }: { options: string[] }) {
  const { showOptions, setShowOptions } = useOptionsContext()!;

  function handleOptionClick() {
    // set input value with the option value

    setShowOptions(false);
  }

  return (
    <div
      className={
        showOptions
          ? "flex flex-col absolute w-max max-h-[200px] overflow-y-auto scroll-smooth mt-1 visible opacity-1 transition ease-out duration-[50ms]"
          : "absolute flex flex-col w-max max-h-[200px] overflow-y-scroll mt-1 invisible opacity-0 transition ease-out duration-[50ms]"
      }
    >
      {options.map((optionName) => (
        <div
          className="bg-white max-w-[300px] hover:cursor-pointer border-b-2 hover:bg-[#EEF4FB] p-2"
          onClick={handleOptionClick}
        >
          {optionName}
        </div>
      ))}
    </div>
  );
}

export default CategoryOptionsDropdown;
