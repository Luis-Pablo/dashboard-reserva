import DataTable from "../components/DataTable"
import useFetch from "../hooks/useFetch"
import { columnsRoom } from "../../DataColumns";

const Room = () => {
   const { data, loading, error } = useFetch("/rooms");



  return (
    <DataTable
      title="Habitaciones"
      dataTab={data}
      columns={columnsRoom}
      path="rooms"
    />
  );
}

export default Room