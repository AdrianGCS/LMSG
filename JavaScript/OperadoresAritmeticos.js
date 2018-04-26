function CalcularOperadores() {
	/*Realiza operaciones aritméticas con elementos 
	del documento HTML
	*/
	var miParrafo;
	var valor=0;

	miParrafo = document.getElementById('Resultado');
	valor =12+20;
	miParrafo.innerHTML += "Sumando los numeros 12 y 20 al valor de valor =" + valor + "<br>";
	valor =12-20;
	miParrafo.innerHTML += "Restamos los numeros 12 y 20 al valor de valor =" + valor + "<br>";
	valor =12*20;
	miParrafo.innerHTML += "Multiplicamos los numeros 12 y 20 al valor de valor =" + valor + "<br>";
	valor =12/20;
	miParrafo.innerHTML += "dividimos los numeros 12 y 20 al valor de valor =" + valor + "<br>";
	valor =8;
	miParrafo.innerHTML += "Sumando los numeros " + (valor++) + "<br>";
	valor =8;
	miParrafo.innerHTML += "Sumando los numeros " + (++valor) + "<br>";
	
	
}