import express from "express"
import cors from "cors";
import cookieParser from "cookie-parser";


const app=express();

app.use(cors({
  origin: process.env.CORS_ORIGIN,
  credentials: true
}))

app.use(express.json({limit:'1mb'}))
//Purpose: Parses incoming requests with JSON payloads
//express.json(): A built-in middleware function in Express that parses incoming requests with JSON payloads.
//{ limit: '1mb' }: Sets the maximum size of the JSON payload to 1 megabyte. If the payload exceeds this limit, an error will be thrown.


app.use(express.urlencoded({extended :true, limit:'1mb'})) // extended : true mean obj ke andar obj accept kar kate h 
// Purpose: Parses incoming requests with URL-encoded payloads or To parse URL-encoded payloads sent via form submissions
//extended: true: Allows for rich objects and arrays to be encoded and parsed
//Functionality: Converts the URL-encoded string into a JavaScript object and makes it available in req.body.


app.use(express.static('public')) // file wagera public folder mai usi ke liye h
//Purpose: Serves static files from the public directory.
//express.static('public'): A built-in middleware function in Express to serve static files such as HTML, CSS, JavaScript,pdf, and images. It serves the files from the public directory. For example, if you have a file public/index.html, it will be accessible at the root URL of your server.

app.use(cookieParser());


export {app};