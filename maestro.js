import Persona from "./persona.js"

export default class Maestro extends Persona{
    constructor(nombre, fechaNacimiento, genero, sueldo, numTrabajador, tipoContrato){
        super (nombre, fechaNacimiento, genero)
        this._sueldo = sueldo
        this._numTrabajador = numTrabajador
        this._tipoContrato = tipoContrato
    }

    print() {
        console.log(this.getPerfil())
        console.log(this._sueldo)
        console.log(this._numTrabajador)
        console.log(this._tipoContrato)
    }
}