// imports
import "./index.scss";
import { Button, Input, Form } from "antd";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import {
  authenticationData,
  authorizationData,
  endpoints,
  googleLoginData,
} from "../../Services/httpClientServer";
// import { GoogleLogin } from "@react-oauth/google";
import { GoogleLogin, useGoogleLogin } from "@react-oauth/google";

import axios from "axios";
import { BASE_URL } from "../../Services/const";

const LoginPage = () => {
  const navigate = useNavigate();

  const onFinish = (values) => {
    authenticationData(`${endpoints.auth}/login`, values).then((res) => {
      try {
        if (res && res.data && res.data.data.success) {
          toast.success(res.data.message);
          localStorage.setItem("token", res.data.data.token.accessToken);
          const token = localStorage.getItem("token");
          if (res.data.data.token.accessToken === token) {
            navigate("/");
          }
          else{
            navigate('/login');
          }
        } else {
          toast.error(res.data.message);
        }
      } catch (error) {
        console.log(error.message);
      }
    });
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  //   !  Code For Create User

  // Code For Google Login

  const handleGoogleLogin = (credentialResponse) => {
    googleLoginData(`${endpoints.auth}/google-login`, credentialResponse).then(
      (res) => {
        console.log(res);
        try {
          if (res && res.data) {
            console.log(res.data.data);
            toast.success(res.data.message);
            localStorage.setItem("token", res.data.token.accessToken);
            navigate("/");
          } else {
            toast.error(res.data.message);
          }
        } catch (error) {
          console.log(error.message);
        }
      }
    );
  };

  // Code For Google Login

  // GOOGLE Login
  const login = useGoogleLogin({
    onSuccess: tokenResponse => console.log(tokenResponse),
  });
  // GOOGLE Login

  return (
    <section className="login">
      <Toaster position="top-right" reverseOrder={false} />
      <div className="container">
        <div className="login-box">
          <div className="form">
            <h1 style={{ textAlign: "center", margin: "20px 0" }}>Login</h1>
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
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <Form.Item
                label="Username"
                name="userNameOrEmail"
                rules={[
                  {
                    required: true,
                    message: "Please input your username!",
                  },
                ]}
              >
                <Input placeholder="Enter your username or email" />
              </Form.Item>

              <Form.Item
                label="Password"
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Please input your password!",
                  },
                ]}
              >
                <Input.Password placeholder="Enter your password" />
              </Form.Item>

              <Form.Item
                wrapperCol={{
                  offset: 8,
                  span: 16,
                }}
              >
                <Button type="primary" htmlType="submit">
                  Log In
                </Button>
              </Form.Item>
            </Form>

            <div className="google">
              <GoogleLogin
                onSuccess={(credentialResponse) => {
                  handleGoogleLogin(credentialResponse);
                  console.log(credentialResponse);
                }}
                onError={() => {
                  console.log("Login Failed");
                }}
                useOneTap
              />
              {/* <Button onClick={() => login()}>Sign in with Google 🚀</Button>; */}

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
