const mongoose = require("mongoose")
const bcrypt = require("bcryptjs")
const { User, Point, Parking, Review } = require("./models")

const {
   Types: { ObjectId },
} = mongoose

mongoose
   .connect("mongodb://127.0.0.1:27017/project")
   .then(() => {
      return mongoose.connection.db.dropDatabase()
   })
   .then(() => {
      const password = "123123123"
      return bcrypt.hash(password, 8)
   })
   .then((hashedPassword) => {
      const manolo = new User({ name: "Manolo García", email: "manolo@garcia.com", password: hashedPassword, role: "Manager" })
      const paco = new User({ name: "Paco Martín", email: "paco@martin.com", password: hashedPassword, role: "User" })
      const lucia = new User({ name: "Lucia López", email: "lucia@lopez.com", password: hashedPassword, role: "User" })

      // Guardar todas las promesas en un array
      const userPromises = [manolo.save(), paco.save(), lucia.save()]

      // Utilizar Promise.all() para esperar a que todas las promesas se resuelvan
      return Promise.all(userPromises)
   })
   .then(([user1, user2, user3]) => {
      const point1 = new Point({ coordinates: [40.03098, -6.086394] })

      // Crear el parking y asignarle el locator como el _id de user1
      const parking1 = new Parking({ location: point1, locator: user1.id })

      const point2 = new Point({ coordinates: [40.031595, -6.085502] })
      const parking2 = new Parking({ location: point2, locator: user2.id })

      const point3 = new Point({ coordinates: [40.03224, -6.085156] })
      const parking3 = new Parking({ location: point3, locator: user3.id })

      const point4 = new Point({ coordinates: [40.02952, -6.085079] })
      const parking4 = new Parking({ location: point4, locator: user2.id })

      const point5 = new Point({ coordinates: [40.029486, -6.085042] })
      const parking5 = new Parking({ location: point5, locator: user2.id })

      const point6 = new Point({ coordinates: [40.029402, -6.084969] })
      const parking6 = new Parking({ location: point6, locator: user2.id })

      const point7 = new Point({ coordinates: [40.029367, -6.084936] })
      const parking7 = new Parking({ location: point7, locator: user3.id })

      const point8 = new Point({ coordinates: [40.029283, -6.084851] })
      const parking8 = new Parking({ location: point8, locator: user3.id })

      const point9 = new Point({ coordinates: [40.02925, -6.084825] })
      const parking9 = new Parking({ location: point9, locator: user1.id })

      const parkingPromise = [
         parking1.save(),
         parking2.save(),
         parking3.save(),
         parking4.save(),
         parking5.save(),
         parking6.save(),
         parking7.save(),
         parking8.save(),
         parking9.save(),
      ]

      // Guardar el parking
      return Promise.all(parkingPromise).then((parkings) => {
         const [parking1, parking2, parking3, parking4, parking5, parking6, parking7, parking8, parking9] = parkings

         // Añadir los IDs de los parkings 1 y 2 al array 'saved' del usuario 1 y guardarlo
         user1.saved.push(parking1.id, parking2.id)
         user1.save()

         const review1 = new Review({ parking: parking1.id, author: user3.id, comment: "Siempre ocupada", valuation: 3 })
         const review2 = new Review({ parking: parking2.id, author: user1.id, comment: "Fácil aparcamiento y suele estar libre", valuation: 4 })
         const review3 = new Review({ parking: parking2.id, author: user2.id, comment: "Aparca gente no autorizada", valuation: 3 })
         const review4 = new Review({
            parking: parking7.id,
            author: user2.id,
            comment: "Itinerario completamente adaptado y tiene alternativas cerca",
            valuation: 4,
         })
         const review5 = new Review({ parking: parking8.id, author: user1.id, comment: "Espacio muy justo", valuation: 4 })

         const reviewPromise = [review1.save(), review2.save(), review3.save(), review4.save(), review5.save()]

         return Promise.all(reviewPromise).then(() => {
            parking1.confirmations.push(user1.id, user3.id)
            parking3.confirmations.push(user1.id, user2.id, user3.id)
            parking4.confirmations.push(user1.id, user2.id)
            parking8.confirmations.push(user3.id)
            parking9.confirmations.push(user1.id)

            confirmationPromise = [parking1.save(), parking3.save(), parking4.save(), parking8.save(), parking9.save()]

            return Promise.all(confirmationPromise)
         })
      })
   })

   .then(() => {
      console.log("Saved...")
   })
   .catch((error) => {
      console.error("Error:", error)
   })
