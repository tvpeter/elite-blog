import React from "react";
import RouteProtector from "../hoc/routeProtector";
import MyPaidPosts from "../components/my-piad-post";

export default function MyPaidPostsPage() {
  return (
    <RouteProtector>
      <MyPaidPosts />
    </RouteProtector>
  );
}
