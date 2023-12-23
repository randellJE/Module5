const Calculator = require('../libraries/calculator')
let myCalc = new Calculator()

const addNumbers = (req, res) => {
    let number1 = parseInt(req.query.num1)
    let number2 = parseInt(req.query.num2)
    let sum = myCalc.add(number1, number2)
    console.log("Sum is: ", sum)
    res.status(200).json({result: sum})
}

const subtractNumbers = (req, res) => {
    let number1 = parseInt(req.query.num1)
    let number2 = parseInt(req.query.num2)
    let difference = myCalc.subtract(number1, number2)
    console.log("Difference is: ", difference)
    res.status(200).json({result: difference})
}

const multiplyNumbers = (req, res) => {
    let number1 = parseInt(req.query.num1)
    let number2 = parseInt(req.query.num2)
    let product = myCalc.multiply(number1, number2)
    console.log("Product is: ", product)
    res.status(200).json({result: product})
}

const divideNumbers = (req, res) => {
    let number1 = parseInt(req.query.num1)
    let number2 = parseInt(req.query.num2)
    let quotient = myCalc.divide(number1, number2)
    console.log("Quotient is: ", quotient)
    res.status(200).json({result: quotient})
}

module.exports = {
    addNumbers,
    subtractNumbers,
    multiplyNumbers,
    divideNumbers
}