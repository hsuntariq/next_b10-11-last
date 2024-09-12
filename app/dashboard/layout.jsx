import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

export default function RootLayout({ children }) {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-between gap-4 ">
        <Sidebar />
        <div className="flex flex-col w-full md:w-[70%] lg:w-[80%] self-start items-center justify-center">
          <Navbar />
          {children}
        </div>
      </div>
    </>
  );
}
