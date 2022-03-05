// funcion constructora de Consultorio
function Consultorio() {
    this._nombre = ''
    this._pacientes = [];
}

// Prototype para buscar pacientes
Consultorio.prototype.buscarPaciente = function (nPaciente) {
    const encontradoP = this._pacientes.find((paciente) => {
        if (nPaciente === paciente.getNombre()) {
            return true
        } else {
            return false
        }
    })
    console.log(encontradoP)
}
// Prototype con listado de paciente
Consultorio.prototype.listadoPaciente = function () {
    this._pacientes.forEach(p => {
        console.log(`El paciente es ${p._nombre}, edad: ${p._edad}, rut:${p._rut}, diagnostico ${p.diagnostico}`)
    })
}

Consultorio.prototype.setNombre = function (nombre) {
    this._nombre = nombre;
};

Consultorio.prototype.getNombre = function () {
    return this._nombre;
};

Consultorio.prototype.setPacientes = function (pacientes) {
    this._pacientes = pacientes;
};
Consultorio.prototype.getPacientes = function () {
    return this._pacientes;
};
// Prototype para agregar paciente con metodo push
Consultorio.prototype.agregarPaciente = function (paciente) {
    this._pacientes.push(paciente);
};

// funcion constructora de datos del paciente

function Paciente() {
    this._nombre = '';
    this._edad = '';
    this._rut = '';
    this._diagnostico = '';
}

// set y get de elementos de paciente
Paciente.prototype.setNombre = function (nombre) {
    this._nombre = nombre;
};
Paciente.prototype.getNombre = function () {
    return this._nombre;
};

Paciente.prototype.setEdad = function (edad) {
    this._edad = edad;
};
Paciente.prototype.getEdad = function () {
    return this._edad;
};

Paciente.prototype.setRut = function (rut) {
    this._rut = rut;
};
Paciente.prototype.getRut = function () {
    return this._rut;
};

Paciente.prototype.setDiagnostico = function (diagnostico) {
    this._diagnostico = diagnostico;
};
Paciente.prototype.getDiagnostico = function () {
    return this._diagnostico;
};

const consultorio = new Consultorio()
// set de nombre de consultorio
consultorio.setNombre('Dr. juanito')
// otorgar datos a pacientes
const paciente1 = new Paciente()
paciente1.setNombre('Guillermo Urra')
paciente1.setEdad('39')
paciente1.setRut('15.461.632-2')
paciente1.setDiagnostico('covid')

const paciente2 = new Paciente()
paciente2.setNombre('Melanie Pardo')
paciente2.setEdad('29')
paciente2.setRut('18.006.494-k')
paciente2.setDiagnostico('gripe')

const paciente3 = new Paciente()
paciente3.setNombre('Katherine Flores')
paciente3.setEdad('39')
paciente3.setRut('19.461.642-1')
paciente3.setDiagnostico('hipertensa')

// agregar paciente en consultorio
consultorio.agregarPaciente(paciente1)
consultorio.agregarPaciente(paciente2)
consultorio.agregarPaciente(paciente3)

// mostrar resultados
consultorio.buscarPaciente('Melanie Pardo')
consultorio.listadoPaciente()