console.log("Hello Hello");
console.log("Hello there");

//Write a JavaScript function convertGBPtoEUR DONE
//function declaration 
function convertGBPtoEUR(gBP) {   
    let euros = gBP * 1.21;
    return euros; 
};

//that takes in a specified amount in £, DONE
//and converts it to € using a given exchange rate. DONE
//The function should return the converted amount. DONE
//checking:

console.log(convertGBPtoEUR(1));
console.log(convertGBPtoEUR(200));



//Write another function convertGBPtoUSD
function convertGBPtoUSD(gBP) {   
    let dollar = gBP * 1.27;
    return dollar; 
};
// that takes in a specified amount in £,
// and converts it to $ using a given exchange rate. 
//It should behave in a very similar way to the previous function- means return keyword 


// Write a function convertGBPToCurrency which takes in both a currency code ("EUR" or "USD") // an amount of £ to convert.

function convertGBPToCurrency(GBP, currency) {
    //alwasy converts string to capita 
    currency = currency.toUpperCase();

    if (currency === 'EUR'){
        return convertGBPtoEUR(GBP);
    } else if (currency === 'USD') {
        return convertGBPtoUSD(GBP)
    } else {
        return null; 
    }
}

//predcition 1 EUR = 1.21, 1 USD = 1.27

// It should, based on which code has been entered, use one of your previously written functions to return the correct conversion. 

//If an unknown code is entered, it should return null.