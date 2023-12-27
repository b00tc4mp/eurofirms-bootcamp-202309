const promise = new Promise((resolve, reject) => {
    resolve(10)
})

promise
    .then(value => {
        console.log(value)

        const promise2 = new Promise((resolve, reject) => {
            resolve(20)
        })

        promise2
            .then(value => console.log(value))
            .catch(error => console.error(error))
    })
    .catch(error => console.error(error))
// VM385: 7 10
// VM385: 14 20