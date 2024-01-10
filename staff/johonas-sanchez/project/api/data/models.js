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
      enum: ["Manager", "User"],
      required: true,
   },
   saved: {
      type: [ObjectId],
      ref: "Parking",
   },
})

const point = new Schema({
   type: {
      type: String,
      default: "Point",
      required: true,
   },
   coordinates: {
      type: [Number],
      required: true,
   },
})

const parking = new Schema({
   location: {
      type: point,
      required: true,
      index: "2dsphere",
   },
   locator: {
      type: ObjectId,
      required: true,
      ref: "User",
   },
   confirmations: {
      type: [ObjectId],
      ref: "User",
   },
})

const review = new Schema({
   parking: {
      type: ObjectId,
      ref: "Parking",
      required: true,
   },
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
      min: 1,
      max: 5
      
   },
})

const User = model("User", user)
const Point = model("Point", point)
const Parking = model("Parking", parking)
const Review = model("Review", review)

module.exports = {
   User,
   Point,
   Parking,
   Review,
}
