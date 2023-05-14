import { useReducer, useRef, useState } from "react";
import reducerFunction, { initalState } from "./store";
import ShowHealthData from "./components/ShowHealthData/ShowhealthData";
import SetHealthData from "./components/SetHealthData/SetHealthData";
import MainContext from "./components/context/main-context";

const App = () => {
 

    const [state, despatch] = useReducer(reducerFunction, initalState);

    const [healthInput, setHealthInput] = useState<number>(0);

    const setInputValueFun = (value: number) => {
        
        setHealthInput(value)
    }

    const updateHealthData = (inputValue: any) => {
        console.log('selectRef', inputValue)
        console.log('inputvalue', healthInput)
        despatch({
            payload: {value: healthInput},
            type: inputValue
        })
    }
    return (
        
        <MainContext.Provider value={
            {
                inputValue: healthInput,
                setInputValue: setInputValueFun
            }
        }>
        <div className="width100">
            <ShowHealthData  state={state}/>
            <SetHealthData 
            state={state}
            updateHealthData={updateHealthData}
            />
        </div>

        </MainContext.Provider>

    
      
      
    );
}

export default App;