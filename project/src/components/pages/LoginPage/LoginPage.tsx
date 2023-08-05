import { useState, ChangeEvent, FormEvent, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { LoginForm } from "../../../types/login.type";
import { DataUser } from "../../../App";

export default function LoginPage(): JSX.Element {
  const { setData } = useContext(DataUser);
  const navigate = useNavigate();
  const [loginForm, setLoginForm] = useState<LoginForm>({
    email: "",
    password: "",
  });

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setLoginForm({ ...loginForm, [name]: value });
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3003/api/login",
        loginForm
      );
      navigate("/profile");
      const userDataFromResponse = response.data;
      setData(userDataFromResponse);
      console.log(userDataFromResponse);
    } catch (error: any) {
      console.log(error.response?.data?.error);
    }
  };

  return (
    <div>
      <h2>LoginPage</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={loginForm.email}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={loginForm.password}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
