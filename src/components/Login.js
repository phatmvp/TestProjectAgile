import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Gửi yêu cầu POST đến endpoint /auth/login
      const response = await axios.post("/auth/login", { username });

      // Điều hướng nếu đăng nhập thành công
      if (response.status === 200) {
        const { accessToken, refreshToken } = response.data;

        // Lưu accessToken vào localStorage/sessionStorage
        localStorage.setItem("accessToken", accessToken);
        localStorage.setItem("refreshToken", refreshToken);

        // Điều hướng đến dashboard sau khi đăng nhập thành công
        navigate("/dashboard");
      }
    } catch (error) {
      console.error("Login failed", error);
    }
  };

  // Hàm tự động refresh accessToken khi hết hạn sau 1 phút
  const refreshAccessToken = async () => {
    try {
      const refreshToken = localStorage.getItem("refreshToken");
      const response = await axios.post("/auth/refresh-token", {
        refreshToken,
      });

      if (response.status === 200) {
        const { accessToken } = response.data;
        localStorage.setItem("accessToken", accessToken); // Cập nhật accessToken mới
      }
    } catch (error) {
      console.error("Failed to refresh access token", error);
    }
  };

  // Sử dụng setTimeout để kiểm tra và làm mới accessToken sau 1 phút
  setTimeout(() => {
    refreshAccessToken();
  }, 60000); // 60000ms = 1 minute

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <form onSubmit={handleSubmit} className="text-center">
        <h1 className="mb-4">Sign In</h1>
        <div
          className="mb-3"
          style={{ width: "300px", margin: "auto", textAlign: "left" }}
        >
          <label
            htmlFor="username"
            className="form-label"
            style={{ fontSize: "14px" }}
          >
            Username
          </label>
          <input
            type="text"
            id="username"
            className="form-control"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          style={{
            backgroundColor: "#A569BD",
            borderColor: "#A569BD",
            width: "300px",
            margin: "auto",
          }}
        >
          Sign In
        </button>
      </form>
    </div>
  );
};

export default Login;
