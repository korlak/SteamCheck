import { useState } from "react";
import axios from "axios"; 

export default function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [responseData, setResponseData] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/auth/login", formData);
      console.log("Сервер відповів:", response.data);
      setResponseData(response.data); 
      alert("Логін успішний");
    } catch (error) {
      console.error("Помилка при відправці даних:", error);
      alert("Логін невдалий. Перевірте дані.");
    }
  };

  return (
    <div className="content">
      <form onSubmit={handleSubmit}>
        <input
          name="email"
          placeholder="Email"
          type="email"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          name="password"
          placeholder="Пароль"
          type="password"
          value={formData.password}
          onChange={handleChange}
        />
        <button type="submit">Увійти</button>
      </form>

      {responseData && (
        <div>
          <h2>Дані після логіну:</h2>
          <pre>{JSON.stringify(responseData, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}