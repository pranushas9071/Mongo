"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var routes_1 = require("./routes");
var mongoose_1 = __importDefault(require("mongoose"));
var app = express_1.default();
app.use("/dog", routes_1.dogRouter);
mongoose_1.default
    .connect("mongodb://localhost:27017/Dog-data", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
})
    .then(function (result) {
    console.log("Connected to db..");
    app.listen(8080, function () {
        console.log("Server started at port:8080");
    });
})
    .catch(function (err) { return console.log(err); });
