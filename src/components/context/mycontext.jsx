import { createContext, useContext, useState } from 'react';

const MyContext = createContext();

export const useMyContext = () => {
  return useContext(MyContext);
};

export const MyContextProvider = ({ children }) => {
  const initialState = {
    // Define aquí tus propiedades iniciales del estado global
    tema: 'dracula',
  };

  const [globalState, setGlobalState] = useState(initialState);

  const updateGlobalState = (newState) => {
    setGlobalState(newState);
  };


  return (
    <MyContext.Provider value={{ globalState, updateGlobalState }}>
      {children}
    </MyContext.Provider>
  );
};
