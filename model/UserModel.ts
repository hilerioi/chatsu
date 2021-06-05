import Mongoose = require("mongoose");
import { DataAccess } from "./../DataAccess";
import { IUserModel } from "../interfaces/IUserModel";

let mongooseConnection = DataAccess.mongooseConnection;
let mongooseObj = DataAccess.mongooseInstance;

class UserModel {
  public schema: any;
  public model: any;

  public constructor() {
    this.createSchema();
    this.createModel();
  }

  public createSchema(): void {
    this.schema = new Mongoose.Schema(
      {
        email: String,
        password: String,
        userId: Number,
        fname: String,
        lname: String,
        language: String,
        chats: [Number]
      },
      { collection: "users" }
    );
  }

  public createModel(): void {
    this.model = mongooseConnection.model<IUserModel>("Users", this.schema);
  }

  public retrieveAllUsers(response: any): any {
    var query = this.model.find({});
    query.exec((err, itemArray) => {
      response.json(itemArray);
    });
    console.log(response);
  }

  public retrieveUser(response: any, filter: Object) {
    var query = this.model.findOne(filter);
    query.exec((err, item) => {
      response.json(item);
    });
  }

  public retrieveUserName(response: any, filter: Object) {
    var query = this.model.findOne(filter);
    query.exec((err, item) => {
      var name = item.fname + " " + item.lname;
      response.json(name);
    });
  }

  public retrieveLanguage(response: any, filter: Object) {
    var query = this.model.findOne(filter);
    query.exec((err, item) => {
      response.json(item.language);
    });
  }
}
export { UserModel };
