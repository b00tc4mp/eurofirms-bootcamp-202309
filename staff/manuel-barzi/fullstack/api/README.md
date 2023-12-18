# API

## Installation

```sh
$ pnpm i
```

## Boot

```sh
$ pnpm start
```

## Endpoints

### Register a user

```
Request: POST /users { name, email, password }
Response: 201
```

### Authenticate a user

```
Request: POST /users/auth { email, password }
Response: 200 token
```

### Retrieve a user

```
Request: GET /users 'Authorization: Bearer token'
Response: 200 { name }
```

### Create a post

```
Request: POST /posts 'Authorization: Bearer token' { image, imageDescription, text }
Response: 201
```

### Retrieve posts

```
Request: GET /posts 'Authorization: Bearer token'
Response: 200 [{ id, author: { id, name }, image, imageDescription, text, likes }]
```

### Retrieve saved posts

```
Request: GET /posts/saved 'Authorization: Bearer token'
Response: 200 [{ id, author: { id, name }, image, imageDescription, text, likes }]
```

### Retrieve my posts

```
Request: GET /posts/mine 'Authorization: Bearer token'
Response: 200 [{ id, author: { id, name }, image, imageDescription, text, likes }]
```

### Toggle like post

```
Request: PATCH /posts/postId/likes 'Authorization: Bearer token'
Response: 204
```

### Toggle save post

```
Request: PATCH /posts/postId/saved 'Authorization: Bearer token'
Response: 204
```

### Delete post

```
Request: DELETE /posts/postId 'Authorization: Bearer token'
Response: 204
```

### Update user password

```
Request: PATCH /users/password { password, newPassword, repeatNewPassword } 'Authorization: Bearer token'
Response: 204
```