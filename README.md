# Practica00-Consumo-de-APIs-en-la-nube-
Practica 1 Plataformas Web 
1.	Identificar gráficamente la arquitectura y el patrón de diseño de la aplicación a desarrollar.
En la presente practica se utiliza la arquitectura y patrón:
Arquitectura: Cliente/Servidor 

![image](https://user-images.githubusercontent.com/52221275/97601121-d3fa6e80-19d7-11eb-930f-2047a9f7a943.png)

Funcionamiento

![image](https://user-images.githubusercontent.com/52221275/97601228-f7251e00-19d7-11eb-9be9-6c942b3cdd1a.png)

Patron  MVC (Modelo, Vista  Controlador)
Modelo=Archivo HTML
Vista= Archivo CSS
Controlador= Archivo JavaScript

2.	Generar una llave para consumir los servicios web de la API (opcional, depende de la API seleccionada).
API: The Cocktail Db 
Key: 1
Referencia: https://www.thecocktaildb.com/

3.	Crear un repositorio en GitHub con el nombre “Practica00 – Consumo de APIs en la nube”
![image](https://user-images.githubusercontent.com/52221275/97601350-12902900-19d8-11eb-8982-89602f3a5121.png)
User: DianaTixi
URL: https://github.com/DianaTixi/Practica00-Consumo-de-APIs-en-la-nube.git

4. Desarrollar una aplicación con HTML + CSS + Javascript + Web Services para buscar información y visualizar
toda la información disponible a través de la API.

Para el desarrollo se utilizó una plantilla de Bootstrap en la cual se modificó para acoplar con la elaboración de la practica a elaborar 
-	HTML (Estructura)
![image](https://user-images.githubusercontent.com/52221275/97601413-23d93580-19d8-11eb-9a16-6877b6978d66.png)

![image](https://user-images.githubusercontent.com/52221275/97601469-33f11500-19d8-11eb-8c78-f8f6d5129ed4.png)

![image](https://user-images.githubusercontent.com/52221275/97601516-41a69a80-19d8-11eb-819c-f116678ff572.png)


-	JavaScript (Estructura)
En la siguiente grafica se presenta el método de obtención de datos
1.	Guardar en una variable el parámetro para la búsqueda
2.	Creamos una variable para guardar el url de la API concatenada con el parámetro que es en este caso el nombre
3.	Se crea un objeto XMLHttpRequest, para que abra la URL y envíe la solicitud
4.	Se crea una condición para saber si se ha recibido la información, si se obtuvo la información se almacena en una variable.
5.	Se obtiene la lista de objetos

![image](https://user-images.githubusercontent.com/52221275/97601712-76b2ed00-19d8-11eb-99b8-b11e5d0fa623.png)

-	Función para crear la paginación 
![image](https://user-images.githubusercontent.com/52221275/97601786-8cc0ad80-19d8-11eb-9272-83979e872d8d.png)

![image](https://user-images.githubusercontent.com/52221275/97601839-9c3ff680-19d8-11eb-9ed2-ecc9e95c9351.png)

![image](https://user-images.githubusercontent.com/52221275/97601931-b679d480-19d8-11eb-950e-0bdac182c3c1.png)

-	CSS (Estructura) 
Dado que se utilizó una plantilla el archivo CSS tenia incorporado, pero se realizó algunos cambios para adaptar a nuestras necesidades 

! [imagen] (https://user-images.githubusercontent.com/52221275/97601983-c691b400-19d8-11eb-8f8c-71b41d970089.png)

6.	Realizar varios commits en la herramienta GitHub que demuestren el desarrollo de la aplicación

![image](https://user-images.githubusercontent.com/52221275/97602271-1b352f00-19d9-11eb-960d-910e88425181.png)

RESULTADO(S) OBTENIDO(S):
•	Identifica las diferentes arquitecturas Web para el desarrollo de aplicaciones.

CONCLUSIONES:
•	Los estudiantes podrán identificar arquitecturas web utilizando servicios en la nube. Así como también, podrán consumir APIs y manipular objetos JSON.

RECOMENDACIONES:
•	Aplicar conceptos de interacción humano máquina para el desarrollo de la GUI.


FIRMA

![image](https://user-images.githubusercontent.com/52221275/97602601-7f57f300-19d9-11eb-9651-2c3cd10c9a48.png)




