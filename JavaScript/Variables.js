function CambiarTexto() {
	/*Cambiar el texto de un elemento con id 
	= "Resultado del documento HTML"
	*/
	var miParrafo;

	miParrafo = document.getElementById('Resultado');
	for (var i = 0; i <= 1000; i++) {
	miParrafo.innerHTML += "Tu madre es un texto" /*+"<br>"+"Hola que aze"+"<br>"*/
		}
}