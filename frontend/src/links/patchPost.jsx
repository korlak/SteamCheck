import { useState } from "react";

export default function PatchPost() {
    const [postId, setPostId] = useState(""); 
    const [formData, setFormData] = useState({
        title: "",
        text: "",
        imageUrl: "",
        tags: "",
    });
    const [message, setMessage] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleUpdate = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem("token");

        if (!postId) {
            setMessage("Введіть ID поста");
            return;
        }

        try {
            const response = await fetch(`/posts/patch/${postId}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({
                    ...formData,
                    tags: formData.tags.split(",").map((tag) => tag.trim()), // Розбити тег-рядок у масив
                }),
            });

            const result = await response.json();
            if (response.ok) {
                setMessage("Пост успішно оновлено!");
            } else {
                setMessage(result.message || "Помилка при оновленні поста");
            }
        } catch (error) {
            console.error("Помилка при оновленні поста:", error);
            setMessage("Сталася помилка");
        }
    };

    return (
        <div className="content">
            <h1>Редагувати пост</h1>
            <form onSubmit={handleUpdate}>
                <input
                    type="text"
                    placeholder="Введіть ID поста"
                    value={postId}
                    onChange={(e) => setPostId(e.target.value)}
                />
                <input
                    type="text"
                    name="title"
                    placeholder="Заголовок"
                    value={formData.title}
                    onChange={handleChange}
                />
                <textarea
                    name="text"
                    placeholder="Текст поста"
                    value={formData.text}
                    onChange={handleChange}
                ></textarea>
                <input
                    type="text"
                    name="imageUrl"
                    placeholder="Посилання на зображення"
                    value={formData.imageUrl}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="tags"
                    placeholder="Теги (через кому)"
                    value={formData.tags}
                    onChange={handleChange}
                />
                <button type="submit">Оновити</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
}
