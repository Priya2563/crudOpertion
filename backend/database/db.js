
import mongoose from "mongoose"
const connection = async(username,password) => {
   const URL=`mongodb+srv://${username}:${password}@crudproject.fbwtfhu.mongodb.net/?retryWrites=true&w=majority&appName=crudproject`;
try{
await mongoose.connect(URL);
console.log('your  database is connected');
}catch(error){
  console.log('error while you connecting with the database',error);
}
}
export default connection;