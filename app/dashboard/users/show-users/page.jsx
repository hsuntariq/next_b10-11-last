import Button from "@/app/components/Button";
import { deleteUser } from "@/app/database/actions/action";
import { connectDB } from "@/app/database/config/connect";
import { getUsers } from "@/app/database/fetching/fetch";
import React from "react";
import { CircleLoader, DotLoader, FadeLoader } from "react-spinners";

const page = async ({ searchParams }) => {
  const { q } = searchParams;
  const users = await getUsers(q);
  console.log(users);
  return (
    <>
      <div className="container mx-auto w-[90%] rounded-md">
        <table className="w-full text-white text-center capitalize">
          <thead>
            <tr>
              <td className="p-4 border-zinc-700 border">id</td>
              <td className="p-4 border-zinc-700 border">name</td>
              <td className="p-4 border-zinc-700 border">email</td>
              <td className="p-4 border-zinc-700 border">phone</td>
              <td className="p-4 border-zinc-700 border">role </td>
              <td className="p-4 border-zinc-700 border">active</td>
              <td className="p-4 border-zinc-700 border">message</td>
              <td className="p-4 border-zinc-700 border">upadate</td>
              <td className="p-4 border-zinc-700 border">delete</td>
            </tr>
          </thead>
          <thead>
            {users?.map((item, index) => {
              return (
                <tr key={index}>
                  <td className="p-4 border-zinc-700 border   ">{index + 1}</td>
                  <td className="p-4 border-zinc-700 border   ">
                    {item?.username}
                  </td>
                  <td className="p-4 border-zinc-700 border   ">
                    {item?.email}
                  </td>
                  <td className="p-4 border-zinc-700 border   ">
                    {item?.phone}
                  </td>
                  <td className="p-4 border-zinc-700 border   ">
                    {item?.role == 1 ? "Admin" : "User"}
                  </td>
                  <td className="p-4 border-zinc-700 border   ">
                    {item?.status == 1 ? "Active" : "Inactive"}
                  </td>
                  <td className="p-4 border-zinc-700 border   ">
                    {item?.message}
                  </td>
                  <td className="p-4 border-zinc-700 border   ">
                    <button className="bg-fuchsia-600 p-2 px-4 rounded-md">
                      Update
                    </button>
                  </td>
                  <td className="p-4 border-zinc-700 border   ">
                    <form action={deleteUser}>
                      <input type="hidden" name="id" value={item?._id} />

                      <Button
                        loader={<CircleLoader size={20} color="white" />}
                        content="Delete"
                        color="bg-red-600"
                        loadingColor="bg-red-800"
                      />
                    </form>
                  </td>
                </tr>
              );
            })}
          </thead>
        </table>
      </div>
    </>
  );
};

export default page;
