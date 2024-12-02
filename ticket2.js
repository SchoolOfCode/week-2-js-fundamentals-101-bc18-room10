// Develop a JavaScript function displayTemperatureInCelsius DONE

const displayTemperatureInCelsius = (fh)=> {
    const celFormula = ((fh-32) / (9 / 5)) ;
    return celFormula;
}

// that takes in a numerical Fahrenheit temperature reading DONE
// and converts it to Celsius DONE
//, returning the number representing the Celsius value. DONE

// Implement another function displayTemperatureInFahrenheit DONE

const displayTemperatureInFahrenheit = (cel)=> {
    const fahFormula = ((cel * (9 / 5)) + 32) ;
    return fahFormula;
}

// That takes in a numerical Celcius temperature reading DONE
// and converts it to Fahrenheit DONE
//, returning the number representing the Fahrenheit value. DONE

// Create a function toggleTemperatureDisplay DONE

let previousUnit = "celsius";               //Initial Value will be Celsius

const toggleTemperatureDisplay = (degrees)=> {   
    let result;
        if (previousUnit === "celsius") {
            previousUnit = "fahrenheit";
            result =  displayTemperatureInFahrenheit(degrees);
        } else if (previousUnit ==="fahrenheit") {
            previousUnit = "celsius";
            result = displayTemperatureInCelsius(degrees);
        }
   return result;
}

// that returns either Celsius or Fahrenheit 
// depending on which was the last returned (if the last value returned was Fahrenheit, then you’ll want to return Celsius and vice versa). 
// Start with a default of the last returned format being Celsius.

// const toggleTemperatureDisplay = (degrees, unit)=> {   //degrees for amount, unit for unit of measurement
//     if (unit === "c") {
//         return displayTemperatureInFahrenheit(degrees);
//     } else if (unit ==="f") {
//         return displayTemperatureInCelsius(degrees);
//     } else if (unit !=("c" || "f")) {
//         return "Error: Unit should be c or f"; 
//     }
// }h