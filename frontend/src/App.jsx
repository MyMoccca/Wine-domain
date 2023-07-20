import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminLayout from "./pages/layout/AdminLayout";
import Auth from "./pages/Auth";
import AdminDashboard from "./pages/admin/AdminDashboard";
import Articles from "./pages/Articles";
import ArticleDesc from "./pages/ArticleDesc";
import Products from "./pages/Products";
import ProductDesc from "./pages/ProductDesc";
import DomainePage from "./pages/DomainePage";
import TerroirePage from "./pages/TerroirePage";
import ContactPage from "./pages/ContactPage";

import UserLayout from "./pages/layout/UserLayout";

import Home from "./pages/Home";

import "./Scss/App.scss";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserLayout />}>
          <Route path="" element={<Home />} />
          <Route path="articles" element={<Articles />} />
          <Route path="articles/:id" element={<ArticleDesc />} />
          <Route path="vins" element={<Products />} />
          <Route path="vins/:id" element={<ProductDesc />} />
          <Route path="domaine" element={<DomainePage />} />
          <Route path="terroir" element={<TerroirePage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="login" element={<Auth />} />
        </Route>

        <Route path="/admin/" element={<AdminLayout />}>
          <Route path="articles" element={<AdminDashboard />} />
          <Route path="vins" element={<AdminDashboard />} />
          <Route path="photos" element={<AdminDashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
