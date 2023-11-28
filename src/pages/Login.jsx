import {useContext, useState} from "react";
import { AuthContext } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";


const forgotPassword = false;

const Login = () => {
  const [credentials, setCredentials] = useState({
    username: undefined,
    password: undefined,
  });
  const [checked, setChecked] = useState(false)

  const { error, dispatch, loading } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const host = import.meta.env.VITE_REACT_APP_HOST;
  const login = async (e) => {
    e.preventDefault();

    dispatch({ type: "LOGIN_START" });

    try {
      toast.loading("Espere...", {
          duration: 1000,
          position: "top-center",
        });
      const res = await axios.post(`${host}/auth/login`, credentials);
      toast.dismiss();
     
    
      if (res.data.isAdmin) {
        dispatch({ type: "LOGIN_SUCCESS", payload: res.data.details });
       
        toast.success("Bienvenido al sistema", {
          duration: 2000,
          position: "top-right",
        });
        
        setTimeout(() => {
          navigate("/");
          toast.dismiss();
        }, 1500);
        
      } else {
        
        toast.error(`Error de acceso`, {
          duration: 2000,
          position: "top-right",
        });
        dispatch({ type: "LOGIN_FAILURE", payload: {message: 'No autorizado'} });
        toast.dismiss();
      }
      
    } catch (err) {
      toast.error(`Error de acceso: ${err.response.data.message}`, {
        duration: 2000,
        position: "top-right",
      });
      dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
    }
  };
  const notify = () => toast("Here is your toast.");
  return (
    <>
      <div>
        <Toaster />
      </div>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Iniciar sesión
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Usuario
              </label>
              <div className="mt-2">
                <input
                  id="username"
                  type="text"
                  onChange={handleChange}
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Contraseña
                </label>
                {forgotPassword && (
                  <div className="text-sm">
                    <Link
                      to="#"
                      className="font-semibold text-indigo-600 hover:text-indigo-500"
                    >
                      Olvido su contraseña?
                    </Link>
                  </div>
                )}
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  onChange={handleChange}
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                onClick={login}
                disabled={loading}
              >
                Ingresar
              </button>
            </div>
          </form>
          {error && <span>{error.message}</span>}
          <div className="flex flex-col mt-10 gap-1">
            <div className="flex justify-center gap-3 ">
              <label htmlFor="checkbox" className="gap-4 ">
                Clic para ver usuario y contraseña
              </label>
              <input
                type="checkbox"
                id="checkbox"
                name="checkbox"
                className="flex justify-center "
                checked={checked}
                onClick={() => setChecked(!checked)}
              />
            </div>
            <span className="text-center text-gray-400">
              {checked && `usuario: pablo`}
            </span>
            <span className="text-center text-gray-400">
              {checked && `contraseña: 1234`}
            </span>
          </div>

          {forgotPassword && (
            <p className="mt-10 text-center text-sm text-gray-500">
              Not a member?{" "}
              <Link
                to="#"
                className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
              >
                Comienza 14 días gratis
              </Link>
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default Login;
