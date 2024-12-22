export default function handleFormSubmit(values, formikHelpers, mutate) {
    mutate(values, {
        onSuccess : () => {
            formikHelpers.resetForm();
        }
    });
}