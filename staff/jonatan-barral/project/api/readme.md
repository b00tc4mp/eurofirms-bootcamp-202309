# API

## Install dependencies

```sh
$ npm i
```

## Run the API

```sh
$ npm start
```

## Endpoints

### Authenticate a user

```
Request: POST /users/auth { email, password }
Response: 200 token
```

### Register a user

```
Request: POST /users { name, email, password }
Response: 201
Response (error): 409|406|500 { error, message }
```
