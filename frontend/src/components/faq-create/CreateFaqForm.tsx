import { Formik, Form, Field } from "formik";
import handleFormSubmit from "../../utils/handleFormSubmit";
import { formInitialValues } from "../../utils/constants";
import TextArea from "./TextArea";
import CategoryInput from "./CategoryInput";
import { OptionContextProvider } from "../../context/categoryOptionsContext";
import { useMutation } from "react-query";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";

function CreateFaqForm() {
  const { isLoading, isError, isSuccess, mutate, status } = useMutation(
    (values) => {
      return axios.post("http://localhost:7800/faq/new", values);
    },
    {
      onSuccess: () => toast("FAQ Added 🎉"),
    }
  );

  return (
    <OptionContextProvider>
      <div className="flex flex-col items-center">
        <ToastContainer />
        <Formik
          initialValues={formInitialValues}
          onSubmit={(values, formikHelpers) => {
            handleFormSubmit(values, formikHelpers, mutate);
          }}
        >
          <Form autoComplete="off" className="flex flex-col items-center w-1/2">
            <Field
              component={TextArea}
              name="question"
              label="Question"
              placeHolder="Question for FAQ"
            />
            <Field
              component={TextArea}
              name="answer"
              label="Answer"
              placeHolder="Answer for FAQ"
            />
            <Field
              component={CategoryInput}
              name="category"
              label="Category"
              placeHolder="Category for FAQ"
            />
            <button
              type="submit"
              className="bg-blue-500 text-white p-2 rounded-md hover:shadow-md my-5"
            >
              Submit
            </button>
          </Form>
        </Formik>
      </div>
    </OptionContextProvider>
  );
}

export default CreateFaqForm;
