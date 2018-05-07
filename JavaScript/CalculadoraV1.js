function ObternerDato1()
{
	var MiResultado;
	var MiDato1;
	var MiDato2;
	var Resultados;
	var Operacion;
	
	MiDato1 = document.getElementById('Dato1');
	MiDato2 = document.getElementById('Dato2');
	MiResultado = document.getElementById('Resultado');
	Operacion = document.getElementById('Operacion');

	if (Operacion.value == "Multiplicacion"){

		MiResultado.innerHTML ="El resultado es " + MiDato1.value*MiDato2.value ;
	}
	if (Operacion.value == "Division"){

		MiResultado.innerHTML ="El resultado es " + MiDato1.value/MiDato2.value ;
	}
	if (Operacion.value == "Suma"){
		Resultados = parseint(MiDato1.value) + parseint(MiDato2.value);
		MiResultado.innerHTML ="El resultado es " + Resultados.value;
	}
	
}