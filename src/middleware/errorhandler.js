const errorHandler = (err, req, res, next) => {
    console.error('Error:', err); // Log the error details to the console
    res.status(err.status || 500).json({
      message: err.message || 'Internal Server Error',
      stack: err.stack // Include stack trace for debugging purposes (optional, only for development)
    });
  };
  
  module.exports = { errorHandler };
  