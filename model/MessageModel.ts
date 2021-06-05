import Mongoose = require("mongoose");
import { DataAccess } from "./../DataAccess";
import { IMessageModel } from "../interfaces/IMessageModel";

let mongooseConnection = DataAccess.mongooseConnection;
let mongooseObj = DataAccess.mongooseInstance;

class MessageModel {
  public schema: any;
  public model: any;

  public constructor() {
    this.createSchema();
    this.createModel();
  }

  public createSchema(): void {
    this.schema = new Mongoose.Schema(
      {
        originalText: String,
        translatedText: String,
        userId: Number,
        friendId: Number,
        dateCreated: Date,
        languageTo: String,
        languageFrom: String,
        messageId: Number,
        chatId: Number,
        isSender: Boolean,
      },
      { collection: "messages" }
    );
  }

  public createModel(): void {
    this.model = mongooseConnection.model<IMessageModel>(
      "Messages",
      this.schema
    );
  }

  public sendMessage(message): any {
    this.model.create([message], (err) => {
      if (err) {
        console.log("object creation failed");
        return false;
      }
      return true;
    });
  }

  public retrieveSingleMessageByChatId(response: any, filter: Object) {
    var query = this.model.findOne(filter);
    query.exec((err, item) => {
      response.json(item);
    });
  }

  public retrieveAllMessagesByChatId(response: any, filter: Object) {
    var query = this.model.find(filter);
    query.exec((err, itemArray) => {
      response.json(itemArray);
    });
  }

  public retrieveLastMessageByChatId(response: any, filter: Object) {
    var query = this.model.find(filter);
    query.exec((err, itemArray) => {
      var lastMessage = itemArray[itemArray.length - 1].translatedText;
      response.json(lastMessage);
    });
  }

  public retrieveAllMessagesByUserId(response: any, filter: Object) {
    var query = this.model.find(filter);
    query.exec((err, itemArray) => {
      response.json(itemArray);
    });
  }
}
export { MessageModel };
