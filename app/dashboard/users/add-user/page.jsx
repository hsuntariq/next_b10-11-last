import Button from "@/app/components/Button";
import { addUser } from "@/app/database/actions/action";
import React from "react";
import { CircleLoader } from "react-spinners";
const page = () => {
  return (
    <>
      <div className="container w-[90%] my-4 rounded-md  mx-auto  bg-[#192237] p-5">
        <form action={addUser} className="text-white">
          <div className="flex gap-3">
            <input
              type="text"
              placeholder="Username"
              className="p-3  bg-[#151C2D] w-full outline-none my-2"
              name="username"
            />
            <input
              type="text"
              placeholder="Email"
              className="p-3 bg-[#151C2D] w-full outline-none my-2"
              name="email"
            />
          </div>
          <div className="flex gap-3">
            <input
              type="text"
              placeholder="Phone"
              className="p-3 bg-[#151C2D] w-full outline-none my-2"
              name="phone"
            />
            <input
              type="password"
              placeholder="Password"
              className="p-3 bg-[#151C2D] w-full outline-none my-2"
              name="password"
            />
          </div>
          <div className="flex gap-3">
            <select
              name="role"
              id=""
              className="p-3 bg-[#151C2D] w-full outline-none my-2"
            >
              <option disabled>Choose Status</option>
              <option value>Admin</option>
              <option value="0">User</option>
            </select>
            <select
              name="status"
              id=""
              className="p-3 bg-[#151C2D] w-full outline-none my-2"
            >
              <option disabled>Choose Status</option>
              <option value="1">Active</option>
              <option value="0">In Active</option>
            </select>
          </div>
          <textarea
            className="p-3 bg-[#151C2D] w-full outline-none my-2"
            name="message"
            cols=""
            rows="5"
            id=""
          ></textarea>
          <Button
            loader={<CircleLoader size={20} color="white" />}
            content="Add User"
            color="bg-green-600"
            loadingColor="bg-green-800"
          />
        </form>
      </div>
    </>
  );
};

export default page;
