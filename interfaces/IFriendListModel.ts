import Mongoose = require("mongoose");

interface IFriendListModel extends Mongoose.Document {
  userId: number;
  friends: [number];
}
export { IFriendListModel };
