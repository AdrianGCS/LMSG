function CalcularEtapa()
{
	var CampoEdad,
		ValorEdad,
		CampoResultado;

	CampoResultado = document.getElementById('Resultado');
	CampoEdad = document.getElementById('Edad');
	
	ValorEdad = CampoEdad.value;

	if (ValorEdad>=23) CampoResultado.innerHTML = "Adulto";
		else if (ValorEdad>=17) CampoResultado.innerHTML = "Juventud";
			else if (ValorEdad>=13) CampoResultado.innerHTML = "Adolescencia";
				else CampoResultado.innerHTML = "Infancia";


}