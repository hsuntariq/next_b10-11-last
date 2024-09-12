"use client";
import React, { useState } from "react";
import { signIn } from "./database/actions/action";
import { useRouter } from "next/navigation";

const Page = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();
  const auth = async (e) => {
    e.preventDefault();
    try {
      const user = await signIn(email, password);
      localStorage.setItem("myUser", JSON.stringify(user));
      router.push("/dashboard");
    } catch (error) {
      setError(error.message || "An error occurred");
    }
  };

  return (
    <div className="min-h-screen bg-white w-full flex items-center justify-center">
      <form
        onSubmit={auth}
        className="w-1/2 mx-auto rounded-md shadow my-5 p-10"
      >
        <h1 className="text-4xl text-center mb-6">Sign In</h1>
        <div className="mb-4">
          <label htmlFor="email" className="block text-lg mb-1">
            Email
          </label>
          <input
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            className="p-3 w-full bg-gray-50 border rounded-sm"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-lg mb-1">
            Password
          </label>
          <input
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            className="p-3 w-full bg-gray-50 border rounded-sm"
            required
          />
        </div>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <button
          type="submit"
          className="bg-purple-500 w-full p-2 rounded-md text-white font-semibold"
        >
          Sign In
        </button>
      </form>
    </div>
  );
};

export default Page;
