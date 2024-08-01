


import dotenv from 'dotenv'
import express from "express"

import connectDB from "./db/index.js";
// index.js likhna hoga yaha agar error aaye 
const app=express();


dotenv.config({path: './.env'});

//connectDB();


// Add a basic route for testing
// app.get('/', (req, res) => {
//   res.send('Hello World!');
// });

// // Start the server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });







// //  method 2  write connetion code in db  index and import here  connectBD();

// // //Method 2
// import mongoose from "mongoose";
// import { DB_NAME } from "./constant.js";
// ;(async()=>{
//   try {
//     await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//     // app.on error kar rahe agar express mai error aa raha to so karne ke liye 
//     app.on("error",(error)=>{
//       console.log("ERROR: ", error);
//       throw error
//     })

//     app.listen(process.env.PORT,
//       ()=>{
//         console.log(`App is listing on port ${process.env.PORT}`);
//       }
//     )
//   } catch (error) {
//     console.log("Error: "+error);
//     throw error
//   }
// })()