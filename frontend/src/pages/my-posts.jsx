import React from "react";
import MyPosts from "../components/my-posts";
import RouteProtector from "../hoc/routeProtector";

export default function MyPostPage() {
  return (
    <RouteProtector>
      <MyPosts />
    </RouteProtector>
  );
}
