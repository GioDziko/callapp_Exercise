import React, { useState } from "react";
import { Layout, Table, Popconfirm, Button, Card } from "antd";
import type { ColumnsType } from "antd/es/table";
import { useUserStore } from "../../store/userStore";
import { DeleteOutlined } from "@ant-design/icons";
import { PacmanLoader } from "react-spinners";
import { IUser } from "../../interfaces/interface";
import styles from "./home.module.css";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../constants/routes";
import UserEditModal from "../../components/modals/UserEditModal";
import NewUserModal from "../../components/modals/NewUserModal";

const { Content } = Layout;

const Home = () => {
  const [isUserChangeModalOpen, setIsUserChangeModalOpen] = useState(false);
  const [isNewUserCreateModalOpen, setisNewUserCreateModalOpen] =
    useState(false);
  const [userToChange, setUserToChange] = useState({} as IUser);
  const navigate = useNavigate();
  const { users, error, isLoading, deleteUser } = useUserStore();

  const columns: ColumnsType<IUser> = [
    {
      title: "Name",
      key: "name",
      dataIndex: "name",
    },
    {
      title: "Email",
      key: "email",
      dataIndex: "email",
      responsive: ["xl", "xxl", "lg", "md"],
    },
    {
      title: "Gender",
      key: "id",
      dataIndex: "gender",
      responsive: ["xl", "xxl", "lg", "md"],
    },
    {
      title: "Phone",
      key: "id",
      dataIndex: "phone",
      responsive: ["xl", "xxl", "lg", "md"],
    },
    {
      title: "Address",
      key: "id",
      dataIndex: "address",
      responsive: ["xl", "xxl", "lg", "md"],
      render: (_, record) =>
        `${record.address.city} / ${record.address.street}`,
    },
    {
      title: "Operations",
      key: "id",
      render: (_, record) => {
        return (
          <Popconfirm
            title="Sure to delete?"
            onConfirm={() => {
              deleteUser(record.id);
            }}
          >
            <Button icon={<DeleteOutlined />} type="dashed" danger>
              Delete
            </Button>
          </Popconfirm>
        );
      },
    },
  ];
  const handleNewUserClick = () => {
    setisNewUserCreateModalOpen(true);
  };
  if (error) {
    navigate(ROUTES.ERROR);
  }

  return (
    <Content className={styles.home__wrapper}>
      <Card className={styles.home__newUser}>
        <Button onClick={handleNewUserClick}>Add new User</Button>
      </Card>
      {isLoading && (
        <Card className={styles.loader}>
          <PacmanLoader className={styles.pacman} size={34} color="#36d7b7" />
        </Card>
      )}
      <UserEditModal
        user={userToChange}
        setUser={setUserToChange}
        setIsModalOpen={setIsUserChangeModalOpen}
        isModalOpen={isUserChangeModalOpen}
      />
      <NewUserModal
        isModalOpen={isNewUserCreateModalOpen}
        setIsModalOpen={setisNewUserCreateModalOpen}
      />
      <Table
        showHeader={true}
        columns={columns}
        dataSource={users}
        rowKey={"id"}
        onRow={(record) => {
          return {
            onDoubleClick: () => {
              setUserToChange(record);
              setIsUserChangeModalOpen(true);
            },
          };
        }}
      />
    </Content>
  );
};

export default Home;
