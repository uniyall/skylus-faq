import { object, string } from 'yup';


const formValidationSchema = object({
    question : string().required('FAQ Question is required'),
    answer : string().required('FAQ Answer is required'),
    category : string().required('FAQ Category is required')
})

export default formValidationSchema;