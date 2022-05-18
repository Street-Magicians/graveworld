import React, { useState, useContext } from "react";

// Create our theme context using React.CreateContext()
export const AccountContext = React.createContext();
export const useUser = () => useContext(AccountContext);
export default function AccountProvider({ children }) {
  const [userInformation, setUserInformation] = useState({ name: "Jon", characterName: "jrock", token: [] });
  const changeName = (userName) => {
    const defaultInformation = userInformation;
    setUserInformation({ ...defaultInformation, name: userName });
  };

  const addSpiritToken = (token) => {
    const defaultInformation = userInformation;
    defaultInformation.token.push(token);
    setUserInformation({ ...defaultInformation });
  };

  return <AccountContext.Provider value={{ userInformation: userInformation, changeName, addSpiritToken }}>{children}</AccountContext.Provider>;
}
