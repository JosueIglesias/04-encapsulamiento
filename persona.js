export default class Persona {
    constructor(genero, fechaNacimiento, nombre){
        this._genero = genero 
        this._fechaNacimiento = fechaNacimiento
        this._nombre = nombre 
    }

    getPerfil(){
        return `${this._genero} ${this._fechaNacimiento} ${this._nombre}`
    }
}