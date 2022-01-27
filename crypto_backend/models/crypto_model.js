import mongoose from "mongoose";

const categorySchema = mongoose.Schema({
    crypto_name:{
       type:String,
       required:true,
       unique:true
    },
    crypto_symbol:{
        type:String,
        required:true,
        unique:true
     },
    current_price:{
        type:String,
        required:true
     }
})

export const cryptoModel = mongoose.model('crypto_data',categorySchema)