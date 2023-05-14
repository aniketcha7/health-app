import { useContext } from "react";
import MainContext from "../context/main-context";

const SetHealthInput = () => {
    
    const mainContextValue = useContext(MainContext)
  
    console.log('mainContextValue',mainContextValue);
    const { inputValue, setInputValue } = mainContextValue;

    return (<input type="number" 
    value={inputValue} 
    onChange={(e) => setInputValue(parseInt(e.target.value))} />)
};

export default SetHealthInput;