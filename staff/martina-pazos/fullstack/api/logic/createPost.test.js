const mongoose = require('mongoose')
const createPost = require('./createPost')

mongoose.connect('mongodb://127.0.0.1:27017/test')
    .then(() => {
        try {
            createPost('656f33e2a1fe3c5429828ff0', 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fyt3.googleusercontent.com%2FBBE0Zjym2V1pm282I47kSvc9k32uNwk005YyGz9gIvY7wI9nYm1z2dacN0RpUWkCF7e0E_SNa18%3Ds900-c-k-c0x00ffffff-no-rj&tbnid=Ouun7JTK493rEM&vet=12ahUKEwjiiYCh0fiCAxVJkScCHTi7BtcQMygLegUIARCKAQ..i&imgrefurl=https%3A%2F%2Fm.youtube.com%2Fc%2FSuperShaktimaan&docid=re-qyS9CoCeJQM&w=900&h=900&q=shakti%40maan&ved=2ahUKEwjiiYCh0fiCAxVJkScCHTi7BtcQMygLegUIARCKAQ', 'imagen superheroe Shaktimaan', 'voy a salvar el mundo 🦾',
                error => {
                    if (error) {
                        console.error(error)

                        return
                    }

                    console.log('created')

                })
        } catch (error) {
            console.error(error)
        }
    })