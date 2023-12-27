const promise = new Promise((resolve, reject) => {
    resolve(10)
})

promise
    .then(value => {
        console.log(value)

        const promise2 = new Promise((resolve, reject) => {
            //resolve(20)
            reject(new Error('fail'))
        })

        return promise2
    })
    .then(value => console.log(value))
    .catch(error => console.error(error))
// VM432: 7 10
// VM432: 17 Error: fail
// at < anonymous >: 11: 20
//     at new Promise(<anonymous>)
//     at <anonymous>:9:26