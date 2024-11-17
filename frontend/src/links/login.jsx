import { useEffect, useState } from 'react'
import axios from "axios";

export default function Login() {


    const [formData, setFormData] = useState({ fullName: "", email: "", passwordHash: "", avatarUrl: "" });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:3000/auth/login", formData);
            console.log("Сервер відповів:", response.data);
            alert(response.data.message);
        } catch (error) {
            console.error("Помилка при відправці даних:", error);
        }
    };


    return (
        <div>
            <h1>Відправка POST-запиту</h1>
            <form onSubmit={handleSubmit}>
            <input
                    type="text"
                    name="fullName"
                    placeholder="Повне ім'я"
                    value={formData.fullName}
                    onChange={handleChange}
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Ваш email"
                    value={formData.email}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="passwordHash"
                    placeholder="Пароль"
                    value={formData.passwordHash}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="avatarUrl"
                    placeholder="Пароль"
                    value={formData.avatarUrl}
                    onChange={handleChange}
                />

                <button type="submit">Відправити</button>
            </form>
        </div>
    )
}