import { useContext, useState } from "react";
import {
  ArrowRightOnRectangleIcon,
  BuildingOfficeIcon,
  FolderIcon,
  Squares2X2Icon,
  StopIcon,
  UserIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";
import { Link, useNavigate } from "react-router-dom";
import ReactSwitch from "react-switch";
import { useThemeContext } from "../context/ThemeContext";
import { AuthContext } from "../context/AuthContext";
import '../app.css'
const Sidebar = () => {
  const { contextTheme, setContextTheme } = useThemeContext();
  const { dispatch } = useContext(AuthContext);

  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/login");
  };

  const [checked, setChecked] = useState(false);

  const handleSwitch = (nextChecked) => {
    setContextTheme((state) => (state === "Light" ? "Dark" : "Light"));
    setChecked(nextChecked);
  
  };
 
  return (
    <div className="flex-none w-24 h-screen text-white p-7 overflow-hidden  lg:hover:w-60 text-lg left-0 group transition duration-700 ease-in-out" id={contextTheme}>
      <div className="fixed left-3 ">
        <div className="mt-5">
          <ul>
            <li className="lg:hover:rounded-xl lg:hover:bg-orange-200 px-2 py-1 mr-2">
              <Link className="flex gap-3 m-3 " to="/">
                <Squares2X2Icon className="h-6 w-6 text-gray-500" />
                <span className="ms-4 font-semibold invisible lg:group-hover:visible">
                  Dashboard
                </span>
              </Link>
            </li>
          </ul>
        </div>
        <ul className="m-3">
          <li className="lg:hover:rounded-xl lg:hover:bg-orange-200 px-2 py-1 mr-2">
            <Link className="p-3 flex gap-3" to="/user">
              <UsersIcon className="h-6 w-6 text-gray-500" />
              <span className="ms-4 font-medium text-base invisible lg:group-hover:visible">
                Usuario
              </span>
            </Link>
          </li>
          <li className="lg:hover:rounded-xl lg:hover:bg-orange-200 px-2 py-1 mr-2">
            <Link className="p-3 flex gap-3" to="hotel">
              <BuildingOfficeIcon className="h-6 w-6 text-gray-500" />
              <span className="ms-4 font-medium text-base invisible lg:group-hover:visible">
                Hotel
              </span>
            </Link>
          </li>
          <li className="lg:hover:rounded-xl lg:hover:bg-orange-200 px-2 py-1 mr-2">
            <Link className="p-3 flex gap-3" to="room">
              <FolderIcon className="h-6 w-6 text-gray-500" />
              <span className="ms-4 font-medium text-base invisible lg:group-hover:visible">
                Habitación
              </span>
            </Link>
          </li>
          <li className="lg:hover:rounded-xl lg:hover:bg-orange-200 px-2 py-1 mr-2">
            <Link className="p-3 flex gap-3 " to="profile">
              <UserIcon className="h-6 w-6 text-gray-500" />
              <span className="ms-4 font-medium text-base invisible lg:group-hover:visible">
                Perfil
              </span>
            </Link>
          </li>
          <li className="lg:hover:rounded-xl lg:hover:bg-orange-200 px-2 py-1 mr-2">
            <Link className="p-3 flex gap-3 ">
              <ArrowRightOnRectangleIcon className="h-6 w-6 text-gray-500" />
              <span
                className="ms-4 font-medium text-base invisible lg:group-hover:visible"
                onClick={handleLogout}
              >
                Cerrar sesión
              </span>
            </Link>
          </li>
          <li className="flex pt-4 group-hover:ps-5">
            <ReactSwitch
              onChange={handleSwitch}
              checked={checked}
              onColor="#86d3ff"
              onHandleColor="#2693e6"
              handleDiameter={26}
              uncheckedIcon={false}
              checkedIcon={false}
              boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
              activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
              height={20}
              width={48}
              className="react-switch"
              id="material-switch"
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;

