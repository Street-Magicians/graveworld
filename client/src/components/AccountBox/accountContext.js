import React, { useState, useContext } from "react";

// Create our theme context using React.CreateContext()
export const AccountContext = React.createContext();
export const useUser = () => useContext(AccountContext);
export default function AccountProvider({ children }) {
    const [userInformation, setUserInformation] = useState({ name: "Jon", characterName: "jrock" });
    const changeName = (userName) => {
        const defaultInformation = userInformation;
        setUserInformation({ ...defaultInformation, name: userName });
    };
    return <AccountContext.Provider value={{ userInformation: userInformation, changeName }}>{children}</AccountContext.Provider>;
}
