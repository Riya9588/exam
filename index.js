const express = require("express");
const app = express();

const mongoose = require("mongoose");

const postRoute = require("./routes/posts");
app.use(express.json());
mongoose
  .connect('mongodb+srv://riyamathur:bhanu@1234@cluster0.gnsh0.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,

  })
  .then(console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));


app.use("/api/post", postRoute);
app.use("/api/posts", postRoute);



app.listen("3001", () => {
  console.log("Backend is running.");
});