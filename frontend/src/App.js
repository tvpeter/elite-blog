import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import DashboardPage from "./pages/dashboard";
import CreatePostPage from "./pages/create-post";
import BlogPage from "./pages/blog";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/create-post" element={<CreatePostPage />} />
        <Route path="/blog:id" element={<BlogPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
