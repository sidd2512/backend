//The ApiError class provides a structured way to create and handle API-specific errors. By extending the built-in Error class, it retains the basic error properties and methods while adding additional properties like statusCode, errors, success, and optional custom stack traces. This makes it easier to handle and respond to errors in a consistent manner in your API.

class ApiError extends Error {
  constructor(
      statusCode,
      message= "Something went wrong",
      errors = [],
      stack = ""
  ){
      super(message)
      this.statusCode = statusCode
      this.data = null
      this.message = message
      this.success = false;
      this.errors = errors

      if (stack) {
          this.stack = stack
      } else{
          Error.captureStackTrace(this, this.constructor)
      }

  }
}

export {ApiError}



/*
class ApiError extends Error { ... }: This declares a new class ApiError that inherits from the built-in Error class. Inheritance allows ApiError to have all the properties and methods of the Error class, while adding additional functionality specific to API errors.

 -----Constructor Parameters---
statusCode: An integer representing the HTTP status code associated with the error (e.g., 404 for "Not Found", 500 for "Internal Server Error").
message: A string containing a human-readable message describing the error. It defaults to "Something went wrong" if not provided.
errors: An array to hold any additional error details. It defaults to an empty array.
stack: A string containing the stack trace of the error. It defaults to an empty string.

----super call-----
super(message): This calls the constructor of the Error class with the provided message. This ensures that the message property is correctly set on the Error object.

----Stack Trace-----
 a stack trace is a crucial tool for understanding and debugging errors in a program. It shows the sequence of function calls leading up to an error, making it easier to pinpoint the exact location and cause of the problem.

 How a Stack Trace Works
When an error occurs in a program, the runtime environment (such as Node.js or a web browser) generates a stack trace. This trace lists all the active function calls at the point where the error happened. The most recent function call is at the top, and the oldest function call is at the bottom.



*/