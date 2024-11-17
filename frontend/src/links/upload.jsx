import { useState } from "react";
import axios from "axios";

export default function Login() {
    const [file, setFile] = useState(null);
    const [message, setMessage] = useState('');

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const token = localStorage.getItem('token');
        if (!file) {
            setMessage('Будь ласка, виберіть файл');
            return;
        }

        const formData = new FormData();
        formData.append('image', file);

        try {
            const response = await fetch('http://localhost:3000/upload', {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${token}`,
                },
                body: formData,
            });

            const data = await response.json();
            if (response.ok) {
                setMessage('Файл успішно завантажено');
            } else {
                setMessage(data.message || 'Щось пішло не так');
            }
        } catch (error) {
            console.error('Помилка при завантаженні файлу:', error);
            setMessage('Сталася помилка при завантаженні файлу');
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="file" onChange={handleFileChange} />
                <button type="submit">Завантажити</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
}