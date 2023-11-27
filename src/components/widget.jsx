import { ArrowSmallUpIcon, UserIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
'../app.css';

const Widget = ({ type }) => {
  let data;

  switch (type) {
    case "lastMonth":
      data = {
        title: "Ocupación mes anterior",
        total: 600,
        percent: 60,
        link: <Link to="/hotels">Ver</Link>,
      };
      break;
    case "currentMonth":
      data = {
        title: "Ocupación mes actual",
        total: 600,
        percent: 65,
        link: <Link to="/hotels">Ver</Link>,
      };
      break;
    default:
      break;
  }

  return (
    <div
      className="w-60 h-40 flex  rounded-2xl p-4 bg-red-100 sm:flex-grow sm:m-3 widget "
      id="widget"
    >
      <div className="w-1/2 flex flex-col space-y-4">
        <span className="h-2/6 text-base font-bold text-gray-500">
          {data.title}
        </span>
        <span className="h-2/6 text-3xl">{data.total}</span>
        <span className="h-2/6">{data.link}</span>
      </div>
      <div className="w-1/2 text-sm">
        <div className="flex flex-row h-3/4 justify-end">
          <ArrowSmallUpIcon className="h-6 w-6 text-gray-500 font-semibold" />
          {data.percent}%
        </div> 
        <div className="flex justify-end">
          <UserIcon className=" after:only:h-6 w-6 text-gray-500" />
        </div>
      </div>
    </div>
  );
};

export default Widget;
