import { Navigate, Route, Routes } from "react-router-dom";
import AuthPage from "@/pages/AuthPage";
import HomePage from "@/pages/HomePage";
import DashboardPage from "@/pages/DashboardPage";
import AdminPage from "@/pages/AdminPage";
import NotFoundPage from "@/pages/404";
import { useQuery } from "@tanstack/react-query";
import { getProfile } from "../services/user";
import Loader from "../components/modules/Loader";

function Router() {
  const { data, isLoading, error } = useQuery(["profile"], getProfile);

  // console.log({ data, isLoading, error });

  if (isLoading) {
    return (
      <div className="w-full flex justify-center items-center h-screen">
        <Loader />
      </div>
    );
  }

  return (
    <Routes>
      <Route index element={<HomePage />} />

      <Route
        path="/auth"
        element={data ? <Navigate to="/dashboard" /> : <AuthPage />}
      />

      <Route
        path="/admin"
        element={
          data && data.data.role === "ADMIN" ? (
            <AdminPage />
          ) : (
            <Navigate to="/" />
          )
        }
      />

      <Route
        path="/dashboard"
        element={data ? <DashboardPage /> : <Navigate to="/auth" />}
      />

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default Router;

//09189990099
