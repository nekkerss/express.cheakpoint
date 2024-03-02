const express =require("express")
const logger=require("./timer/logger")

const app = express()

const PORT=5000

app.use(logger)

app.use(express.static(__dirname+"/work"))

app.listen (PORT,(err)=>{
    err ? console.log(err)
    :console.log(`seveur runnig ${PORT}`);;
})