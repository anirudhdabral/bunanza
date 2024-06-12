import mongoose from "mongoose";

const mongoURI =
  "mongodb+srv://anirudhdabral:RRn55zrPzTbegvIm@anirudhdabralmongo.sya1pih.mongodb.net/bunanza?retryWrites=true&w=majority";
export const mongoDb = async () => {
  await mongoose.connect(mongoURI)
  .then(async(result:any)=>{
    console.log("Database connected!");
  }).catch((error:any)=>{
    console.log(error)
  });
};
