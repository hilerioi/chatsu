import Mongoose = require("mongoose");

interface IMessageModel extends Mongoose.Document {
  delivered: boolean;
  originalText: string;
  translatedText: string;
  userId: number;
  friendId: number;
  dateCreated: Date;
  languageTo: string;
  languageFrom: string;
  messageId: number;
  chatId: number;
  isSender: boolean;
}
export { IMessageModel };
