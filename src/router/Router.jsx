import { Route, Routes } from "react-router-dom";
import AuthPage from "@/pages/AuthPage";
import HomePage from "@/pages/HomePage";
import DashboardPage from "@/pages/DashboardPage";
import AdminPage from "@/pages/AdminPage";
import NotFoundPage from "@/pages/404";
import { useQuery } from "@tanstack/react-query";
import { getProfile } from "../services/user";

function Router() {
  const { data, isLoading, error } = useQuery(["profile"], getProfile);
  console.log(data, isLoading, error);

  if (isLoading) return <div>Loading...</div>;

  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="/auth" element={<AuthPage />} />
      <Route path="/admin" element={<AdminPage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default Router;