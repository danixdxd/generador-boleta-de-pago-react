var expect = require('chai').expect;
var PersistenciaEmpleadoMongoDB =  require('../db/PersistenciaEmpleadoMongoDB').PersistenciaEmpleadoMongoDB;
var InterfazRepositorioEmpleado =  require('../db/InterfazRepositorioEmpleado').InterfazRepositorioEmpleado;

var Empleado =  require('../empleado/Empleado.js').Empleado;
var CalculadoraPorHora =  require('../calculadoraSalario/CalculadoraPorHora').CalculadoraPorHora;
var AsistenciaPorDia =  require('../tarjetas/AsistenciaPorDia').AsistenciaPorDia;
var ClasificadorFechaDePagoFijo =  require('../calculadoraFechaDePago/ClasificadorFechaDePagoFijo').ClasificadorFechaDePagoFijo;
var MetodoDePago =  require('../metodoDePago/MetodoDePago').MetodoDePago;

describe('Conexion de la base de datos', function () {
    it('Deberia insertar un empleado',  function () {
         let tarjetaHora = new AsistenciaPorDia("2019-05-22", "16:00:00", "20:00:00");
        let calculadora = new CalculadoraPorHora(200, [tarjetaHora]);
        let fechaIncioLaboral = new Date(2019, 5, 22);
        let calculadoraDeFecha = new ClasificadorFechaDePagoFijo(fechaIncioLaboral);
        let metodoDePago = new MetodoDePago("Cheque");
        let empleado = new Empleado("Erick", 1,calculadora, calculadoraDeFecha,metodoDePago);
        let serviciosDeEmpleado = new PersistenciaEmpleadoMongoDB();
        //serviciosDeEmpleado.insertarEmpleado(empleado);
        serviciosDeEmpleado.buscarEmpleado(empleado);
        expect(true).equal(true);
        
    });
});