const sum = (a,b)=>{
    return a + b
}

console.log(sum(7,3))


let OneEuroIs = {
     "JPY": 156.5,
      "USD": 1.07,
      "GBP": 0.87
}


const fromEuroToDollar = (valueineuro) => {
    return valueineuro * OneEuroIs.USD
}

const fromDollarToYen = (valueindollar) => {
    

    return 155.65 * valueindollar
}

const fromYenToPound = (valueinyen) => {
    return valueinyen / 208.30
}



module.exports = {sum, fromEuroToDollar, fromDollarToYen, fromYenToPound};