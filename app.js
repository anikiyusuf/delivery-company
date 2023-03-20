const express = require("express")
require('dotenv').config()
const   {connectionMongoDB}  = require('./db')
const userRouter = require("./routes/userRoute")
const bodyParser = require('body-parser')
const cookieParser = require("cookie-parser");
const { checkUser } = require("./middleware/authMiddleware");
const app = express()
const PORT =  process.env.PORT





app.use(cookieParser());
app.use(express.json())
// app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/public'));

connectionMongoDB()

app.set('view engine', 'ejs')
app.set('view engine')


app.use("/user" , userRouter)

app.get('/', (req, res) => {
    res.render('index');
  });
  app.get("/signup", (req, res) => {
      res.render("signup");
    });
  
    app.get("/enter", (req, res) => {
      res.render("login");
    });
  
    app.get("/mainpage/new", checkUser, (req, res) => {
      res.render("mainpage");
    });

app.listen(PORT, () =>{
    console.log(`server run on port localhost:${PORT}`)
}) 