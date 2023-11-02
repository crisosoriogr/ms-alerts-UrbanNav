"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var server_1 = require("./classes/server");
var server = new server_1.default();
server.start(function () {
    console.log("Servidor corriendo en el puerto ".concat(server.port));
});
