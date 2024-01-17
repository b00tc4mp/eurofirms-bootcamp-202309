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
Request: POST /users/auth { username, passwoerd }
Response: 200 token
```

### Register a user

```
Request: POST /users { userId, name, username, password, role }
Response: 201
Response (error): 409|406|500 { error, message }
```

### Retrieve a user

```
Request: GET /users 'Authorization: Bearer token'
Response: 200 { name }
```

### Retrieve Secretaries

Request: GET /users 'Authorization: Bearer token'
Response: 200 { [Secretaries] }
```

