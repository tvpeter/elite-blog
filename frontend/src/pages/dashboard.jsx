import React from "react";
import Dashboard from "../components/dashboard";
import RouteProtector from "../hoc/routeProtector";

export default function DashboardPage() {
  return (
    <RouteProtector>
      <Dashboard />
    </RouteProtector>
  );
}
