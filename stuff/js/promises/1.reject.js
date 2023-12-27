const promise = new Promise((resolve, reject) => {
    reject(new Error('fail'))
})

promise
    .then(value => console.log(value))
    .catch(error => console.error(error))
// VM319:7 Error: fail
//     at <anonymous>:2:12
//     at new Promise (<anonymous>)
//     at <anonymous>:1:17