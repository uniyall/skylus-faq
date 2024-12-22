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
          type : "success"
        });

        queryClient.invalidateQueries({
          queryKey : 'faqs'
        })

      },
      onError : () => toast("Unable to submit FAQ, please try again!", {
        className : 'bg-red-600 text-white', 
        hideProgressBar: true,
        type : "error"
      })
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
          <Form autoComplete="off" className="flex flex-col items-center w-1/2">
            <Field
              component={TextArea}
              name="question"
              label="Question"
              placeHolder="Question for FAQ"
              disabled={isLoading}
            />
            <FormError name={"question"}/>
            <Field
              component={TextArea}
              name="answer"
              label="Answer"
              placeHolder="Answer for FAQ"
              disabled={isLoading}
            />
             <FormError name={"answer"}/>
            <Field
              component={CategoryInput}
              name="category"
              label="Category"
              placeHolder="Category for FAQ"
              disabled={isLoading}
            />
            <div className="relative w-full my-5">
              <div className="invisible">a</div>
              <FormError name={"category"}/>
            </div>
            
            <button
              type="submit"
              className="bg-blue-500 text-white p-2 rounded-md hover:shadow-md min-h-6 w-16 my-5"
              disabled={isLoading}
            >
              {isLoading ? <Loader /> : 'Submit'}
            </button>
          </Form>
        </Formik>
      </div>
    </OptionContextProvider>
  );
}

export default CreateFaqForm;
