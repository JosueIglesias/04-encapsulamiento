import FechaNacimiento from "./fecha-nacimiento.js"
import Persona from "./persona.js"
import Nombre from "./nombre.js"
import Estudiante from "./estudiante.js"
import Maestro from "./maestro.js"
import Grupo from "./grupo.js"

class Main {

    constructor() {
        this.fecha = new FechaNacimiento(3, 3, 2005)
    }

    testEstudiante(){
        console.log("----------Estudiante----------")
        let e = new Estudiante(
            new Nombre("Josue Benjamin", "Iglesias", "Alcaraz"),
            new FechaNacimiento(26, 4, 2001),
            "masculino",
            20166483,
            "jiglesias3@ucol.mx",
            "Facultad de Telemática")
        e.getPerfilEstudiante()
        e.print()
    }

    testMaestro(){
        console.log("----------Maestro----------")
        let maestro1 = new Maestro(
            new Nombre("Luis Alfonso", "Robles", "Robles"),
            new FechaNacimiento(23, 5, 1990),
            "masculino",
            5000,
            455038,
            "Tiempo completo")
        maestro1.print()
    }
    
    testGrupo(){
        console.log("----------Grupo----------")
        let e1 = new Estudiante(
            new Nombre("Josue Benjamin", "Iglesias", "Alcaraz"),
            new FechaNacimiento(26, 4, 2001),
            "masculino",
            20166483,
            "jiglesias3@ucol.mx",
            "Facultad de Telemática")

        let e2 = new Estudiante(
            new Nombre("Jusuu Benjamonki", "uglusuus", "ulcuruz"),
            new FechaNacimiento(4, 4, 2004),
            "masculino",
            444444,
            "4rp4@ucol.mx",
            "Facultad de Ingeniería Civil")

        let e3 = new Estudiante(
            new Nombre("Jusuu Benjamonki", "uglusuus", "ulcuruz"),
            new FechaNacimiento(4, 4, 2004),
            "masculino",
            444444,
            "4rp4@ucol.mx",
            "Facultad de Ingeniería Civil")
            

            let grupo = new Grupo(1, "G")
            console.log(grupo.registrar(e1))
            console.log(grupo.registrar(e1))
            console.log(grupo.registrar(e1))
            console.log(grupo.registrar(e2))
            console.log(grupo.registrar(e3))

            grupo.listarEstudiantes()
            console.log(grupo._encontrarEstudiante(e1))
            console.log(grupo._encontrarEstudiante(e2))
    }

    testFechaNacimiento() {
        console.log("----------Fecha de nacimiento----------")
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
app.testEstudiante()
app.testMaestro()
app.testGrupo()
