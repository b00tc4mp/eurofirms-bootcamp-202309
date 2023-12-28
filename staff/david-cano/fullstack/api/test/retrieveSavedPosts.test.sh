curl -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NTZkYjlmYThmZDZkNjU4MTkzZGMxNzYiLCJpYXQiOjE3MDI0NjU4MjN9.TybzUcO2lvt1Tsr2f30jS_ANzkCCAGvpcF_d-Bbb85M' localhost:4000/posts/saved -v

# > GET /posts/saved HTTP/1.1
# > Host: localhost:4000
# > User-Agent: curl/8.1.2
# > Accept: */*
# > Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NTZkYjlmYThmZDZkNjU4MTkzZGMxNzYiLCJpYXQiOjE3MDI0NjU4MjN9.TybzUcO2lvt1Tsr2f30jS_ANzkCCAGvpcF_d-Bbb85M

# < HTTP/1.1 200 OK
# < X-Powered-By: Express
# < Access-Control-Allow-Origin: *
# < Access-Control-Allow-Methods: *
# < Access-Control-Allow-Headers: *
# < Content-Type: application/json; charset=utf-8
# < Content-Length: 930
# < ETag: W/"3a2-kdM6M48vIi1zRcdFmRpTew+Vm48"
# < Date: Mon, 11 Dec 2023 11:47:30 GMT
# < Connection: keep-alive
# < Keep-Alive: timeout=5

# [{"author":{"name":"Mar Mota","id":"656db3fad816cd234ffab874"},"image":"https://wallpapers.com/images/hd/cute-minion-happy-bob-v1x9tfcn0rznkvvd.jpg","imageDescription":"minion image","text":"hello minion","likes":[],"id":"656ef24d673674120e518540","liked":false,"saved":true},{"author":{"name":"Peter Pan","id":"65684c87dc4ef0943016343f"},"image":"https://ichef.bbci.co.uk/news/640/amz/worldservice/live/assets/images/2014/09/29/140929092057_mafalda_promo_624x351_joaquins.lavadoquino.jpg","imageDescription":"pedro image","text":"hola pedro!","likes":[],"id":"6571b4fb8d231365bd5e62d7","liked":false,"saved":true},{"author":{"name":"Peter Pan","id":"65684c87dc4ef0943016343f"},"image":"https://upload.wikimedia.org/wikipedia/en/thumb/5/53/Scooby-Doo.png/150px-Scooby-Doo.png","imageDescription":"scooby image","text":"hello scooby!","likes":["65684c87dc4ef0943016343f"],"id":"6571b5754fba0c76963acd33","liked":true,"saved":true}]