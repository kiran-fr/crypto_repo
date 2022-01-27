import express from "express"
import mongoose from 'mongoose'
import router from "./routes/cryptoData"
import cors from 'cors'

const app = express()

app.use(express.json())
app.use(cors())
const url = 'mongodb+srv://Krishna:kJB62uVlgMdk0vIc@cluster0.cwk1k.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

mongoose.connect(url,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("DB connection success")
}).catch((error)=>{
    console.log("DB connection Error",error)
})


app.use("/",router)



app.listen(5000,()=>console.log("Server is ready 5000"))
