// En typescript podemos crear nuestros propios tipos
type Operation = "add" | "substract" | "multiply" | "divide"
type Result = number

// Podemos especificar también qué esperamos que devuelva la función
const calculator = (a: number, b: number, operation: Operation): Result => {
    if (operation === "add") return a+b

    if (operation === "substract") return a-b

    if (operation === "multiply") return a*b

    if (operation === "divide") {
        if (b === 0) throw new Error("Cannot divide by 0")
        return a/b
    }

    throw new Error("Operation is not valid")
}

console.log(calculator(3, 4, "divide"))