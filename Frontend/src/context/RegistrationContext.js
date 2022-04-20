import React, { createContext, useState } from 'react';


export const RegistrationContext = createContext(null);

const RegistrationProvider = ({ children }) => {


    const [isRgistered, setIsRgistered] = useState({}, "username", "email", "password", "confirmPass")


    return (
        <>
            <RegistrationContext.Provider
                value={{
                    isRgistered, setIsRgistered
                }}
            >
                {children}
            </RegistrationContext.Provider>

        </>
    )
}
export default RegistrationProvider;