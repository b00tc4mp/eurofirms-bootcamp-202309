curl -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NTg0MWIyMzQ3NGM0YThhMTFiMDk4MDAiLCJpYXQiOjE3MDMxNjAwMjIsImV4cCI6MTcwMzE2MDA4Mn0.TpqBjwdQhxifXmDYizvzXmljSmIZ2DMje75Ilm_wBew' localhost:9000/users -v

# > GET /users HTTP/1.1
# > Host: localhost:4000
# > User-Agent: curl/8.1.2
# > Accept: */*
# > Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NTZkYjlmYThmZDZkNjU4MTkzZGMxNzYiLCJpYXQiOjE3MDI0NjU4MjN9.TybzUcO2lvt1Tsr2f30jS_ANzkCCAGvpcF_d-Bbb85M

# < HTTP/1.1 200 OK
# < X-Powered-By: Express
# < Content-Type: application/json; charset=utf-8
# < Content-Length: 24
# < ETag: W/"18-H6g05DrIMPvuastpiUDi8ccTKPo"
# < Date: Thu, 30 Nov 2023 09:45:01 GMT
# < Connection: keep-alive
# < Keep-Alive: timeout=5

# {"name":"Wendy Darling"}