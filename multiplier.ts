// Especificamos el tipo de una variable usando : si esto no se especifica el tipo es any y puede ser cualquier cosa
const multiply = (a: number, b: number) => a * b

// Debemos definir esta función porque dado que typescript no hace el checkeo en runtime es posible que pasemos argumentos que no son esperados por la función, por ejemplo intentar multiplicar 3 + "hola mundo" o 3 * 4 * 6
const parseArguments = (args:Array<number|string>):Array<number> => {
    if (!(args.length === 4)) throw new Error("Wrong number of arguments")
    const firstNumber: number = Number(process.argv[2])
    const secondNumber: number = Number(process.argv[3])
    if(!isNaN(firstNumber) && !isNaN(secondNumber)) return [firstNumber, secondNumber]
    throw new Error("Wrong type of arguments")
}

// Podemos obtener los argumentos del arreglo de la línea de comandos. El primer argumento de este arreglo es el ejecutor, el siguiente el path de archivo y los que siguen los argumentos que pasamos por línea de comandos.
const cleanArguments = parseArguments(process.argv)

const a: number = cleanArguments[0]
const b: number = cleanArguments[1]

console.log(multiply(a, b))