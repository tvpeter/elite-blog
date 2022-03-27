import React from "react";
import Blog from "../components/blog";
import RouteProtector from "../hoc/routeProtector";

export default function BlogPage() {
  return (
    <RouteProtector>
      <Blog />
    </RouteProtector>
  );
}
