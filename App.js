"use strict";
exports.__esModule = true;
exports.App = void 0;
var express = require("express");
var logger = require("morgan");
var bodyParser = require("body-parser");
var session = require("express-session");
var cookieParser = require("cookie-parser");
//var MongoClient = require('mongodb').MongoClient;
//var Q = require('q');
var UserModel_1 = require("./model/UserModel");
var MessageModel_1 = require("./model/MessageModel");
var ChatModel_1 = require("./model/ChatModel");
var FriendListModel_1 = require("./model/FriendListModel");
//import {DataAccess} from './DataAccess';
// Creates and configures an ExpressJS web server.
var App = /** @class */ (function () {
    //Run configuration methods on the Express instance.
    function App() {
        this.expressApp = express();
        this.middleware();
        this.routes();
        this.idGenerator = 102;
        this.User = new UserModel_1.UserModel();
        this.Message = new MessageModel_1.MessageModel();
        this.Chat = new ChatModel_1.ChatModel();
        this.FriendList = new FriendListModel_1.FriendListModel();
    }
    // Configure Express middleware.
    App.prototype.middleware = function () {
        this.expressApp.use(logger('dev'));
        this.expressApp.use(bodyParser.json());
        this.expressApp.use(bodyParser.urlencoded({ extended: false }));
        // this.expressApp.use(function (req, res, next) {
        //   res.header("Access-Control-Allow-Origin", "*");
        //   res.header(
        //     "Access-Control-Allow-Headers",
        //     "Origin, X-Requested-With, Content-Type, Accept"
        //   );
        //   next();
        // });
        this.expressApp.use(session({ secret: "keyboard cat" }));
        this.expressApp.use(cookieParser());
    };
    // Configure API endpoints.
    App.prototype.routes = function () {
        var _this = this;
        var router = express.Router();
        //route to return JSON of all users
        /*     router.get("/app/users", (req, res) => {
              console.log("Query all users");
              this.User.retrieveAllUsers(res);
            });
        
            //route to return JSON of a single user
            router.get("/app/users/:userId", (req, res) => {
              var id = req.params.userId;
              console.log("Query a user with id:" + id);
              this.User.retrieveUser(res, { userId: id });
            });
        
            //route to return JSON of user's name
            router.get("/app/users/:userId/name", (req, res) => {
              var id = req.params.userId;
              console.log("Query a user's name with id:" + id);
              this.User.retrieveUserName(res, { userId: id });
            });
        
            //route to return JSON of all friends for a single user
            router.get("/app/users/:userId/friends", (req, res) => {
              var id = req.params.userId;
              console.log("Query all friends for userId: " + id);
              this.FriendList.retrieveAllFriendsByUserId(res, { userId: id });
            });
        
            //route to return JSON of all messages from single user
            router.get("/app/users/:userId/messages", (req, res) => {
              var id = req.params.userId;
              console.log("Query all messages for userId: " + id);
              this.Message.retrieveAllMessagesByUserId(res, { userId: id });
            });
        
            //route to return JSON of all chats from single user
            router.get("/app/users/:userId/chats", (req, res) => {
              var id = req.params.userId;
              console.log("Query all chats for userId: " + id);
              this.Chat.retrieveAllChatsByUserId(res, id);
            });
        
            // route to return JSON of user's preferred language
            router.get("/app/users/:userId/language", (req, res) => {
              var id = req.params.userId;
              console.log("Query preferred language for userId: " + id);
              this.User.retrieveLanguage(res, { userId: id });
              console.log(res);
            }); */
        // route to return JSON of chat objects
        router.get('/app/chats', function (req, res) {
            console.log("Query all chats:");
            _this.Chat.retrieveAllChats(res);
            //res.sendStatus(200);
        });
        /*     // route to return a unique chat based on ID
            router.get("/app/chats/:chatId", (req, res) => {
              var id = req.params.chatId;
              console.log("Query a chat with id:" + id);
              this.Chat.retrieveChat(res, { chatId: id });
            });
        
            //route to return JSON of messages by chatID
            router.get("/app/chats/:chatId/messages", (req, res) => {
              var id = req.params.chatId;
              console.log("Query messages from chatId:" + id);
              this.Message.retrieveAllMessagesByChatId(res, { chatId: id });
            });
        
            //route to return JSON of last message by chatID
            router.get("/app/chats/:chatId/lastMessage", (req, res) => {
              var id = req.params.chatId;
              console.log("Query last message from chatId:" + id);
              this.Message.retrieveLastMessageByChatId(res, { chatId: id });
            });
        
            //route to return JSON of a single message in a single chat
            router.get("/app/chats/:chatId/messages/:messageId", (req, res) => {
              var chat_id = req.params.chatId;
              var message_id = req.params.messageId;
              console.log("Query messageId " + message_id + " from chatId:" + chat_id);
              this.Message.retrieveSingleMessageByChatId(res, {
                messageId: message_id,
                chatId: chat_id,
              });
            });
        
            // route to post a JSON message
            router.post("/app/messages/:chatId", (req, res) => {
              console.log("testing to see if message was added to database");
              console.log(req.body);
              this.Message.sendMessage(req.body);
              res.send("201 CREATED");
            });
        
            // route to post a JSON chat
            router.post("/app/chats/", (req, res) => {
              console.log("testing to see if chat was added to database");
              console.log(req.body);
              this.Chat.createChat(req.body);
              res.send("201 CREATED");
            }); */
        this.expressApp.use('/', router);
        // this.expressApp.use("/app/json/", express.static(__dirname + "/app/json"));
        //this.expressApp.use("/images", express.static(__dirname + "/img"));
        //this.expressApp.use("/", express.static(__dirname + "/dist/BridgeAngular"));
        // this.expressApp.use("/", express.static(__dirname + "/pages"));
    };
    return App;
}());
exports.App = App;
