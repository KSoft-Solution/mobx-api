require('dotenv').config()
const app = require('./app/app')

const PORT = process.env.PORT || 5000

app.listen(PORT,(req,res)=>{
  console.log(`server is listening on http://localhost:${PORT}`)
})

module.exports = app;
