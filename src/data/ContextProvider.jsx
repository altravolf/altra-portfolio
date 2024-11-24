import { useState } from "react";
import MyContext from "./MyContext";

// eslint-disable-next-line react/prop-types
const ContextProvider = ({ children }) => {

    const [isHeight, setIsHeight] = useState(0);

    return (
        <MyContext.Provider value={{ isHeight, setIsHeight }}>
            {children}
        </MyContext.Provider>
    )
}

export default ContextProvider;