"use strict";
exports.__esModule = true;
exports.UserModel = void 0;
var Mongoose = require("mongoose");
var DataAccess_1 = require("./../DataAccess");
var mongooseConnection = DataAccess_1.DataAccess.mongooseConnection;
var mongooseObj = DataAccess_1.DataAccess.mongooseInstance;
var UserModel = /** @class */ (function () {
    function UserModel() {
        this.createSchema();
        this.createModel();
    }
    UserModel.prototype.createSchema = function () {
        this.schema = new Mongoose.Schema({
            email: String,
            password: String,
            userId: Number,
            fname: String,
            lname: String,
            language: String,
            chats: [Number]
        }, { collection: "users" });
    };
    UserModel.prototype.createModel = function () {
        this.model = mongooseConnection.model("Users", this.schema);
    };
    UserModel.prototype.retrieveAllUsers = function (response) {
        var query = this.model.find({});
        query.exec(function (err, itemArray) {
            response.json(itemArray);
        });
        console.log(response);
    };
    UserModel.prototype.retrieveUser = function (response, filter) {
        var query = this.model.findOne(filter);
        query.exec(function (err, item) {
            response.json(item);
        });
    };
    UserModel.prototype.retrieveUserName = function (response, filter) {
        var query = this.model.findOne(filter);
        query.exec(function (err, item) {
            var name = item.fname + " " + item.lname;
            response.json(name);
        });
    };
    UserModel.prototype.retrieveLanguage = function (response, filter) {
        var query = this.model.findOne(filter);
        query.exec(function (err, item) {
            response.json(item.language);
        });
    };
    return UserModel;
}());
exports.UserModel = UserModel;
