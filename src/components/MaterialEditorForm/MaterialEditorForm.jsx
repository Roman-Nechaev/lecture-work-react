import { Formik, Form, Field } from 'formik';

export const MaterialEditorForm = ({ onSubmit }) => {
  const hendleSubmit = async (values, actions) => {
    await onSubmit(values);
    actions.setSubmitting(false);
    actions.resetForm();
  };

  return (
    <Formik initialValues={{ title: '', link: '' }} onSubmit={hendleSubmit}>
      {({ isSubmitting }) => (
        <Form>
          <label>
            Описание
            <Field name="title" type="text" />
          </label>
          <br />
          <label>
            Ссылка
            <Field name="link" type="text" />
          </label>
          <br />
          <button type="submit" disabled={isSubmitting}>
            Добавить материал
          </button>
        </Form>
      )}
    </Formik>
  );
};

// type = 'url';
