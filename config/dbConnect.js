const mongoose = require("mongoose")
const dbConnect = () => {
  try {
    const connect = mongoose.connect(process.env.MONGODB_URL)
    console.log("connection to db is successfull")
  }
  catch (error) {
    console.log(error)
  }
}
module.exports = dbConnect;
