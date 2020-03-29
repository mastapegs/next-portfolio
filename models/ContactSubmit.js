import mongoose, { Schema } from 'mongoose'

const contactSubmitSchema = new Schema({
  name: String,
  email: String,
  message: String
})

export default contactSubmitSchema;