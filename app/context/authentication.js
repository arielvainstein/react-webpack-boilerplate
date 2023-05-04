import React, { createContext } from "react";

export const AuthenticationContext = createContext(null);

export const AuthenticationProvider = ({ children }) => {
  return (
    <AuthenticationContext.Provider
      value={{
        user: "Test user",
        userId: "001",
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
