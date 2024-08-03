//The ApiResponse class helps encapsulate all the necessary information for an API response in a single, structured object. By using this class, you ensure that all responses from your API have a consistent format, making it easier to handle responses on the client side and improving the readability of your code


class ApiResponse {
  constructor(statusCode, data, message = "Success"){
      this.statusCode = statusCode
      this.data = data
      this.message = message
      this.success = statusCode < 400
  }
}

export { ApiResponse }



/*

The ApiResponse class is designed to create a standardized response object for an API. This helps ensure that responses from your API are consistent and structured in a predictable way. Let's break down the class and understand its components and purpose.


Consistency: Ensures that all API responses follow a consistent structure.
Ease of Use: Simplifies the process of creating responses by providing a clear template.
Clarity: Makes it easy to understand the status and content of a response through well-defined properties.

------Instance Properties-----
this.statusCode = statusCode: Sets the statusCode property to the value passed in the constructor. This will be used to indicate the HTTP status of the response.

this.data = data: Sets the data property to the value passed in the constructor. This holds the actual data being sent back to the client.

this.message = message: Sets the message property to the value passed in the constructor, or "Success" if no message was provided. This gives a human-readable context to the response.

this.success = statusCode < 400: This boolean property is set to true if the statusCode is less than 400, indicating a successful response. Status codes 400 and above generally indicate client or server errors, so this property helps quickly determine if the response represents a success or failure.



*/