const Logger = require("./logger")

class Calculator {
    constructor() {
        this.id = Math.random()
        
        this.Logger = new Logger("Calculator, this.id")
        
    }
    add(num1, num2) {
        const value = num1 + num2
        this.Logger.log(value)
        return value
    }

    subtract(num1, num2) {
        const value = num1 - num2 
        this.Logger.log(value)
        return value
    }

    multiply(num1, num2) {
        const value = num1 * num2 
        this.Logger.log(value)
        return value
    }

    divide(num1, num2) {
        if (num2 === 0) {
            this.Logger.log('Error: Division by zero')
            return undefined
        }
        const value = num1 / num2 
        this.Logger.log(value)
        return value
    }
}

module.exports = Calculator