import { Formik, Form, Field } from "formik";
import { toast } from "react-hot-toast";


const initialValues = {
    query: '',
};

export const SearchForm = ({onSubmit}) => {
    
    const handleSubmit = (values, { resetForm }) => {
        if (values.query.trim() === '') {
            toast('Enter name of the movie');
            return;
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