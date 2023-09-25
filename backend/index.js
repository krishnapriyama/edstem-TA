const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const cookieparser = require("cookie-parser")
const Routes = require("./routes/routes")

const app = express();

app.use(
   cors({
     origin: ["*", "http://localhost:5173"],
     method: ["GET", "POST", "PUT", "PATCH"],
     Credentials: true,
   })
 );

const url =
  "mongodb+srv://krishnapriyama185:KCI8UAtqnrE6xMMk@cluster0.jym6t5h.mongodb.net/edstemTA";

mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB Connection Sucessfully Installed");
  })
  .catch((err) => {
    console.log(err.message, "---dbError");
  });


app.listen(4000, () => {
  console.log("Server Started at port 4000");
});

app.use(express.json())
app.use(cookieparser())
app.use("/", Routes);

