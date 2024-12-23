import { useId } from "react";

function TextArea({ label, field, placeHolder, disabled, rows = 7 }) {
  console.log(field);
  const id = useId();
  return (
    <div className="w-full">
      <label className="text-md text-gray-600" htmlFor={id}>
        {label}
      </label>
      <textarea
        className="text-md text-gray-600 w-full mt-1.5 p-2 outline-1 outline-blue-100 border shadow-sm shadow-gray-200 border-gray-200 rounded-md"
        {...field}
        id={id}
        rows={rows}
        placeholder={placeHolder}
        disabled={disabled}
      ></textarea>
    </div>
  );
}

export default TextArea;
