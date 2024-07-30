import mongoose from "mongoose";
// yimport  autoIncrement  from 'mongoose-sequence';

const userSchema = mongoose.Schema({
  Name:String,
  UserName:String,
  Email:String,
  Phone:String
});

// autoIncrement.apply(mongoose.connection);
// userSchema.plugin(autoIncrement.plugin, 'user');
const user = mongoose.model('user',userSchema);
export default user;
