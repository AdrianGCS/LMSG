
CREATE DATABASE ejercicio1;
USE ejercicio1;
CREATE TABLE Clientes
	(DNI VARCHAR(9),
	Nombre VARCHAR,
	Apellido VARCHAR,
	Teléfono int(9),
	Email VARCHAR,
	PRIMARY KEY (DNI));

CREATE TABLE Tiendas 
	(Nombre VARCHAR,
	Provincia ENUM('La coruña','Lugo,Madrid','Navarra','Cantabria'),
	Dirección VARCHAR,
	Teléfono INT (9),
	DíaApertura DATE NOT NULL,
	DíaCierre DATE NOT NULL,
	HoraApertura TIME NOT NULL,
	HoraCierre TIME NOT NULL,
	PRIMARY KEY(Nombre));

CREATE TABLE Operadoras(
	Nombre VARCHAR,
	ColorLogo ENUM('Rojo','Verde','Azul','Amarillo','Negro'),
	PorcentajeCobertura ,
	FrecuenciaGSM ENUM('GSM850','P-GSM900','E-GSM900','R-GSM900','GSM1800','GSM1900)'),
	PaginaWeb(VARCHAR),
	PRIMARY KEY (Nombre),
);

CREATE TABLE Tarifas(
	Nombre VARCHAR,
	Nombre_OPERADORAS VARCHAR,
	TamañoDatos INT,
	TipoDatos VARCHAR,
	MinutosGratis ('Si', 'No'),
	FOREIGN KEY (Nombre_OPERADORAS) REFERENCES Operadoras(Nombre),
	PRIMARY KEY (Nombre,Nombre_OPERADORAS)
	);
CREATE TABLE Moviles(Marca varchar,
	Modelos VARCHAR,
	Descripcion text, 
	SO ENUM('windows', 'otros'),
	Ram VARCHAR, 
	PulgadasPantalla double ,
	CamaraMpx int,
	PRIMARY KEY (MARCA, MODELO));
CREATE TABLE Movil_Libre(MARCA_MOVILES varchar, Modelo_Moviles varchar, precio int,
FOREIGN KEY (MARCA_MOVILES, Modelo_Moviles) REFERENCES Moviles(Marca,Modelos
,PRIMARY KEY (Modelo_Moviles)
);

CREATE TABLE Movil Contrato(MARCA_MOVILES varchar, Modelo_Moviles varchar, Nombre_OPERADORAS varchar, precio int,
FOREIGN KEY (MARCA_MOVILES, Modelo_Moviles) REFERENCES Moviles(Marca,Modelos)
FOREING KEY (Nombre_OPERADORAS) REFERENCES Operadora(Nombre)
,PRIMARY KEY (Modelo_Moviles, MARCA_MOVILES, Nombre_OPERADORAS)
);

CREATE TABLE OFERTAS(Nombre_OPERADORAS_TARIFAS varchar,
	Nombre_TARIFAS varchar, MARCA_MOVIL_CONTRATO varchar
	MODELO_MOVIL_CONTRATO VARCHAR,
	FOREIGN KEY (MARCA_MOVIL_CONTRATO, MODELO_MOVIL_CONTRATO) REFERENCES Movil_Contrato(MARCA_MOVILES,Modelo_Moviles)
	FOREING KEY (Nombre_OPERADORAS_TARIFAS , Nombre_TARIFAS) REFERENCES Operadora(Nombre_OPERADORAS,Nombre), PRIMARY KEY (Nombre_TARIFAS, Marca_MOVIL_CONTRATO, Modelo_MOVIL_CONTRATO);

CREATE TABLE COMPRAS ( DNI_Cliente varchar(9), Nombre_Tienda varchar , Marca_MOVILES_LIBRES  varchar, Modelo_MOVILES_LIBRES varchar, Dia DATE, 
FOREIGN KEY 


prace
date
formule
propis
