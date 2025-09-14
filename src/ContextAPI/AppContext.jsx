import { createContext, useContext, useState } from "react";

const Appcontext = createContext();

export const useCount = () => {
    const context = useContext(Appcontext);
    if (!context) {
      throw new Error("useCount must be used inside a CountProvider");
    }
    return context;  };

const contextProvider = (children) => {

    const [count, setCount] = useState(0)

    return <Appcontext.Provider value={{ count, setCount }}>
        {children}
    </Appcontext.Provider>
}

export default contextProvider;