const mongoose = require("mongoose");

//database Connection with MongoDB

const connectDB = async () => {
  console.log("mongodb://localhost:27017");
  try {
    await mongoose.connect("mongodb://localhost:27017", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected");
  } catch (error) {
    console.error("MongoDB connection failed", error);
    process.exit(1);
  }
};

module.exports = connectDB;
