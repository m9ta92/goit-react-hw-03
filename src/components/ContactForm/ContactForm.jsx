import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import css from './ContactForm.module.css';

const ContactForm = ({ onAddContact }) => {
  const handleSubmit = (values, actions) => {
    onAddContact(values);
    actions.resetForm();
  };

  const phoneNumberRegex = /^[0-9]{3}?[-\s.]?[0-9]{2}[-\s.]?[0-9]{2}$/;

  const AddContactSchema = Yup.object({
    name: Yup.string()
      .min(3, 'Too short!')
      .max(50, 'Name must be less than 50 characters')
      .required('Required'),
    number: Yup.string()
      .required('Required')
      .matches(phoneNumberRegex, 'Number must be xxx-xx-xx !!!'),
  });

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={AddContactSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
        <label>
          <span>Name:</span>
          <Field type="text" name="name" placeholder="" />
          <ErrorMessage className={css.error} name="name" component="span" />
        </label>
        <label>
          <span>Number:</span>
          <Field type="text" name="number" placeholder="" />
          <ErrorMessage className={css.error} name="number" component="span" />
        </label>
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};
export default ContactForm;
