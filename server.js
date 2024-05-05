const express = require("express")
const dotenv = require("dotenv").config()
const app = express()
const dbConnect = require("./config/dbConnect")
const PORT = process.env.PORT || 4000
const authRouter = require("./routes/authRoutes")
dbConnect();

app.set('view engine', 'ejs')
app.use(express.urlencoded({extended: false}))
// app.get('/', (req, res) => {
//   res.render('index')
// })

app.use('/', authRouter);

app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`)
})
