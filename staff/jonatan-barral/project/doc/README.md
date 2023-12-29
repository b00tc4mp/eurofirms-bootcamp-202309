# Sand Makers

## Intro

Sand Makers es una aplicación diseñada para abordar los desafíos que enfrentan las secretarías de concursos de Doma Clásica en competiciones territoriales. Desarrollada por un apasionado del deporte ecuestre con más de 25 años de experiencia en la disciplina, la aplicación ha sido creada para simplificar y mejorar la organización de eventos en la región.

## Descripción funcional

El comité organizador contratará los servicios de la app y se le proporcionarán unas credenciales de acceso.
Una vez logueados, los comités podrán seleccionar desde un mínimo de 2 hasta un máximo de 8 perfiles distintos, a saber:
Secretaría, juez C, y hasta un máximo de 6 jueces adicionales.
El perfil de secretaría será el encargado de inscribir a los participantes ordenándolos de la siguiente forma:
Tipo de competición, disciplina, categoría y prueba a realizar. 

Los jueces introducirán las notas y comentarios necesariosy los enviarán al servidor en cuanto termine cada una de las pruebas.
Una vez enviadas, la propia app debería sumar todas las notas, multiplicarlas por el coheficiente y optener la media porcentual de cada juez.
Sumará las notas porcentuales de los jueces y las dibidirá entre el número de jueces para optener la clasificación final.

La propia app debería devolver un pdf con el formato de repris que se entregará, bien en papel o bien por correo electrónico a cada jinete.


## Tipos de usuarios y funciones

###Administrador

- Crear eventos
- Proporcionar credenciales de acceso a los comités organizadores
- Restringir el acceso una vez terminado el tiempo de contratación

### Secretaría

- Inscribir jinetes/amazonas en el evento
- Revisar y corregir las puntuaciones de los jueces 
- Crear actas 
 - Enviar o imprimir hojas de puntuación

### Jueces

- Introducir su nombre
- Seleccionar el jinete a juzgar
- Valorar y comentar ejercicios.
- Confirmar notas

### Juez C (presidente de la prueba)

- Introducir su nombre
- Seleccionar el jinete a juzgar
- Valorar y comentar ejercicios.
- Marcar errores 
- Eliminar
- Confirmar notas


## Descripción técnica
### Modelo de datos

#### User

- id (string, unique, required)
- name (string, required)
- username (string, unique, required)
- password (string, required)
- role (string, admin|secretary|judge)
- active (boolean)

#### Event

- id (string, unique, required)
- date (string, required)
- organizer (User.id, required)
- judges ([User.id])
- president (User.id)
- competitors ([Competitor.id])
- location (string, required)
        
#### Competitor 

- id (string, unique, required)
- fullName (string, required)
- license (string )
- horseName(string, required)
- horseLicense (string)
- trialType (string, official|open, required)
- discipline (string, dressage|paralympic )
- dressagelevel (string, 0|1|2|3|4|San Jorge|Intermedia 1|Intermedia 2|Intermedia AB|Gran Premio)
- dressageCategory (string, ap|benjamin|alevin|... )
- dressageRepriseType (string, team|individual|kür )
- paralympicGrade (string, 1-6|6a|6b)
- paralympicRepriseType (string, novel|intermediate|GP)
- valuation ([Valuation.id])

#### Exercises

- mark (number, required)
- coment (string)
- coefficient (number 1|2|3|4, )

#### Valuation

- id (string, unique, required)
- judge (User.id, required)
- exercises ([exercises])

- finalMark (sum mark * coefficient)