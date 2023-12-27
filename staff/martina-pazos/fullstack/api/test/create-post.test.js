const req = {
    method: 'POST',
    headers: {
        Authorization: ' Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NTgwMDVlY2Q1OGIyOTA3NGY2MzNkODYiLCJpYXQiOjE3MDI4ODkxMzQsImV4cCI6MTcwMjkyNTEzNH0.SXO9csWxR5dDGIzCpYCQC5MF_TGWSdK9qf-inTOY5w0',
        'Content-Type': 'application/json'
    },
    //justo antes del id , poner bearer(para indicar que la autorizacion esta en jsonwebtoken) 


    body: JSON.stringify({
        image: "https://wallpapers.com/images/hd/cute-minion-happy-bob-v1x9tfcn0rznkvvd.jpg", imageDescription: 'minion happy', text: 'hello minion'
    })
}

fetch('http://localhost:4000/posts', req)
    .then(res => {
        if (!res.ok) {
            res.json()
                .then(body => console.error(body))
                .catch(error => console.error(error))

            return
        }

        console.log(res.status)
    })
    .catch(error => console.error(error))
