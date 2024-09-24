import React from "react";
import GalleriesTable from "../Galleries/GalleriesTable";
import Sidebar from "../Galleries/Sidebar";
import "./Main.css";

function Galleries() {
  return (
    <div className="app-container">
      <Sidebar />
      <div className="main-content">
        <GalleriesTable />
      </div>
    </div>
  );
}

export default Galleries;
