"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.log = void 0;
const winston_1 = require("winston");
function formatParams(info) {
    const { timestamp, level, message, label } = info;
    return `${timestamp} [${level}]: invoice-service.${label} ${message}`;
}
const developmentFormat = winston_1.format.combine(winston_1.format.colorize(), winston_1.format.timestamp({ format: 'MM-DD-YYYY HH:mm:ss' }), winston_1.format.align(), winston_1.format.printf(formatParams));
const productionFormat = winston_1.format.combine(winston_1.format.timestamp({ format: 'MM-DD-YYYY HH:mm:ss' }), winston_1.format.align(), winston_1.format.printf(formatParams));
const logger = process.env.NODE_ENV !== 'production'
    ? (0, winston_1.createLogger)({
        defaultMeta: { component: 'invoice-service' },
        transports: [new winston_1.transports.Console()],
        format: developmentFormat,
    })
    : (0, winston_1.createLogger)({
        defaultMeta: { component: 'invoice-service' },
        format: productionFormat,
        transports: [new winston_1.transports.Console()],
        exceptionHandlers: [new winston_1.transports.Console()],
    });
function log(options) {
    logger.log(options.level, options.message, { label: options.label });
}
exports.log = log;
