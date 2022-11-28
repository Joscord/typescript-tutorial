const operations = ["add", "substract", "multiply", "divide"]

const calculator = (a: number, b: number, operation: string) => {
    if (!operations.includes(operation)) {
        console.log("operation not defined")
    }

    if (operation == "add") return a*b

    if (operation == "substract") return a-b

    if (operation == "multiply") return a*b

    if (operation == "divide") {
        if (b == 0) return "Cannot divide by 0"
        return a/b
    }
}

calculator(3, 4, "add")