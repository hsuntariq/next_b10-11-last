import { connectDB } from "../config/connect";
import { User } from "../models/User";

export const getUsers = async (q) => {
  connectDB();
  const regex = new RegExp(q, "i");
  const users = await User.find({ username: { $regex: regex } });
  return users;
};
