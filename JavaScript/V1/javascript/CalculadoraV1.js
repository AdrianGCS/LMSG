


function ObtenerOperando(idOperando) 
{
	var miOperando;

	miOperando = document.getElementById(idOperando);
	return parseInt(miOperando.value);
}
function RealizaOperacion(tipoOperacion)
{
	var MiResultado = document.getElementById(Resultado)
	var Operando1 = ObtenerOperando(Operando1);
	var Operando2 = ObtenerOperando(Operando2);
	MiResultado.innerHTML = "El Resultado es " +Operando1 +tipoOperacion +Operando2 ;
}
function Operacion (){


	RealizaOperacion
}