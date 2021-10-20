"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorController = void 0;
var ErrorController = /** @class */ (function () {
    function ErrorController() {
    }
    ErrorController.prototype.errorHandler = function (err, req, res, next) {
        res.status(500).send("Message : " + err);
    };
    return ErrorController;
}());
exports.errorController = new ErrorController();
