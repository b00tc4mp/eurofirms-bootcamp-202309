# API

## Installation

```sh
$ npm i
```

## Boot

```sh
$ npm start
```

## Endpoints

#### Register a user

```
Request: POST /users {name, email, password}
Response: 201
```

Examples:

```sh
$ curl -H 'Content-Type: application/json' -d '{ "name": "Eevee Darling", "email": "eevee@darling.com", "password": "123" }' localhost:4000/users -v
```

// TODO



