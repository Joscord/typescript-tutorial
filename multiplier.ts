// Especificamos el tipo de una variable usando : si esto no se especifica el tipo es any y puede ser cualquier cosa
const multiply = (a: number, b: number) => a * b

// Podemos obtener los argumentos del arreglo de la línea de comandos. El primer argumento de este arreglo es el ejecutor, el siguiente el path de archivo y los que siguen los argumentos que pasamos por línea de comandos
const a: number = Number(process.argv[2])
const b: number = Number(process.argv[3])

console.log(multiply(a, b))