const { createLogger, format, transports } = require("winston");

const level = process.env.LOG_LEVEL || "debug";

function formatParams(info) {
    const { timestamp, level, message, ...args } = info;
    const ts = timestamp.slice(0, 19).replace("T", " ");

    return `${ts} ${level}: ${message} ${Object.keys(args).length ? JSON.stringify(args, "", "") : ""}`;
}

const productionFormat = format.combine(format.timestamp(), format.align(), format.printf(formatParams));

let logger = createLogger({
    level: level,
    format: productionFormat,
    transports: [new transports.Console()],
});

module.exports = logger;
