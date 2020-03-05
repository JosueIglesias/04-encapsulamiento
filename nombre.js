export default class Nombre {
    constructor(nombre, apellidoPat, apellidoMat){
        this._nombre = nombre.toUpperCase()
        this._apellidoPat = apellidoPat.toUpperCase()
        this._apellidoMat = apellidoMat.toUpperCase()
    }

    getNombre(){
        return this._nombre
    }

    setApellidoPaterno(apellido){
        this._apellidoPat = apellido.toUpperCase()
    }

    getApellidoMaterno(){
        return this._apellidoMat
    }

    setApellidoMaterno(apellido){
        this._apellidoMat = apellido.toUpperCase()
    }

    getCompleto() {
        return `${this._nombre} ${this._apellidoPat} ${this._apellidoMat}` 
    }

    getInvertido(){
        return `${this._apellidoPat} ${this._apellidoMat} ${this._nombre}` 
    }

    getIniciales() {
        return `${this._nombre[0]}${this._apellidoPat[0]}${this._apellidoMat[0]}`
    }

}