import React, { useState, useEffect } from "react";
import { Modal, Form, Input, Select } from "antd";
import { INewUserModal, IUser } from "../../interfaces/interface";
import uuid from "react-uuid";
import { useUserStore } from "../../store/userStore";
const NewUserModal: React.FC<INewUserModal> = ({
  isModalOpen,
  setIsModalOpen,
}) => {
  const [user, setUser] = useState<IUser>({
    id: uuid(),
    name: "",
    email: "",
    gender: "",
    address: { city: "", street: "" },
    phone: "",
  });
  const addNewUser = useUserStore((store) => store.addNewUser);
  const [form] = Form.useForm();

  useEffect(() => {
    resetForm();
  }, [isModalOpen]);

  const resetForm = () => {
    setUser({
      id: uuid(),
      name: "",
      email: "",
      gender: "",
      address: { city: "", street: "" },
      phone: "",
    });
    form.resetFields();
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = () => {
    addNewUser(user);
    setIsModalOpen(false);
  };

  return (
    <Modal
      forceRender
      open={isModalOpen}
      onOk={form.submit}
      onCancel={handleCancel}
      title={`Create new User`}
      centered
    >
      <Form
        form={form}
        autoComplete="off"
        labelCol={{ span: 9 }}
        wrapperCol={{ span: 8 }}
        onFinish={handleSubmit}
      >
        <Form.Item
          label="Name"
          name="name"
          rules={[
            { required: true, message: "Please enter users name" },
            {
              pattern: /^[a-zA-Z\s]*$/g,
              message: "Please enter only letters",
            },
          ]}
        >
          <Input
            id="name"
            name="name"
            onChange={(e) => {
              setUser({ ...user, [e.target.name]: e.target.value });
            }}
            autoComplete="off"
          />
        </Form.Item>
        <Form.Item
          name="gender"
          label="Gender"
          rules={[{ required: true, message: "Please enter user gender" }]}
        >
          <Select
            onChange={(value) => {
              setUser({ ...user, gender: value });
            }}
            placeholder="Select Gender"
          >
            <Select.Option value="male">Male</Select.Option>
            <Select.Option value="female">Female</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item
          name="email"
          label="Email"
          rules={[
            { required: true, message: "Please enter Email" },
            {
              pattern:
                /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
              message: "Please Enter valid email",
            },
          ]}
        >
          <Input
            name="email"
            onChange={(e) => {
              setUser({ ...user, [e.target.name]: e.target.value });
            }}
            placeholder="input new Email"
          />
        </Form.Item>
        <Form.Item
          name="phone"
          label="Phone"
          rules={[
            { required: true, message: "Please enter Phone" },
            {
              pattern: /^\+1[ \d()-]+$/,
              message: "Please Enter valid Phone number",
            },
          ]}
        >
          <Input
            name="phone"
            onChange={(e) => {
              setUser({ ...user, [e.target.name]: e.target.value });
            }}
            placeholder="input new Phone"
          />
        </Form.Item>
        <Form.Item
          name="city"
          label="City"
          rules={[
            { required: true, message: "Please enter City" },
            {
              pattern: /^[a-zA-Z\s]*$/g,
              message: "Please Enter valid City",
            },
          ]}
        >
          <Input
            onChange={(e) => {
              setUser({
                ...user,
                address: { ...user.address, city: e.target.value },
              });
            }}
            placeholder="input new Address"
          />
        </Form.Item>
        <Form.Item
          name="street"
          label="Street"
          rules={[
            { required: true, message: "Please enter Street" },
            {
              pattern: /^[a-zA-Z\s]*$/g,
              message: "Please Enter valid Street",
            },
          ]}
        >
          <Input
            onChange={(e) => {
              setUser({
                ...user,
                address: { ...user.address, street: e.target.value },
              });
            }}
            placeholder="input new Street"
          />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default NewUserModal;
