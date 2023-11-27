const dataTemp = [
  {
    name: "Hotel Carrera",
    occupied: 65,
    total: 100,
    lastMonth: 50,
  },
  {
    name: "Hotel Rodríguez",
    occupied: 70,
    total: 60,
    lastMonth: 55,
  },
  {
    name: "Hotel O'Higgins",
    occupied: 70,
    total: 100,
    lastMonth: 50,
  },
  {
    name: "Hotel Infante",
    occupied: 65,
    total: 60,
    lastMonth: 70,
  },
  {
    name: "Hotel Bello",
    occupied: 45,
    total: 75,
    lastMonth: 40,
  },
  {
    name: "Hotel Portales",
    occupied: 60,
    total: 50,
    lastMonth: 50,
  },
  {
    name: "Hotel Prat",
    occupied: 50,
    total: 120,
    lastMonth: 50,
  },
  {
    name: "Hotel Balmaceda",
    occupied: 60,
    total: 100,
    lastMonth: 50,
  },
];

const Featured = () => {
  return (
    <>
      {dataTemp.map((item) => (
        <div className="w-60 h-40 rounded-2xl flex flex-col p-4 border-1 border-gray-100 shadow-md flex-grow  sm:m-3 ">
          <h3 className="text-center">{item.name}</h3>
          <hr className="border-1" />
          <div className="w-30 flex flex-row">
            <div className="w-1/2 flex flex-col">
              <span>Ocupación</span>

              <span>Total</span>
              <span>Mes anterior</span>
            </div>
            <div className="w-30 flex flex-col justify-end ps-14 ">
              <span>{item.occupied}%</span>
              <span>{item.total}</span>
              <span>{item.lastMonth}%</span>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Featured;
