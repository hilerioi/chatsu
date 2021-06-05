"use strict";
exports.__esModule = true;
exports.FriendListModel = void 0;
var Mongoose = require("mongoose");
var DataAccess_1 = require("./../DataAccess");
var mongooseConnection = DataAccess_1.DataAccess.mongooseConnection;
var mongooseObj = DataAccess_1.DataAccess.mongooseInstance;
var FriendListModel = /** @class */ (function () {
    function FriendListModel() {
        this.createSchema();
        this.createModel();
    }
    FriendListModel.prototype.createSchema = function () {
        this.schema = new Mongoose.Schema({
            userId: Number,
            friends: [Number]
        }, { collection: "friends" });
    };
    FriendListModel.prototype.createModel = function () {
        this.model = mongooseConnection.model("FriendList", this.schema);
    };
    // Get all friends for a single user
    FriendListModel.prototype.retrieveAllFriendsByUserId = function (response, filter) {
        var query = this.model.findOne(filter);
        query.exec(function (err, itemArray) {
            response.json(itemArray);
        });
    };
    return FriendListModel;
}());
exports.FriendListModel = FriendListModel;
