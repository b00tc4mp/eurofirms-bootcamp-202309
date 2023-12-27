// random demo

fetch('https://dog.ceo/api/breeds/image/random')
    .then(res => {
        if (!res.ok) {
            res.json()
                .then(body => console.error(body))
                .catch(error => console.error(error))

            return
        }

        res.json()
            .then(body => {
                console.log(res.status, body)

                const { message: url } = body

                const img = document.createElement('img')
                img.src = url
                img.style.width = '400px'

                document.body.innerHTML = ''

                document.body.append(img)
            })
            .catch(error => consol.error(error))
    })
    .catch(error => console.error(error))

// dogs by breed

fetch('https://dog.ceo/api/breed/papillon/images')
    .then(res => {
        if (!res.ok) {
            res.json()
                .then(body => console.error(body))
                .catch(error => console.error(error))

            return
        }

        res.json()
            .then(body => {
                console.log(res.status, body)

                document.body.innerHTML = ''

                const { message: urls } = body

                urls.forEach(url => {
                    const img = document.createElement('img')
                    img.src = url
                    img.style.width = '400px'

                    document.body.append(img)
                })
            })
            .catch(error => consol.error(error))
    })
    .catch(error => console.error(error))