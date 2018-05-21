function CalcularEtapa()
{
	var CampoEdad,
		ValorEdad,
		CampoResultado;

	CampoResultado = document.getElementById('Resultado');
	CampoEdad = document.getElementById('Edad');
	ValorEdad = parseInt(CampoEdad.value);

	switch(ValorEdad)
	{
		case 12:
			CampoResultado.innerHTML = "Infancia";
			break;
		case 13:
			CampoResultado.innerHTML = "Adolescencia";
			break;
		case 17:
			CampoResultado.innerHTML = "Juventud";
			break;
		case 23:
			CampoResultado.innerHTML = "Adulted";
			break;
	}


}