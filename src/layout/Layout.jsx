import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";
import { useThemeContext } from "../context/ThemeContext";
import './layout.css'

const Layout = () => {
  const { contextTheme} = useThemeContext();

  return (
    <>
      <div className="flex w-full overflow-hidden pe-2 " id={contextTheme}>
        <Sidebar />
        <div className="w-full  flex-col">
          <Navbar />

          <main className="container mx-auto py-6 sm:px-6 lg:px-8 border-2 border-indigo-600  rounded-xl">
            <Outlet />
          </main>
        </div>
      </div>
    </>
  );
};
export default Layout;
