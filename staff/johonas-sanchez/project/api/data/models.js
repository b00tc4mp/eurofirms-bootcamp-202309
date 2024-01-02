const mongoose = require("mongoose")

const {
   Schema,
   model,
   Types: { ObjectId },
} = mongoose

const user = new Schema({
   name: {
      type: String,
      required: true,
   },

   email: {
      type: String,
      required: true,
      unique: true,
   },

   password: {
      type: String,
      required: true,
   },
   role: {
      type: String,
      enum: ['Manager', 'User'],
      required: true
  },
   saved: {
      type: [ObjectId],
      ref: "Parking",
   },
})

const parking = new Schema({
   location: {
      lat: {
         type: Number,
         required: true,
      },
      long: {
        type: Number,
        required: true,
     },
   },
   locator: {
      type: ObjectId,
      required: true,
      ref: "User"
   },
   reviews: {
      type: [ObjectId],
      required: true,
      ref: "Review"
   },
   confirm: {
      type: [ObjectId],
      required: true,
      ref: "User"
   },

})

const review = new Schema({
    author: {
       type: ObjectId,
       required: true,
       ref: "User",
    },
    comment: {
        type: String,
     },
     valuation: {
        type: Number,
        required: true,
     },

 })

const User = model("User", user)
const Parking = model("Parking", parking)
const Review = model("Review", review)

module.exports = {
   User,
   Parking,
   Review
}
