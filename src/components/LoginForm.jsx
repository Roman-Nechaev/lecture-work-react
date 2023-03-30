import { Field } from './Field';
import { Form } from './Form';
import { FormProvider } from './FormProvider';

export const LoginForm = () => {
  return (
    <FormProvider
      initialValue={{ login: '', password: '' }}
      handleSubmit={(values) => console.log(values)}
    >
      <Form>
        <Field type="text" name="login" />
        <Field type="password" name="password" />
        <button type="submit">Submit</button>
      </Form>
    </FormProvider>
  );
};

// initialValues={{ login: '', password: '' }}
//       handleSubmit={(values) => console.log(values)}
