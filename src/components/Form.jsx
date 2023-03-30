import { useForm } from './FormProvider';
import { useContext } from 'react';
// import { formContext } from './FormProvider';

export const Form = ({ children }) => {
  const ctx = useForm();

  const handleSubmit = (e) => {
    e.preventDefault();
    ctx.handleSubmit('some form value');
  };
  return <form onSubmit={handleSubmit}>{children}</form>;
};
