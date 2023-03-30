// import { Children } from 'react';
import { useState, useContext, createContext } from 'react';

const formContext = createContext();

export const useForm = () => useContext(formContext);

export const FormProvider = ({ initialValue = {}, handleSubmit, children }) => {
  const [state, setState] = useState(initialValue);

  const handleChange = (fieldName, value) => {
    setState((prevState) => ({ ...prevState, [fieldName]: value }));
  };
  return (
    <formContext.Provider value={{ state, handleSubmit, handleChange }}>
      {children}
    </formContext.Provider>
  );
};

// setState((prevState) => ({ ...prevState, [fieldName]: value }));
