import { Button, Form, Input } from "antd";
import React from "react";

function ProfileForm() {
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  return (
    <>
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          maxWidth: 600,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item
          label="E-mail"
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your email!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="E-mail"
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your email!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          wrapperCol={{
            offset: 0,
            span: 0,
          }}
        >
          <Button
            style={{
              width: "100%",
            }}
            type="primary"
            htmlType="submit"
          >
            Connect Wallet
          </Button>
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 16,
            span: 0,
          }}
        >
          <Button type="primary" htmlType="submit">
            Update
          </Button>
        </Form.Item>
      </Form>
    </>
  );
}

export default ProfileForm;
