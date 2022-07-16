const config = require("config");
const mongoose = require("mongoose");
const db = config.get("mongoURI");

const connectDB = async () => {
  try {
    await mongoose.connect(db || process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    });

    console.log("MongoDB Connected");
  } catch (error) {
    console.error(error.message);
  }
};

module.exports = connectDB;
