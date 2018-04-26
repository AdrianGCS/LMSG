function ObternerDato1()
{
	var MiResultado;
	var MiDato;
	
	MiDato = document.getElementById('Dato1');
	MiResultado = document.getElementById('Resultado');
	MiResultado.innerHTML = 
		"El valor es " + MiDato.value;
	
}