const mongoose = require("mongoose")
import { MONGO_URL } from "../config/secret";

mongoose.connection.once('open', () => {
  console.log('Mongo connection ready');
  
})

mongoose.connection.on('error', (err) => {
  console.error(err)
})

async function mongoConnect() {  
    await mongoose.connect(MONGO_URL, {
  })

  
}

async function mongoDisconnect() {
    await mongoose.disconnect(MONGO_URL)
}


module.exports = {mongoConnect,mongoDisconnect}