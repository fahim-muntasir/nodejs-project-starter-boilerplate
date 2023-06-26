const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const middleware = [morgan("combined"), cors(), express.json()];

module.exports = middleware;
