import DataTable from "../components/DataTable";
import useFetch from "../hooks/useFetch";
import { columnsHotel } from "../../DataColumns";



const Hotel = () => {
  const { data, loading, error } = useFetch("/hotels");
  
  console.log(data);
  console.log(columnsHotel);

  return (
    <div className="flex">
      <DataTable
        title="hotels"
        dataTab={data}
        columns={columnsHotel}
        path="hotels"
      />
    </div>
  );
};

export default Hotel;
