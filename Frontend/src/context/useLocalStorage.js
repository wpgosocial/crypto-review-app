import React, { useState, useEffect } from "react";

const useLocalStorageState = (inPut, key) => {
    const [inPutValue, SetInPutValue] = useState(() => {
        const storage = window.localStorage.getItem(key);
        const sentValue = storage !== null ? JSON.parse(storage) : inPut;//cant make null cause error when empty
        // const sentValue = storage !== null ? JSON.parse(storage) : inPut;//cant make null cause error when empty

        return sentValue;
    });
    useEffect(() => {
        window.localStorage.setItem(key, JSON.stringify(inPutValue));
    // }, []);
}, [inPutValue]);


    return (
        [inPutValue, SetInPutValue]
    )
}

export default useLocalStorageState;

// import React, { useState, useEffect } from "react";

// const useLocalStorageState = (key, inPut) => {
//     const [inPutValue, setInPutValue] = useState(() => {
//         try {
//             const storage = window.localStorage.getItem(key);
//             return storage ? JSON.parse(storage) : inPut;//cant make null cause error when empty
//             // const sentValue = storage !== null ? JSON.parse(storage) : inPut;//cant make null cause error when empty
//         } catch (error) {
//             console.log(error);
//             return inPut;
//         }
//     });
//     const setValue = (value) => {
//         try {
//             const valueLocal = value instanceof Function ? value(inPutValue) : value;
//             setInPutValue(valueLocal);
//             window.localStorage.setItem(key, JSON.stringify(valueLocal));
//         } catch (error) {
//             console.log(error);
//         }
//     }

//     return (
//         [inPutValue, setInPutValue]
//     )
// }

// export default useLocalStorageState;


