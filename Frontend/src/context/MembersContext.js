import React, { createContext, useState, useEffect } from 'react'
import useLocalStorage from "./useLocalStorage";



export const MembersContext = createContext(null)


const MembersProvider = ({ children }) => {

    const [isAmember, setIsAmember] = useLocalStorage({}, "username", "password")
    const [isActive, setIsActive] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    const membersData = () => {
        fetch(`/api/members`)
            .then((res) => res.json())
            .then((json) => { setIsActive(json.data); })
            .then(() => { setIsLoading(false); });
    };
    useEffect(() => {
        membersData()
    }, []);

    if (isLoading) return "loading..."
    // console.log("isAmember ++++++++++++++++", isAmember)
    // console.log("isActive ++++++++++++++++", isActive)

    return (
        <>
            <MembersContext.Provider
                value={{
                    isAmember, setIsAmember,
                    isActive, setIsActive
                }}
            >
                {children}
            </MembersContext.Provider>
        </>
    )
}

export default MembersProvider