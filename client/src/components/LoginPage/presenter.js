import React from 'react';
import { Form, Input, Button, Checkbox, Typography } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

// xs   <   sm   <   md   <   lg   <   xl   <   xxl
//     576      768      992      1200     1600
// span 24를 최대로 본다.
// offset은 앞에 공간.

const LoginPage = (props) => {
  return (
    <div style={{ margin: 'auto' }}>
      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <Typography.Title level={2}>로그인</Typography.Title>
      </div>
      <Form initialValues={{ remember: true, id: props.id }} style={{ minWidth: '360px', display: 'flex', flexDirection: "column" }} onFinish={props.onSubmitHandler}>
        <Form.Item
          name="id"
          rules={[
            {
              required: true,
              message: '아이디를 입력하세요!',
            },
          ]}
        >
          <Input
            id="id"
            prefix={<UserOutlined style={{ color: 'rgba(0,0,0,.25)', marginRight: '.5rem' }} />}
            placeholder="Enter your ID"
            type="text"
            defaultValue={props.id}
          />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: '패스워드를 입력하세요!',
            },
          ]}
        >
          <Input.Password
            id="password"
            prefix={<LockOutlined style={{ color: 'rgba(0,0,0,.25)', marginRight: '.5rem' }} />}
            placeholder="Enter your password"
          />
        </Form.Item>

        <Form.Item name="remember" valuePropName="checked">
          <Checkbox>아이디 기억하기</Checkbox>
        </Form.Item>

        <Form.Item >
          <Button type="primary" htmlType="submit" className="login-form-button" style={{ minWidth: '100%' }}>
            로그인
        </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
export default LoginPage