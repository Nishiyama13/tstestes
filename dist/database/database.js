"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connection = void 0;
var pg_1 = __importDefault(require("pg"));
var Pool = pg_1.default.Pool;
var connection = new Pool({
    host: "localhost",
    port: 5432,
    user: "postgres",
    password: "secret",
    database: "tstestes"
});
exports.connection = connection;
