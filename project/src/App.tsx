import { Navigate, Link, Routes, Route } from "react-router-dom";
import Navber from "./components/layout/Navbar/Navber";
import ProductsPage from "./components/pages/Product/ProductsPage";
import LoginPage from "./components/pages/LoginPage/LoginPage";
import RegisterPage from "./components/pages/RegisterPage/RegisterPage";
import ProfilePage from "./components/pages/ProfilePage/ProfilePage";
import { createContext, useState } from "react";
import { UserData } from "./types/UserData.type";

type Props = {};

export const DataUser = createContext<any>(null);

export default function App({}: Props) {
  const [data, setData] = useState<UserData>({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  });

  const NotFound = () => {
    return (
      <div>
        <h1>404 - Not Found!</h1>
        <Link to="/">Go Home</Link>
      </div>
    );
  };
  return (
    <>
      <DataUser.Provider value={{ data, setData }}>
        <Navber />
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<RegisterPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/product" element={<ProductsPage />} />
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </DataUser.Provider>
    </>
  );
}
