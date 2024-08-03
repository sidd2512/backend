//asyncHandler Function: A higher-order function that wraps asynchronous route handlers to handle errors gracefully.
//Avoids Repetitive Try-Catch Blocks: Simplifies code by eliminating the need for try-catch blocks in every async route handler.

const asyncHandler = (requestHandler) => {
  return (req, res, next) => {
      Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err))
  }
}


export { asyncHandler }

////notes////
/* The asyncHandler function is a utility designed to handle asynchronous request handlers in Express. It simplifies error handling in asynchronous routes by catching any errors that occur and passing them to the next middleware (typically an error-handling middleware). This helps to avoid repetitive try-catch blocks in each route handler.

*/


// const asyncHandler = () => {}
// const asyncHandler = (func) => () => {}
// const asyncHandler = (func) => async () => {}


// const asyncHandler = (fn) => async (req, res, next) => {
//     try {
//         await fn(req, res, next)
//     } catch (error) {
//         res.status(err.code || 500).json({
//             success: false,
//             message: err.message
//         })
//     }
// }