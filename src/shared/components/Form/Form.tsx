import { useFormik } from 'formik';
import * as Yup from 'yup';

interface Props {
    labelButton: string;
    nameClass: string;
    handleSubmit: (action: any) => void;
}

export const FormBook = (props: Props) => {
    const { handleSubmit, labelButton, nameClass } = props;

    const formik: any = useFormik({
        initialValues: {
            name: '',
            email: '',
            phone: '',
            comment: ''
        },
        validationSchema: Yup.object({
            name: Yup.string()
                .required('Este campo es obligatorio.'),
            email: Yup.string()
                .email('Email invalido')
                .required('Este campo es obligatorio.'),
            phone: Yup.number()
                .required('Este campo es obligatorio.'),
            comment: Yup.string()
                .notRequired()
                .nullable(),
        }),
        onSubmit: (values: any, { resetForm }) => {
            handleSubmit(values);
            resetForm();
        }
    });

    return (
        <form className={nameClass} onSubmit={formik.handleSubmit}>
                <label htmlFor="name">Name<span>*</span></label>
                <input
                    id="name"
                    name="name"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.name}
                />

                {
                    formik.touched.name && formik.errors.name
                    ? (<div className='form_errors'>{formik.errors.name}</div>)
                    : null
                }

                <label htmlFor="email">Email<span>*</span></label>
                <input
                    id="email"
                    name="email"
                    type="email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                />

                {
                    formik.touched.name && formik.errors.name
                    ? (<div className='form_errors'>{formik.errors.name}</div>)
                    : null
                }


                <label htmlFor="phone">Phone<span>*</span></label>
                <input
                    id="phone"
                    name="phone"
                    type="tel"
                    onChange={formik.handleChange}
                    value={formik.values.phone}
                />

                {
                    formik.touched.name && formik.errors.name
                    ? (<div className='form_errors'>{formik.errors.name}</div>)
                    : null
                }

                <label htmlFor="comment">Comment</label>
                <textarea
                    id="comment"
                    name="comment"
                    onChange={formik.handleChange}
                    value={formik.values.comment}
                />

            <button type="submit">{labelButton}</button>
        </form>
    );
};