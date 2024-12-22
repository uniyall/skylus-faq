import { useId } from "react";

function TextArea({ label, field, placeHolder, disabled }) {
  console.log(field);
  const id = useId();
  return (
    <div className="w-full">
      <label className="text-xl" htmlFor={id}>
        {label}
      </label>
      <textarea
        className="w-full p-2 outline-1 outline-blue-100"
        {...field}
        id={id}
        rows={7}
        placeholder={placeHolder}
        disabled={disabled}
      ></textarea>
    </div>
  );
}

export default TextArea;
