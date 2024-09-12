import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://pnyrwplecture:hello123@cluster0.83ttq.mongodb.net/dashboard?retryWrites=true&w=majority&appName=Cluster0"
  );
  console.log(`Database connected on host:${mongoose.connection.host}`);
};
