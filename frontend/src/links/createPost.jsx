import { useState } from "react";
export default function CreatePost() {

    const [message, setMessage] = useState('');
    const [responseData, setResponseData] = useState(null);

    const [title, setTitle] = useState(null)
    const [text, setText] = useState(null)
    const [tags, setTags] = useState(null)


    const handleSubmit = async (e) => {
        e.preventDefault();

        const token = localStorage.getItem('token');
        try {
            const response = await fetch('http://localhost:3001/posts/create', {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json', // Додано Content-Type
                },
                body: JSON.stringify({
                    title: title,
                    text: text,
                    imageUrl: 'nice',
                    tags: tags.split(',').map(tag => tag.trim()),
                })
            });
            setResponseData(response)

            const msg = await response.json();
            if (response.ok) {
                setMessage('Файл успішно завантажено');
            } else {
                setMessage(msg.message || 'Щось пішло не так');
            }
        } catch (error) {
            console.error('Помилка при завантаженні файлу:', error);
            setMessage('Сталася помилка при завантаженні файлу');
        }
    };

    return (
        <div className="content">
            <form onSubmit={handleSubmit}>
                <div>
                    <h2>Дані посту:</h2>
                    <div className='post'>
                        <input placeholder="Enter title" type="text" onChange={(e) => setTitle(e.target.value)} />

                        <textarea placeholder="Enter text" onChange={(e) => setText(e.target.value)}></textarea>

                        <input placeholder="Enter tags (Use a comma as a separator)" type="text" onChange={(e) => setTags(e.target.value)} />

                        <input type="submit" onChange={handleSubmit} />

                        <br />
                    </div>
                </div>
            </form>
            {message && <p>{message}</p>}
            <pre>{JSON.stringify(responseData, null, 2)}</pre>

        </div>
    );
}