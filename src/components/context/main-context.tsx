import { createContext, useState } from "react";




const MainContext = createContext({
    inputValue: 0,
    setInputValue: (value: number) => {}
});

export default MainContext