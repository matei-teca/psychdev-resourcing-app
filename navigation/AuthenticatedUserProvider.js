import React, { useState, createContext } from 'react';

export const AuthenticatedUserContext = createContext({});
export const TypeOfUserContext = createContext({},)

export const AuthenticatedUserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [specialist, setSpecialist] = useState(false);

  return (
    <AuthenticatedUserContext.Provider value={{ user, setUser }}>
      <TypeOfUserContext.Provider value={{ specialist, setSpecialist }}>
      {children}
      </TypeOfUserContext.Provider>

    </AuthenticatedUserContext.Provider>
  );
};