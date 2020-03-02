import FechaNacimiento from "./fecha-nacimiento.js"

class Main {

    constructor() {
        this.fecha = new FechaNacimiento(3, 3, 2005)
    }


    testFechaNacimiento() {
        //lectura del atributo fecha
        console.log(this.fecha.getFecha())

        //escritura del atributo fecha
        console.log(this.fecha.setFecha(new Date ( 2207, 5, 2)))
        console.log(this.fecha.getFormatoExtendido())

        console.log(this.fecha.setFecha(new Date ( 2007, 5, 2)))
        console.log(this.fecha.getFormatoExtendido())

        //Accceso a los metodos
        console.log(this.fecha.getFormatoCorto())
        console.log(this.fecha.getFormatoExtendido())
        console.log(this.fecha.getEdad())
    }
}

let app = new Main
app.testFechaNacimiento()