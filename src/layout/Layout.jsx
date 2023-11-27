import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";
import { useThemeContext } from "../context/ThemeContext";
import '../app.css'

const Layout = () => {
  const { contextTheme} = useThemeContext();

  return (
    <>
      <div className="flex overflow-hidden pe-2 " id={contextTheme}>
        <Sidebar />
        <div className="w-full  flex-col">
          <Navbar />

          <main className="w-full py-6 px-6 lg:px-8 border-2 border-indigo-600  rounded-xl">
            <Outlet />
          </main>
        </div>
      </div>
    </>
  );
};
export default Layout;
