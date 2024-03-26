const RENDER_URL = process.env.RENDER_URL;
const FRONTEND = process.env.FRONTEND;
const FIREBASE_APP = process.env.FIREBASE_APP;
const MY_WEBSITE = process.env.MY_WEBSITE;
const LIVE_SERVER = process.env.LIVE_SERVER;
const LOCAL_SERVER = process.env.LOCAL_SERVER;

const whitelist = [RENDER_URL, FRONTEND, FIREBASE_APP, MY_WEBSITE, LIVE_SERVER, LOCAL_SERVER];

const corsOptionsDelegate = function (req, callback) {
  let corsOptions;
  if (whitelist.indexOf(req.header("Origin")) !== -1) {
    corsOptions = { origin: true }; // reflect (enable) the requested origin in the CORS response
  } else {
    corsOptions = { origin: false }; // disable CORS for this request
  }
  callback(null, corsOptions); // callback expects two parameters: error and options
};
module.exports = corsOptionsDelegate;
