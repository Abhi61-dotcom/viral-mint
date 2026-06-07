const mongoose = require("mongoose")
const connectDB = async()=>{
    try{
        await mongoose.connect(process.env.MONGODB_URL)
        console.log("connected to DataBase");
    }catch (error){
        console.log("Error in connicting db",error.message);
        
    }
}

module.exports=connectDB