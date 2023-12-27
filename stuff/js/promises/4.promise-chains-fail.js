const promise = new Promise((resolve, reject) => {
    //resolve(10)
    reject(new Error('fail'))
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
// VM431:17 Error: fail
//     at <anonymous>:3:12
//     at new Promise (<anonymous>)
//     at <anonymous>:1:17