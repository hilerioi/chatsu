import Mongoose = require("mongoose");
import { DataAccess } from "./../DataAccess";
import { IFriendListModel } from "../interfaces/IFriendListModel";

let mongooseConnection = DataAccess.mongooseConnection;
let mongooseObj = DataAccess.mongooseInstance;
class FriendListModel {
  public schema: any;
  public model: any;

  public constructor() {
    this.createSchema();
    this.createModel();
  }

  public createSchema(): void {
    this.schema = new Mongoose.Schema(
      {
        userId: Number,
        friends: [Number]
      }, { collection: "friends" }
    );
  }

  public createModel(): void {
    this.model = mongooseConnection.model<IFriendListModel>(
      "FriendList",
      this.schema
    );
  }

  // Get all friends for a single user
  public retrieveAllFriendsByUserId(response:any, filter:Object){
    var query = this.model.findOne(filter);
    query.exec ( (err, itemArray) => {
        response.json(itemArray);
    });
  }

}
export { FriendListModel };
