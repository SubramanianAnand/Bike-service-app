const http = require("http");
const app = require("./Admin/app");
const app1 = require("./Customer/app");
const app2 = require("./Mechanic/app");
const app3 = require("./Order/app");
const express = require("express");
//const eurekaHelper = require("./eureka-helper");
const main = express();
require("dotenv").config();

const port = process.env.PORT || 8088;

//const server = http.createServer(app);
main.use("/", app1);
main.use("/", app);
main.use("/", app2);
main.use("/", app3);
main.listen(port, () => {
  console.log("Server is Listening on Admin MS Port: " + port);
});


//eurekaHelper.registerWithEureka("Admin-MicroService", port);
