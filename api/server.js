const express = require("express");
const cors = require("cors");
const router = require("./router");

const server = express();

server.use(express.json());
server.use(cors());
server.use("/api", router);

module.exports = server;
