import Persona from "./persona.js"
export default class Estudiante extends Persona {
    constructor(nombre, fechaNacimiento, genero, numeroCuenta, correo, escuela){
        super(nombre, fechaNacimiento, genero)
        this._numeroCuenta = numeroCuenta
        this._correo = correo
        this._escuela = escuela
    }

    getPerfilEstudiante(){
        console.log(this._numeroCuenta)
        console.log(this._nombre.getCompleto())
        console.log(this._genero)
    }

    print(){
        console.log(this._fechaNacimiento.getFormatoCorto())
        console.log(this._correo)
        console.log(this._escuela)
    }
}