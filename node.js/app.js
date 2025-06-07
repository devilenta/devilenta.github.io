const express = require('express');
const Logger = require('./logger');
const dotenv = require('dotenv');
dotenv.config();

const courses =[
  {id : 1 , name : "html"},
  {id : 2 , name : "css"},
  {id : 3 , name : "js"},
]

const app = express()
app.use(express.json())
app.use(Logger)

app.get ("/api",(req,res)=>{
  res.send([1,2,3])
  

})

app.post("/api/test" , (req,res)=>{

const course ={
  id : courses.length + 1 ,
  name : req.body.name
}
courses.push(course)
res.send(course)

})



const port = process.env.TEST_PORT || 3000
// console.log(port);




app.listen(port , ()=>{
  console.log(`${port}`);
  

})