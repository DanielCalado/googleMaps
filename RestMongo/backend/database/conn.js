const mongoose = require("mongoose");

async function main(){
    try {

        mongoose.set("strictQuery",true);

        await mongoose.connect('mongodb+srv://dsc7:saosao@cluster0.bucoqog.mongodb.net/google');

        console.log("conectado ao mongodb");
    } catch (error) {
        console.log(`Error: ${error}`);
    }
}

module.exports = main;