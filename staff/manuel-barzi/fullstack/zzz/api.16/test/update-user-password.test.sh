curl -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NTZkYjlmYThmZDZkNjU4MTkzZGMxNzYiLCJpYXQiOjE3MDI0NjU4MjN9.TybzUcO2lvt1Tsr2f30jS_ANzkCCAGvpcF_d-Bbb85M' -H 'Content-Type: application/json' -d '{ "password": "123123123", "newPassword": "456456456", "repeatNewPassword": "456456456" }' -X PATCH localhost:4000/users/password -v

# > PATCH /users/password HTTP/1.1
# > Host: localhost:4000
# > User-Agent: curl/8.1.2
# > Accept: */*
# > Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NTZkYjlmYThmZDZkNjU4MTkzZGMxNzYiLCJpYXQiOjE3MDI0NjU4MjN9.TybzUcO2lvt1Tsr2f30jS_ANzkCCAGvpcF_d-Bbb85M
# > Content-Type: application/json
# > Content-Length: 89

# < HTTP/1.1 204 No Content
# < X-Powered-By: Express
# < Date: Mon, 04 Dec 2023 10:53:07 GMT
# < Connection: keep-alive
# < Keep-Alive: timeout=5