import { ArrowSmallUpIcon, UserIcon } from "@heroicons/react/24/outline";
'./widget.css'
const Widget = ({ type }) => {
  let data;



  switch (type) {
    case "user":
      data = {
        title: "USERS",
        isMoney: false,
        link: "See all users",
        icon: <UserIcon className="h-6 w-6 text-gray-500" />,
      };
      break;
    case "order":
      data = {
        title: "ORDERS",
        isMoney: false,
        link: "View all orders",
        icon: <UserIcon className="h-6 w-6 text-gray-500" />,
      };
      break;
    case "earning":
      data = {
        title: "EARNINGS",
        isMoney: true,
        link: "View net earnings",
        icon: <UserIcon className="h-6 w-6 text-gray-500" />,
      };
      break;
    case "balance":
      data = {
        title: "BALANCE",
        isMoney: true,
        link: "See details",
        icon: <UserIcon className="h-6 w-6 text-gray-500" />,
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
        <span className="h-2/6 text-base font-bold text-gray-500">Hotel</span>
        <span className="h-2/6 text-3xl">100</span>
        <span className="h-2/6">Link</span>
      </div>
      <div className="w-1/2 text-sm">
        <div className="flex flex-row h-3/4 justify-end">
          <ArrowSmallUpIcon className="h-6 w-6 text-gray-500 font-semibold" />
          100%
        </div>
        <div className="flex justify-end">
          <UserIcon className=" after:only:h-6 w-6 text-gray-500" />
        </div>
      </div>
    </div>
  );
};

export default Widget;
