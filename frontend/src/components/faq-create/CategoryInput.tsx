import { useId } from "react";
import CategoryOptionsDropdown from "./CategoryOptionsDropdown";
import OutsideAlerter from "../OutsideAlerter";
import { useOptionsContext } from "../../context/categoryOptionsContext";

function CategoryInput({ label, field, placeHolder }) {
  const { showOptions, setShowOptions } = useOptionsContext()!;
  const id = useId();
  return (
    <div className="w-full">
      <OutsideAlerter>
        <label className="text-xl" htmlFor={id}>
          {label}
        </label>

        <input
          type="text"
          className="w-full p-2 outline-1 outline-blue-100"
          {...field}
          id={id}
          onClick={() => setShowOptions(true)}
          onChange={(e) => {
            field.onChange(e);
            // call debounced function to make search api call and update drop down component
          }}
          placeHolder={placeHolder}
        />
        <CategoryOptionsDropdown
          options={[
            "General",
            "Technical",
            "Biggest Category Ever hk hjkj hkj kj kj kj kj kj kj kj kj kj kj kj kj kj kj kj kj ",
            "a",
            "b",
          ]}
        />
      </OutsideAlerter>
    </div>
  );
}

export default CategoryInput;
