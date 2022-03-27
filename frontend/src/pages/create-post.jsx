import React from "react";
import CreatePost from "../components/create-post";
import RouteProtector from "../hoc/routeProtector";

export default function CreatePostPage() {
  return (
    <RouteProtector>
      <CreatePost />
    </RouteProtector>
  );
}
