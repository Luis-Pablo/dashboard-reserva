import { WalletIcon } from "@heroicons/react/24/outline";

const Profile = () => {
  return (
    <div className="basis-full flex flex-col">
      <h3 className="text-center font-bold text-xl mb-4">Crear usuario</h3>
      <div className="basis-full flex flex-col lg:flex-row gap-10">
        <div className="basis-full md:basis-1/2 mt-5">
          <div class="flex items-center justify-center w-full mb-6">
            <label
              for="dropzone-file"
              class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
            >
              <div class="flex flex-col items-center justify-center pt-5 pb-6">
                <label>
                  <WalletIcon className="h-6 w-6 text-gray-500" />

                  <input
                    type="file"
                    name="file"
                    id="file"
                    placeholder="hola"
                    className="hidden"
                  />
                </label>
                <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
                  <span class="font-semibold">Haga clic para cargar</span>
                </p>
                <p class="text-xs text-gray-500 dark:text-gray-400">
                  SVG, PNG, JPG
                </p>
              </div>
              <input id="dropzone-file" type="file" class="hidden" />
            </label>
          </div>
        </div>
        <div className="basis-full md:basis-1/2 flex flex-col xl:flex-row gap-6 ">
          <div className="basis-full lg:basis-1/2 ">
            <div className="mt-6">
              <label
                htmlFor="username"
                className="block mb-2 text-sm font-medium text-gray-900 mx-1"
              >
                Usuario
              </label>
              <input
                type="text"
                id="username"
                name="username"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-4 h-10"
                placeholder="Usuario"
                required
              />
            </div>
            <div className="mt-6">
              <label
                htmlFor="firstName"
                className="block mb-2 text-sm font-medium text-gray-900 mx-1"
              >
                Nombre
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-4 h-10"
                placeholder="Nombre"
                required
              />
            </div>
            <div className="mt-6">
              <label
                htmlFor="lastName"
                className="block mb-2 text-sm font-medium text-gray-900 mx-1"
              >
                Apellido
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-4 h-10"
                placeholder="Apellido"
              />
            </div>
          </div>
          <div className="basis-full lg:basis-1/2 ">
            <div className="mt-6">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 mx-1"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-4 h-10"
                placeholder="email"
                required
              />
            </div>
            <div className="mt-6">
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-900 mx-1"
              >
                Contraseña
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-4 h-10"
                placeholder="password"
                required
              />
            </div>
            <div className="mt-6">
              <label
                htmlFor="address"
                className="block mb-2 text-sm font-medium text-gray-900 mx-1"
              >
                Dirección
              </label>
              <input
                type="text"
                id="address"
                name="address"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-4 h-10"
                placeholder="Dirección"
                required
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
