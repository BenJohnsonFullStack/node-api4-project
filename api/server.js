const express = require("express");
const cors = require("cors");
const router = require("./router");
const { logger } = require("./middleware");

const server = express();

server.use(express.json());
server.use(cors());
server.use(logger);
server.use("/api", router);

module.exports = server;
