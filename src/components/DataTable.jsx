import { useEffect, useState } from "react";
import MaterialTable from "@material-table/core";
import { WalletIcon } from "@heroicons/react/24/outline";
import "./dataTable.css";
import axios from "axios";

const DataTable = ({ title, columns, dataTab, path }) => {
  const [data, setData] = useState(dataTab);
 

  const host = import.meta.env.VITE_REACT_APP_HOST;

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${host}/${path}/${id}`)
    } catch (error) {
      console.log(error);
    }
  };


  const handleUpdate = async (id, newData) => {
    try {
      const update = {
        ...newData
      }
      await axios.put(`${host}/${path}/${id}`, update);
    } catch (error) {
      console.log(error);
    }
  }

  const create = async (newData) => {
    const {_id} = newData
    try {
      const create = {
        ...newData,
      };
      await axios.post(`${host}/${path}`, create);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    setData(dataTab)
  },[data])
 

  // Helper function
  function getNewDataBulkEdit(changes, copyData) {
    // key matches the column data id
    const keys = Object.keys(changes);
    for (let i = 0; i < keys.length; i++) {
      if (changes[keys[i]] && changes[keys[i]].newData) {
        // Find the data item with the same key in copyData[]
        let targetData = copyData.find((el) => el.id === keys[i]);
        if (targetData) {
          let newTargetDataIndex = copyData.indexOf(targetData);
          copyData[newTargetDataIndex] = changes[keys[i]].newData;
        }
      }
    }
    console.log(copyData);
    return copyData;
  }

  return (
    <div className="flex flex-grow p-2 flex-shrink ">
      <MaterialTable
        id="material"
        style={{
          width: 340,
          flexShrink: 3,
          flexGrow: 1,
          borderRadius: 10,
        }}
        title={title}
        data={dataTab}
        columns={columns}
        editable={{
          onBulkUpdate: (changes) => {
            return new Promise((resolve, reject) => {
              setTimeout(() => {
                let copyData = [...data];
                setData(getNewDataBulkEdit(changes, copyData));
                resolve();
              }, 1000);
            });
          },
          onRowAddCancelled: (rowData) => console.log("Row adding cancelled"),
          onRowUpdateCancelled: (rowData) =>
            console.log("Row editing cancelled"),
          onRowAdd: (newData) => {
            create(newData);
            return new Promise((resolve, reject) => {
              setTimeout(() => {
                setData([...data, newData]);
                resolve();
              }, 1000);
            });
          },
          onRowUpdate: (newData, oldData) => {
            const { _id } = newData;
            handleUpdate(_id, newData);
            return new Promise((resolve, reject) => {
              setTimeout(() => {
                const dataUpdate = [...data];
                // In dataUpdate, find target
                const target = dataUpdate.find((el) => el.id === oldData.id);
                const index = dataUpdate.indexOf(target);
                dataUpdate[index] = newData;
                setData(dataUpdate);
                resolve();
              }, 1000);
            });
          },
          onRowDelete: (oldData) => {
            handleDelete(oldData._id);
            return new Promise((resolve, reject) => {
              setTimeout(() => {
                const dataDelete = data.filter((el) => el.id !== oldData.id);
                setData(dataDelete);
                resolve();
              }, 1000);
            });
          },
        }}
        actions={[
          {
            icon: () => (
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
            ),
            tooltip: "Save User",
            onClick: (event, rowData) => {},
          },
        ]}
      />
    </div>
  );
};

export default DataTable;
