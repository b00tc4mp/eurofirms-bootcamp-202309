curl -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NTZkYjlmYThmZDZkNjU4MTkzZGMxNzYiLCJpYXQiOjE3MDI0NjU4MjN9.TybzUcO2lvt1Tsr2f30jS_ANzkCCAGvpcF_d-Bbb85M' localhost:4000/posts -v

# > GET /posts HTTP/1.1
# > Host: localhost:4000
# > User-Agent: curl/8.1.2
# > Accept: */*
# > Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NTZkYjlmYThmZDZkNjU4MTkzZGMxNzYiLCJpYXQiOjE3MDI0NjU4MjN9.TybzUcO2lvt1Tsr2f30jS_ANzkCCAGvpcF_d-Bbb85M

# < HTTP/1.1 200 OK
# < X-Powered-By: Express
# < Content-Type: application/json; charset=utf-8
# < Content-Length: 215
# < ETag: W/"d7-PRZmJ5Lq2PE/FsszvbsBF8gOBYI"
# < Date: Thu, 30 Nov 2023 11:10:02 GMT
# < Connection: keep-alive
# < Keep-Alive: timeout=5

# [{"author":{"name":"Wendy Darling","id":"65684bc8dc4ef0943016343d"},"image":"https://thispersondoesnotexist.com","imageDescription":"Unknown person","text":"Who is this?","likes":[],"id":"65686c275ef8e443ccc48336"}]