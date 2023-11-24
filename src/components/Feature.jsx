import { ArrowDownIcon } from "@heroicons/react/24/outline";

const Featured = () => {
  return (
    <div className="w-60 h-40 rounded-2xl flex flex-col p-4 border-1 border-gray-100 shadow-md sm:flex-grow sm:m-3 ">
      <h3 className="text-center">Hotel Uno</h3>
      <hr className="border-1" />
      <div className="w-30 flex flex-row">
        <div className="w-1/2 flex flex-col">
          <span>Ocupación</span>

          <span>Total</span>
          <span>Mes anterior</span>
        </div>
        <div className="w-30 flex flex-col justify-end ps-14 ">
          <span>60%</span>
          <span>100</span>
          <span>2%</span>
        </div>
      </div>
    </div>
  );
};

export default Featured;
