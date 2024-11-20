import { useState } from "react";

export default function DeletePost() {
    const [postId, setPostId] = useState(''); // ID поста для видалення
    const [message, setMessage] = useState('');

    const handleDelete = async (e) => {
        e.preventDefault();

        const token = localStorage.getItem('token'); // Отримати токен

        if (!postId) {
            setMessage('Введіть ID поста');
            return;
        }

        try {
            const response = await fetch(`/posts/delete/${postId}`, {
                method: 'DELETE',
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            const result = await response.json();
            if (response.ok) {
                setMessage(result.message); // Успішне видалення
            } else {
                setMessage(result.message || 'Помилка при видаленні');
            }
        } catch (error) {
            console.error('Помилка при видаленні поста:', error);
            setMessage('Сталася помилка');
        }
    };

    return (
        <div className="content">
            <h1>Видалити пост</h1>
            <form onSubmit={handleDelete}>
                <input
                    type="text"
                    placeholder="Введіть ID поста"
                    value={postId}
                    onChange={(e) => setPostId(e.target.value)} // Оновлення ID
                />
                <button type="submit">Видалити</button>
            </form>
            {message && <p>{message}</p>}
            
        </div>
    );
}
