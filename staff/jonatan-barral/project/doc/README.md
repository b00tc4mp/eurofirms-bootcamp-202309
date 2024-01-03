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

## Descripción Funcional

### Tipos de usuarios y funciones

#### Administrador

- Crear eventos
- Proporcionar credenciales de acceso a los comités organizadores
- Restringir el acceso una vez terminado el tiempo de contratación

#### Secretaría

- Inscribir jinetes/amazonas en el evento
- Revisar y corregir las puntuaciones de los jueces 
- Crear actas 
 - Enviar o imprimir hojas de puntuación

#### Jueces

- Introducir su nombre
- Seleccionar el jinete a juzgar
- Valorar y comentar ejercicios.
- Confirmar notas

#### Juez C (presidente de la prueba)

- Introducir su nombre
- Indicar el punto desde el que está juzgando
- Seleccionar el jinete a juzgar
- Valorar y comentar ejercicios.
- Marcar errores 
- Eliminar
- Confirmar notas

#### Funcionalidades

TODO

## Descripción técnica

### Modelo de datos

#### User

- id (string, unique, required)
- name (string, required)
- username (string, unique, required)
- password (string, required)
- role (string, admin|secretary|judge)
- active (boolean)

#### Competition

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

#### Horse

- id (string, unique, required)
- horseName(string, required)
- horseLicense (string)

#### Test

- id (string, unique, required)
- competition (Competition.id)
- trial (string, official|open, required)
- level (string, Nivel 0 | Nivel 1 | Nivel 2 | Nivel 3 | Nivel 4 | San Jorge | Intermedia 1 | Intermedia 2 | Intermedia A-B | Gran Premio | Paralimpica)
- reprise (Reprise.id)

#### Reprise

- id (string, required, unique)
- type (string, AP Final|AP Preliminar|Benjamines 1|Benjamines 2|4 años experimental|4 años preliminar|4 años final|Alevines equipos|Alevines individual|Alevines preliminar|Promoción 1|Rider 1A|Rider 1B|Rider 1C|5 años final|5 años preliminar|Infantiles Equipos|Infantiles Individual|Infantiles Preliminar A|Infantiles Preliminar B|Promoción 2|Rider 2A|Rider 2B|Rider 2C|Juveniles 0 Equipos|Juveniles 0 Individual|Juveniles 0 Preliminar|Kur Juveniles 0|Promoción 3|Rider 3A|rider 3B|Rider 3C|Rider 3D|Ponis Equipos|Ponis Individual|Kur Ponis|Ponis Preliminar|6 Años Final|6 Años Preliminar|Clásica 1|Clásica 2|Clásica 3|Juveniles Individual|Juveniles Preliminar|Juveniles Equipos|Kur Juveniles|Promoción 4|Jóvenes Jinetes Equipos|Jóvenes Jinetes Individual|Jóvenes Jinetes Preliminar|Kur Jóvenes Jinetes|Preliminar Caballos 7 Años|Final Caballos Jóvenes|San Jorge|Intermedia I|Kur Intermedia I|Intermedia II|Intermedia A|Intermedia B|Kur Intermedia A-B|Gran Premio Caballos Jóvenes J 8|Gran Premio Especial|Gran Premio U25|Gran Premio|Kur Gran Premio | Grado I Novel A|Grado I Novel B|Grado I Intermedia A|Grado I Intermedia B|Grado I Gran Premio A|Grado I Gran Premio B|Grado I Kür Gran Premio|Grado II Novel A|Grado II Novel B|Grado II Intermedia A|Grado II Intermedia B|Grado II Gran Premio A|Grado II Gran Premio B|Grado II Kür Gran Premio|Grado III Novel A|Grado III Novel B|Grado III Intermedia A|Grado III Intermedia B|Grado III Gran Premio A|Grado III Gran Premio B|Grado III Kür Gran Premio|Grado IV Novel A|Grado IV Novel B|Grado IV Intermedia A|Grado IV Intermedia B|Grado IV Gran Premio A|Grado IV Gran Premio B|Grado IV Kür Gran Premio|Grado V Novel A|Grado V Novel B|Grado V Intermedia A|Grado V Intermedia B|Grado V Gran Premio A|Grado V Gran Premio B|Grado V Kür Gran Premio|Grado VI-A Novel A|Grado VI-A novel B|Grado VI-A Intermedia A|Grado VI-A Intermedia B|Grado VI-A Gran Premio A|Grado VI-A Gran Premio B|Grado VI-A Kür Gran Premio|Grado VI-B Novel A|Grado VI-B novel B|Grado VI-B Intermedia A|Grado VI-B Intermedia B|Grado VI-B Gran Premio A|Grado VI-B Gran Premio B|Grado VI-B Kür Gran Premio)
- exercises ([Exercise.id, required])
- total Exercices (number, required)
- collectiveMarks ([collectiveMark.id], required)
- totalRepris (number, required)

#### Exercise

- id (string, unique, required)
- order (number, 1-N)
- letters (string, required)
- movements (string, required)
- coefficient (number 1|2|3|4|5|6|7|8|9|10, required)
- directives (string, required)

#### CollectiveMark

- id (string, required)
- directives (string, required)
- coefficient (number 1|2|3|4, required)

#### Valuation

- id (string, unique, required)
- competition (Competition.id, rquired)
- judge (User.id, required)
- competitor (Competitor.id, required)
- horse (Horse.id, required)
- exercise (Exercise.id)
- collectiveMark (CollectiveMark.Id)
- mark (number, required)
- comment (string)
- generalRemarks (string)
