import { Formik, Form, Field } from "formik";
import handleFormSubmit from "../../utils/handleFormSubmit";
import { formInitialValues } from "../../utils/constants";
import TextArea from "./TextArea";
import CategoryInput from "./CategoryInput";
import { OptionContextProvider } from "../../context/categoryOptionsContext";
import { useMutation, useQueryClient } from "react-query";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import Loader from "../Loader";
import formValidationSchema from "../../utils/formValidationSchema";
import FormError from "./FormError";
import { Home } from "iconoir-react";

function CreateFaqForm() {
  const queryClient = useQueryClient();

  const { isLoading, mutate } = useMutation(
    (values) => {
      return axios.post("http://localhost:7800/faq/new", values);
    },
    {
      onSuccess: () => {
        toast("FAQ Added successfully", {
          hideProgressBar: true,
          type: "success",
        });

        queryClient.invalidateQueries({
          queryKey: "faqs",
        });
      },
      onError: () =>
        toast("Unable to submit FAQ, please try again!", {
          className: "bg-red-600 text-white",
          hideProgressBar: true,
          type: "error",
        }),
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
          validationSchema={formValidationSchema}
        >
          <Form
            autoComplete="off"
            className="flex flex-col items-center w-1/2 shadow-xl p-5 rounded-lg border bg-white"
          >
            <Field
              component={TextArea}
              name="question"
              label="Question"
              placeHolder="Question for FAQ"
              disabled={isLoading}
              rows={1}
            />
            <FormError name={"question"} />
            <Field
              component={TextArea}
              name="answer"
              label={
                <>
                  Answer{" "}
                  <small className="text-gray-500">(Markdown enabled)</small>
                </>
              }
              placeHolder="Answer for FAQ"
              disabled={isLoading}
            />
            <FormError name={"answer"} />
            <Field
              component={CategoryInput}
              name="category"
              label="Category"
              placeHolder="Category for FAQ"
              disabled={isLoading}
            />

            <FormError name={"category"} />
            <div className="flex self-end gap-x-2">
              <a
                href="/"
                className="text-blue-500 bg-white border border-blue-500 px-2 py-2 text-sm items-center rounded-md hover:shadow-md flex gap-x-2"
              >
                <Home className="size-4" /> Home
              </a>
              <button
                type="submit"
                className="bg-blue-500 text-white px-2 py-2 rounded-md hover:shadow-md min-h-6 w-28 text-sm"
                disabled={isLoading}
              >
                {isLoading ? <Loader /> : "Create FAQ"}
              </button>
            </div>
          </Form>
        </Formik>
      </div>
    </OptionContextProvider>
  );
}

export default CreateFaqForm;
