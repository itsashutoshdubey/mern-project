const mongoose = require("mongoose");

mongoose.set("strictQuery", false);


mongoose.connect('mongodb://localhost:27017/blog').then((e) => console.log("mongo connected"))
//mongoose
 //   .connect(
        "mongodb+srv://sangammukherjee2022:sangammukherjee2023@cluster0.uulyk4o.mongodb.net/"
  //  )
  //  .then(() => console.log("Connected mongo db"))
  //  .catch((e) => console.log(e));