import { Formik, Form, Field } from "formik";


const initialValues = {
    query: '',
};

export const SearchForm = ({onSubmit}) => {
    
    const handleSubmit = (values, { resetForm }) => {
        if (values.query.trim() === '') {
            alert('Enter search query');
            return
        }
        onSubmit(values.query);
        resetForm();
    }

    return (
        <Formik
            initialValues={initialValues}
        onSubmit={handleSubmit}>
            <Form
            autoComplete="off">
                <Field
                    type="text"
                    name="query"
                />
                <button
                type="submit">Search</button>
            </Form> 
        </Formik>
    )
}