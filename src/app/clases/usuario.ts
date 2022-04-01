export class Usuario {
    nombre:string;
    clave: string;
    edad: number;

    constructor(nombre: string, clave:string, edad:number){
        this.nombre = nombre;
        this.clave = clave;
        this.edad = edad;
    }
}