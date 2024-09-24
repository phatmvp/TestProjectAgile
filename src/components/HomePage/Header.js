import React from "react";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const navigate = useNavigate();

  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "20px",
        backgroundColor: "#fff",
      }}
    >
      <div style={{ fontSize: "24px", fontWeight: "bold" }}>DataWarehouse</div>
      <button
        style={{
          backgroundColor: "#a259ff",
          color: "white",
          border: "none",
          padding: "10px 20px",
          borderRadius: "5px",
          cursor: "pointer",
        }}
        onClick={() => navigate("/auth/login")}
      >
        Sign In
      </button>
    </header>
  );
};

export default Header;
