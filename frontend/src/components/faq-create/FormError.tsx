import { ErrorMessage } from "formik";

function FormError({ name }) {
  return (
    <div className="relative w-full mb-1">
      <div className="invisible">a</div>
      <div className="text-red-500 text-xs px-0.5 w-full text-left absolute top-0">
        <ErrorMessage name={name} />
      </div>
    </div>
  );
}

export default FormError;
