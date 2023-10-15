const mongoose = require("mongoose")
const{Schema} = mongoose;

const userSchema = new Schema({
        position: {
          lat: { type: Number, required: true },
          lng: { type: Number, required: true }
        },
        title: { type: String, required: true },
        content: { type: String, required: true },
        categoria: { type: String, required: true },
        imagem1: { type: String, required: true },
        imagem2: { type: String, required: true },
        imagem3: { type: String, required: true }
      });
      
const User = mongoose.model("User", userSchema);
module.exports = {
    User,
    userSchema,
};