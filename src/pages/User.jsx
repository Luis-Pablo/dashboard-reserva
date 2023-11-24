import React from 'react'
import DataTable from '../components/DataTable'
import useFetch from '../hooks/useFetch';
import { columnsUser } from '../../DataColumns';
const User = () => {

  const { data, error, loading } = useFetch("/users");
  

  return (
    <div className="flex w-full">
      <DataTable title="user" columns={columnsUser} path="users" dataTab={data} />
    </div>
  );
}

export default User