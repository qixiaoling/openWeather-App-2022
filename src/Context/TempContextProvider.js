import React, {createContext, useState} from 'react';
import {kelvinToCelsius} from "../helper/kelvinToCelsius";
import {kelvinToFahrenheit} from "../helper/kelvinToFahrenheit";

export const TempContext = createContext(null);

function TempContextProvider ({children}){
    const [selectedMetric, toggleSelectedMetric] = useState("celsius");
    function toggleTemp () {
        if(selectedMetric === 'celsius'){
            toggleSelectedMetric('fahrenheit');
        }else {
            toggleSelectedMetric ( 'celsius');
        }
    }

    return(
        <TempContext.Provider value = {{
            toggleTemp: toggleTemp,//LET OP! Do not write () as part of the function name, there will be re-rendering issues!!!
            kelvinToMetric: selectedMetric === 'celsius' ? kelvinToCelsius :
                kelvinToFahrenheit,
        }}>
            {children}
        </TempContext.Provider>
    )
}
export default TempContextProvider;
