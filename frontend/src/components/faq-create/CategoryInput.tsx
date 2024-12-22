import { useId } from "react";
import CategoryOptionsDropdown from "./CategoryOptionsDropdown";
import OutsideAlerter from "../OutsideAlerter";
import { useOptionsContext } from "../../context/categoryOptionsContext";
import useCategoryOptions from "../../hooks/useCategoryOptions";
import { FieldInputProps } from "formik";

function CategoryInput({
  label,
  field,
  placeHolder,
  disabled,
}: {
  field: FieldInputProps<any>;
  label: string;
  placeHolder: string;
  disabled: boolean;
}) {
  const { setShowOptions } = useOptionsContext()!;
  const { filteredOptions, updateFilterOptions } = useCategoryOptions(
    field.value
  );

  const id = useId();
  return (
    <div className="w-full relative">
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
            updateFilterOptions(e.target.value);
          }}
          placeholder={placeHolder}
          disabled={disabled}
        />
        <CategoryOptionsDropdown options={filteredOptions} />
      </OutsideAlerter>
    </div>
  );
}

export default CategoryInput;
