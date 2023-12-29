const req = {
    method: 'POST',
    headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NTdjNjFjM2U5NDBlMjM0NGFhN2JmMDQiLCJpYXQiOjE3MDI5MDYzOTcsImV4cCI6MTcwMjk0MjM5N30.MJu_kyeJ6_hQwBCdwjyd1_vT58fl6Yq40TAPSicDEoU',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ image: 'https://i.etsystatic.com/6736785/r/il/7a8abe/998879910/il_570xN.998879910_sncv.jpg', imageDescription: 'chocobo', text: 'my videogame' })
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