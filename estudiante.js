export default class Estudiante extends Persona {
    constructor(numeroCuenta, correo, escuela){
        this._numeroCuenta = numeroCuenta
        this._correo = correo
        this._escuela = escuela
    }
    print(){
        console.log(this._numeroCuenta)
        console.log(this._correo)
        console.log(this._correo)
    }
}