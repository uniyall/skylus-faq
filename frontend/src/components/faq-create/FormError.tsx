import { ErrorMessage } from "formik"

function FormError({
    name
}) {
  return (
    <div className="relative w-full my-5">
    <div className="invisible">a</div>
    <div className="text-red-600 w-full opacity-80 text-left absolute top-0">
    <ErrorMessage name={name}/>
    </div>
    </div>
  )
}

export default FormError