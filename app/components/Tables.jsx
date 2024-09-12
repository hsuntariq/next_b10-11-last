import React from "react";

const Tables = () => {
  return (
    <>
      <div className="p-4 bg-[rgba(25,34,55)] rounded-md my-5 w-full mx-auto text-white">
        <h1 className="text-gray-300 my-4 text-3xl">Latest Transaction</h1>
        <table className="text-white w-full  text-center capitalize">
          <thead>
            <tr>
              <th className="border border-[#151C2D] p-3">id</th>
              <th className="border border-[#151C2D] p-3">name</th>
              <th className="border border-[#151C2D] p-3">date</th>
              <th className="border border-[#151C2D] p-3">amount</th>
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: 5 }).map((_, index) => {
              return (
                <tr key={index} className="">
                  <td className="p-3 font-bold border border-[#151C2D]">
                    {index + 1}
                  </td>
                  <td className="p-3 font-bold border border-[#151C2D]">Ali</td>
                  <td className="p-3 font-bold border border-[#151C2D]">
                    {`${new Date().getDate()} /
                      ${new Date().getMonth() + 1} /
                      ${new Date().getFullYear()}`}
                  </td>
                  <td className="p-3 font-bold border border-[#151C2D]">
                    ${(Math.random() * 30000).toFixed(0)}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Tables;
