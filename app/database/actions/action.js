"use server";

import { revalidatePath } from "next/cache";
import { User } from "../models/User";

export const addUser = async (formData) => {
  const { username, email, password, role, phone, status, message } =
    Object.fromEntries(formData);

  // send data to the database
  const newUser = await User.create({
    username,
    email,
    password,
    role,
    phone,
    status,
    message,
  });

  revalidatePath("/dashboard/users/show-users");
};

export const deleteUser = async (formData) => {
  const { id } = Object.fromEntries(formData);
  await User.findByIdAndDelete(id);
  revalidatePath("/dashboard/users/show-users");
};

export const signIn = async (email, password) => {
  const findUser = await User.findOne({ email: email });
  if (!findUser) {
    throw new Error("Invalid Email");
  } else {
    if (findUser.password == password) {
      const user = {
        username: findUser.username,
        email: findUser.email,
      };
      return user;
    } else {
      throw new Error("Invalid Password");
    }
  }
};
