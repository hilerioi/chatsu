import Mongoose = require("mongoose");

interface IChatModel extends Mongoose.Document {
  chatId: number;
  users: [number];
}
export { IChatModel };
