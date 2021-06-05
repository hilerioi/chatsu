import Mongoose = require("mongoose");

interface IUserModel extends Mongoose.Document {
    email: string;
    password: string;
    userId: string;
    fname: string;
    lname: string;
    language: string;
    chats: [number];
}
export {IUserModel};