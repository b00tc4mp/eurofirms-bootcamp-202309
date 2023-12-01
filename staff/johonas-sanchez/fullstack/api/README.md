# API

## Endpoints

#### Register a user

```
Request: POST /users { name, email, password }
Response: 201
```

Examples:

```sh
$ curl -H 'Content-Type: application/json' -d '{ "name": "Wendy Darling", "email": "wendy@darling.com", "password": "123123123" }' -X POST localhost:4000/users -i

HTTP/1.1 201 Created
X-Powered-By: Express
Date: Wed, 29 Nov 2023 12:16:41 GMT
Connection: keep-alive
Keep-Alive: timeout=5
Content-Length: 0
```

```sh
$ curl -H 'Content-Type: application/json' -d '{ "name": "Peter Pan", "email": "peter@pan.com", "password": "123123123" }' -X POST localhost:4000/users -i 

HTTP/1.1 201 Created
X-Powered-By: Express
Date: Wed, 29 Nov 2023 12:16:57 GMT
Connection: keep-alive
Keep-Alive: timeout=5
Content-Length: 0
```

#### Authenticate a user

```
Request: POST /users/auth { email, password }
Response: 200 { userId: '65672ba9655f6f69eed56fd5' }
```

Examples:

TODO create curl calls examples

#### Update UserPassword

````
Request: PATCH /users/password {userId, password, newPassword, repeatNewPassword}
Response: updated password

Examples:

```sh
$ curl -H 'Authorization: Bearer 656743c48dbd4d9b3e300c56' -H 'Content-Type: application/json' -d '{ "password": "456456456", "newPassword": "123123123", "repeatNewPassword": "123123123" }' -X PATCH localhost:4000/users/password -v

HTTP/1.1 201 Created
X-Powered-By: Express
Date: Wed, 29 Nov 2023 12:16:41 GMT
Connection: keep-alive
Keep-Alive: timeout=5
Content-Length: 0
```

#### Update UserEmail

````
Request: PATCH /users/email {userId, email, newEmail, repeatNewEmail}
Response: updated email

Examples:

```sh
$ curl -H 'Authorization: Bearer 656743c48dbd4d9b3e300c56' -H 'Content-Type: application/json' -d '{ "password": "123123123", "email": "peter3@pan.com", "newEmail": "peter@pan.com", "repeatNewEmail": "peter@pan.com" }' -X PATCH localhost:4000/users/email -v

> PATCH /users/email HTTP/1.1
> Host: localhost:4000
> User-Agent: curl/8.1.2
> Accept: */*
> Authorization: Bearer 656743c48dbd4d9b3e300c56
> Content-Type: application/json
> Content-Length: 118
> 
< HTTP/1.1 204 No Content
< X-Powered-By: Express
< Date: Fri, 01 Dec 2023 16:15:12 GMT
< Connection: keep-alive
< Keep-Alive: timeout=5
< 

```


