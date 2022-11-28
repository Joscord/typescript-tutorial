// Podemos definir específicamente el tipo de valor que debe ser pasada a la función
const calculator = (a: number, b: number, operation: "add" | "substract" | "multiply" | "divide") => {
    if (operation == "add") return a+b

    if (operation == "substract") return a-b

    if (operation == "multiply") return a*b

    if (operation == "divide") {
        if (b == 0) return "Cannot divide by 0"
        return a/b
    }
}

console.log(calculator(3, 4, "divide"))