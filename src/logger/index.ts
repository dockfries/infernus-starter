import process from "node:process";
import winston from "winston";

export const logger = winston.createLogger({
  format: winston.format.combine(
    winston.format.timestamp({
      format: "YYYY-MM-DD HH:mm:ss",
    }),
    winston.format.errors({ stack: true }),
    winston.format.json()
  ),
  transports: [
    new winston.transports.File({
      dirname: "logs",
      filename: "log.txt",
      maxsize: 1024 * 1024 * 5,
    }),
  ],
});

if (process.env.NODE_ENV !== "production") {
  logger.add(
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format((info) => {
          info.level = info.level.toUpperCase();
          return info;
        })(),
        winston.format.colorize(),
        winston.format.printf(({ timestamp, level, message, stack }) => {
          const text = `[${timestamp}] ${level}: ${message}`;
          return stack ? text + "\n" + stack : text;
        })
      ),
    })
  );
}

process.on("uncaughtException", (err) => {
  logger.error(err);
});
