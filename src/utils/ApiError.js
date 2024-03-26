class ApiError extends Error {
  constructor(statusCode, message) {
    super(message)

    this.name = 'ApiError'
    this.statusCode = statusCode

    // recording stack trace help with debugging
    Error.captureStackTrace(this, this.constructor)
  }
}

export default ApiError