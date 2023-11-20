import mongoose from "mongoose";

const connectBatabase = () => {
  mongoose
    .connect(process.env.MONGODB)
    .then(() => console.log("Connection to MongoDB established"))
    .catch((err) => console.log("Connection error:" + err));
};

export default connectBatabase;
