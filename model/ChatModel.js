"use strict";
exports.__esModule = true;
exports.ChatModel = void 0;
var Mongoose = require("mongoose");
var DataAccess_1 = require("./../DataAccess");
var mongooseConnection = DataAccess_1.DataAccess.mongooseConnection;
var mongooseObj = DataAccess_1.DataAccess.mongooseInstance;
var ChatModel = /** @class */ (function () {
    function ChatModel() {
        this.createSchema();
        this.createModel();
    }
    ChatModel.prototype.createSchema = function () {
        this.schema = new Mongoose.Schema({
            chatId: Number,
            users: [Number]
        }, { collection: "chats" });
    };
    ChatModel.prototype.createModel = function () {
        this.model = mongooseConnection.model("Chats", this.schema);
    };
    ChatModel.prototype.retrieveAllChats = function (response) {
        var query = this.model.find({});
        query.exec(function (err, itemArray) {
            response.json(itemArray);
        });
    };
    ChatModel.prototype.retrieveChat = function (response, filter) {
        var query = this.model.findOne(filter);
        query.exec(function (err, item) {
            response.json(item);
        });
    };
    ChatModel.prototype.createChat = function (message) {
        this.model.create([message], function (err) {
            if (err) {
                console.log("object creation failed");
                return false;
            }
            return true;
        });
    };
    ChatModel.prototype.retrieveAllChatsByUserId = function (response, filter) {
        var query = this.model.find({ "users": filter });
        query.exec(function (err, itemArray) {
            response.json(itemArray);
        });
    };
    return ChatModel;
}());
exports.ChatModel = ChatModel;
