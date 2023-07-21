import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import Sidebar from "../admin/Sidebar";
import { useCurrentUser } from "../../contexts/UserContexts";

function AdminLayout() {
  const { user } = useCurrentUser();
  if (user === "Connected") {
    return (
      <header>
        <div className="db-container">
          <Sidebar />
          <Outlet />
        </div>
      </header>
    );
  }
  return <Navigate to="/admin" replace />;
}

export default AdminLayout;
