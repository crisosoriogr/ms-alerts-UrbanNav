"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var enviroment_1 = require("../global/enviroment");
var Server = /** @class */ (function () {
    function Server() {
        this.app = (0, express_1.default)();
        this.port = enviroment_1.SERVER_PORT;
    }
    Server.prototype.start = function (callback) {
        this.app.listen(this.port, callback);
    };
    return Server;
}());
exports.default = Server;
