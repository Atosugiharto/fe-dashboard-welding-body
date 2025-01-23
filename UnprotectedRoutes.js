/* eslint-disable react/prop-types */
import { Navigate } from "react-router-dom";

function UnprotectedRoutes({ children }) {
  const token = localStorage.getItem("accessToken");
  if (token) {
    return <Navigate to="/ohc-sbc-wt" />;
  }
  return children;
}

export default UnprotectedRoutes;
