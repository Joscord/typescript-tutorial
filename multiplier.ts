// Especificamos el tipo de una variable usando : si esto no se especifica el tipo es any y puede ser cualquier cosa
const multiply = (a: number, b: number) => a * b

// La función puede sólo aceptar argumentos que sean de tipo number sino dará error
console.log(multiply(5, 3))


