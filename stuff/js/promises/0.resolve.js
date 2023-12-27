const promise = new Promise((resolve, reject) => {
    resolve(10)
})

promise
    .then(value => console.log(value))
    .catch(error => console.error(error))
// VM290: 6 10