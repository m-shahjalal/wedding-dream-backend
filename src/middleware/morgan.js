const morgan = require("morgan");
const logger = require("../lib/logger");

const stream = {
  write: (message) => logger.http(message.trim()),
};

const skip = () => {
  const env = process.env.NODE_ENV || "development";
  return env !== "development";
};

const morganMiddleware = morgan(
  "🗼 :remote-addr :method :url :status ⌚ :response-time ms",
  { stream, skip }
);

module.exports = morganMiddleware;