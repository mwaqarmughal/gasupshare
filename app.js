const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors")
require ('dotenv/config')

app.use(express.json())
app.use(cors())
//Import Routes
const postRoutes =require('./routes/posts')
const userRoutes = require('./routes/users')
const complaintsRoutes = require("./routes/complaints");
const partnershipRoutes = require("./routes/partnership");
const PORT = process.env.PORT || 8080;
//ROUTES
app.get("/", (req, res) => {
  res.send("we are on home");
});

//Middleware
app.use('/posts',postRoutes);
app.use('/users',userRoutes)
app.use('/complaints',complaintsRoutes)
app.use("/partnership", partnershipRoutes);


//Connect to DB
mongoose
  .connect(process.env.MONGODB_URI || process.env.DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("connected to database");
  });



  if (process.env.NODE_ENV==='production'){
    app.use(express.static('gasup2/build'))
  }
  app.get("*", (req,res)=>{
    res.sendFile(path.resolve(__dirname,"./gasup2", "build", "app.js"))
  })
//How do we start listening
app.listen(PORT);

