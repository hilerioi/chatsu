"use strict";
exports.__esModule = true;
exports.MessageModel = void 0;
var Mongoose = require("mongoose");
var DataAccess_1 = require("./../DataAccess");
var mongooseConnection = DataAccess_1.DataAccess.mongooseConnection;
var mongooseObj = DataAccess_1.DataAccess.mongooseInstance;
var MessageModel = /** @class */ (function () {
    function MessageModel() {
        this.createSchema();
        this.createModel();
    }
    MessageModel.prototype.createSchema = function () {
        this.schema = new Mongoose.Schema({
            originalText: String,
            translatedText: String,
            userId: Number,
            friendId: Number,
            dateCreated: Date,
            languageTo: String,
            languageFrom: String,
            messageId: Number,
            chatId: Number,
            isSender: Boolean
        }, { collection: "messages" });
    };
    MessageModel.prototype.createModel = function () {
        this.model = mongooseConnection.model("Messages", this.schema);
    };
    MessageModel.prototype.sendMessage = function (message) {
        this.model.create([message], function (err) {
            if (err) {
                console.log("object creation failed");
                return false;
            }
            return true;
        });
    };
    MessageModel.prototype.retrieveSingleMessageByChatId = function (response, filter) {
        var query = this.model.findOne(filter);
        query.exec(function (err, item) {
            response.json(item);
        });
    };
    MessageModel.prototype.retrieveAllMessagesByChatId = function (response, filter) {
        var query = this.model.find(filter);
        query.exec(function (err, itemArray) {
            response.json(itemArray);
        });
    };
    MessageModel.prototype.retrieveLastMessageByChatId = function (response, filter) {
        var query = this.model.find(filter);
        query.exec(function (err, itemArray) {
            var lastMessage = itemArray[itemArray.length - 1].translatedText;
            response.json(lastMessage);
        });
    };
    MessageModel.prototype.retrieveAllMessagesByUserId = function (response, filter) {
        var query = this.model.find(filter);
        query.exec(function (err, itemArray) {
            response.json(itemArray);
        });
    };
    return MessageModel;
}());
exports.MessageModel = MessageModel;
