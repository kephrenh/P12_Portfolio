const whitelist = [
  "https://p12-portfolio.onrender.com",
  "http://localhost:8000",
  "http://localhost:5173",
  "https://mohamedamoussa-portfolio.web.app",
];

const corsOptionsDelegate = function (req, callback) {
  let corsOptions;
  if (whitelist.indexOf(req.header("Origin")) !== -1) {
    corsOptions = { origin: true }; // reflect (enable) the requested origin in the CORS response
  } else {
    corsOptions = { origin: false }; // disable CORS for this request
  }
  callback(null, corsOptions); // callback expects two parameters: error and options
  // credentials: true,
  // origin: "http://localhost:5173",
};
module.exports = corsOptionsDelegate;
