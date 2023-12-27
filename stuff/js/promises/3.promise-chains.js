const promise = new Promise((resolve, reject) => {
    resolve(10)
})

promise
    .then(value => {
        console.log(value)

        const promise2 = new Promise((resolve, reject) => {
            resolve(20)
        })

        return promise2
    })
    .then(value => console.log(value))
    .catch(error => console.error(error))
// VM396:7 10
// VM396:15 20