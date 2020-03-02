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
        this.fecha = new Date (año, mes - 1 , dia)
       
    }
    getFormatoCorto(){
        return `${this.fecha.getDate()}/${this.fecha.getMonth()+1}/${this.fecha.getFullYear()}`
        
    }
    getFormatoExtendido(){
        let dia = diaSemana[this.fecha.getDay()]
        let mes = nombreMes[this.fecha.getMonth()]
        return `${dia} ${this.fecha.getDate()} de ${mes} ${this.fecha.getFullYear()}`
    }
    getEdad(){
        let difMSeg =Date.now() - this.fecha
        let mSegAño = 1000 * 60 * 60 * 24 * 365
        let edad = Math.trunc(difMSeg / mSegAño)
        return `Edad: ${edad}` 
    }
}