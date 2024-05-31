function logRequests(req, res, next) {
  console.log(
    `${new Date().toISOString()} - ${req.method} request to ${req.url}`
  );
  next();
}

module.exports = logRequests;
