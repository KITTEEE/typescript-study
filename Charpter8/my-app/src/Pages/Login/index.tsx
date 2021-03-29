import {useState} from 'react'
import { Form, Input, Button,message } from 'antd';
import { LockOutlined } from '@ant-design/icons';
import qs from 'qs';
import axios from 'axios';
import './login.css';
import { Redirect } from 'react-router-dom';

interface formValues {
  password:string
}

const NormalLoginForm = () => {
  const [isLogin,setIsLogin] = useState(false);
  const onFinish = (values:formValues)=> {
    console.log(values);
    axios.post('/api/login', qs.stringify({password:values.password}),{
      headers:{ 'Content-type':'application/x-www-form-urlencoded'}
    }).then(res=> {
      if(res.data.data) {
          setIsLogin(true);
      }else {
        message.error('登录失败')
      }
    })
  };

  return isLogin ? <Redirect to="/"></Redirect> : (
    <div className="login-page">
      <Form
        name="normal_login"
        className="login-form"
        onFinish={onFinish}
      >
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: '请输入密码',
            },
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Log in
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default NormalLoginForm
