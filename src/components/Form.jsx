import { Button, Form, Input, InputNumber } from "antd";
import React, { useContext } from "react";
import { GlobalHelperContext } from "../App";
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

/* eslint-disable no-template-curly-in-string */
const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
  },
};
/* eslint-enable no-template-curly-in-string */

const UserForm = () => {
  const globalHelperContext = useContext(GlobalHelperContext);

  return (
    <Form
      {...layout}
      name="edit-form"
      initialValues={{
        name: globalHelperContext.singleUser.name,
        email: globalHelperContext.singleUser.email,
        phone: globalHelperContext.singleUser.phone,
        website: globalHelperContext.singleUser.website,
      }}
      onFinish={(values) =>
        globalHelperContext.submitHandler({
          id: globalHelperContext.singleUser.id,
          ...values,
        })
      }
      validateMessages={validateMessages}
    >
      <Form.Item
        label="Name"
        name="name"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="email"
        label="Email"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="phone"
        label="Phone"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="website"
        label="Website"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
    </Form>
  );
};
export default UserForm;
