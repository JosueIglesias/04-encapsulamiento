const diaSemana = [
    "Domingo", 
    "Lunes", 
    "Martes", 
    "Miercoles", 
    "Jueves", 
    "Viernes", 
    "Sabado",
]

const nombreMes = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre"
]
export default class FechaNacimiento {
    /**
     * 
     * @param {number} dia valor del dia entre 1 y 31 
     * @param {*} mes valor del mes entre 1 y 12
     * @param {*} año año de la fecha de nacimiento
     */
    constructor(dia, mes, año){
        this._fecha = new Date (año, mes - 1 , dia)
       
    }

      /**
     * Metodo de acceso de lectura para el atributo fecha
     */

    getFecha(){
        return this._fecha
    }

    /**
     * 
     * @param {Date} fecha 
     */
    setFecha(fecha){
        if (fecha <= Date.now()){
            this._fecha = fecha
            return true
        }
        return false
    }
    

    getFormatoCorto(){
        return `${this._fecha.getDate()}/${this._fecha.getMonth()+1}/${this._fecha.getFullYear()}`
        
    }
    getFormatoExtendido(){
        let dia = diaSemana[this._fecha.getDay()]
        let mes = nombreMes[this._fecha.getMonth()]
        return `${dia} ${this._fecha.getDate()} de ${mes} ${this._fecha.getFullYear()}`
    }
    getEdad(){
        let difMSeg =Date.now() - this._fecha
        let mSegAño = 1000 * 60 * 60 * 24 * 365
        let edad = Math.trunc(difMSeg / mSegAño)
        return `Edad: ${edad}` 
    }
}