import { useEffect, useState } from "react";
import styles from "./index.module.scss";
import { NavLink } from "react-router-dom";

import { Table, Button, Modal } from "antd";
import {
  deleteData,
  endpoints,
  getAllData,
} from "../../Services/httpClientServer";
import toast, { Toaster } from "react-hot-toast";

const TableComponent = ({ endpoint }) => {
  // Data works
  const [datas, setDatas] = useState([]);
  const [columns, setColumns] = useState([]);

  useEffect(() => {
    getAllData(`${endpoint}`)
      .then((res) => {
        setDatas(res.data);
        generateColumns(res.data);

        console.log(res);
      })
      .catch((err) => {
        // console.error("Data fetch error: ", err);
        setDatas([]);
        setColumns([]);
      });
  }, []);

  // Handle Update

  const [updateData, setUpdateData] = useState(null);

  function getSelectData(idParam) {
    const findData = datas.find((d) => d.id === idParam);
    setUpdateData(findData);
  }

  // Handle Update

  const generateColumns = (data) => {
    if (data.length === 0) {
      setColumns([]);
      return;
    }

    const sampleItem = data[0];
    const generatedColumns = Object.keys(sampleItem).map((key) => ({
      title: key.charAt(0).toUpperCase() + key.slice(1), // Capitalize the first letter
      dataIndex: key,
    }));

    generatedColumns.push(
      {
        title: "Delete",
        dataIndex: "delete",
        render: (text, record) => (
          <Button
            type="primary"
            danger
            onClick={() => {
              showModal(record.id);
            }}
          >
            Delete
          </Button>
        ),
      },
      {
        title: "Update",
        dataIndex: "update",
        render: (text, record) => (
          <Button
            style={{ backgroundColor: "green" }}
            type="primary"
            danger
            onClick={() => {
              getSelectData(record.id);
            }}
          >
            <NavLink to={`/update-${endpoint}`}>Update</NavLink>
          </Button>
        ),
      }
    );

    setColumns(generatedColumns);
  };

  // Data works

  // ? Table Columns
  //   const columns = [
  //     {
  //       title: "Industry Name",
  //       dataIndex: "name",
  //     },
  //     {
  //       title: "Create Date",
  //       dataIndex: "createDate",
  //     },
  //     {
  //       title: "Update Date",
  //       dataIndex: "updateDate",
  //     },
  //     {
  //       title: "Delete",
  //       dataIndex: "delete",
  //       render: (text, record) => (
  //         <Button type="primary" danger onClick={() => handleDelete(record.id)}>
  //           Delete
  //         </Button>
  //       ),
  //     },
  //   ];

  const columnData =
    datas &&
    datas.map((data, index) => ({
      key: index,
      ...data,
    }));
  // ? Table Columns

  //   Function for Render Table
  function renderTable() {
    // eslint-disable-next-line react/prop-types
    getAllData(`${endpoint}`)
      .then((res) => {
        if (res.data && res.data.length > 0) {
          setDatas(res.data);
        } else {
          setDatas([]);
          toast.error("No company data found");
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        toast.error("Error fetching company data");
      });
  }
  //   Function for Render Table

  // !  Delete Data

  function handleDelete(id) {
    console.log(endpoint, id);
    deleteData(endpoint, id).then((res) => {
      console.log(res.data);
      if (res.data.data.success) {
        renderTable();
        toast.success("Industry deleted successfully");
      } else {
        toast.error("Data deleted feild");
      }
    });
  }
  // !  Delete Data

  // Modal Confgiguration for delete
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [idValue, setIdValue] = useState(null);
  const showModal = (id) => {
    setIdValue(id);
    setIsModalOpen(true);
  };
  const handleOk = () => {
    handleDelete(idValue);
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  // Modal Confgiguration for delete

  return (
    <section>
      <Toaster position="top-right" reverseOrder={false} />
      <div className={styles["table"]}>
        <Table
          columns={columns}
          dataSource={columnData}
          pagination={{ pageSize: 5 }}
        />

        <span>
          <Modal
            title="Datanı Sil"
            open={isModalOpen}
            onOk={handleOk}
            onCancel={handleCancel}
          >
            <p>Datanı silməyə əminsiniz?</p>
          </Modal>
        </span>
      </div>
    </section>
  );
};

export default TableComponent;
