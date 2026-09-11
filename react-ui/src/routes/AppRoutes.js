import { Routes, Route, Navigate } from "react-router-dom";

import DashboardPage from "../pages/DashboardPage";
import CasesPage from "../pages/CasesPage";
import CaseDetailsPage from "../pages/CaseDetailsPage";
import ProfilePage from "../pages/ProfilePage";

function AppRoutes() {
  return (
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/cases" element={<CasesPage />} />
        <Route path="/cases/:caseId" element={<CaseDetailsPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
  );
}

export default AppRoutes;