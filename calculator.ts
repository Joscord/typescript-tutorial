// En typescript podemos crear nuestros propios tipos
type Operation = "add" | "substract" | "multiply" | "divide"

const calculator = (a: number, b: number, operation: Operation) => {
    if (operation == "add") return a+b

    if (operation == "substract") return a-b

    if (operation == "multiply") return a*b

    if (operation == "divide") {
        if (b == 0) return "Cannot divide by 0"
        return a/b
    }
}

console.log(calculator(3, 4, "divide"))