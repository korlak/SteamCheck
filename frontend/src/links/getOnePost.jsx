import React, { useState } from 'react';

export default function GetOnePost() {
    const [data, setData] = useState(null);
    const [inputOne, setInputOne] = useState('');
    const [error, setError] = useState(null);
    const handleSubmit = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem('token');
        if (!inputOne) {
            setError('Будь ласка, введіть ID');
            return;
        }

        if (token) {
            try {
                const response = await fetch(`/posts/getOne/${inputOne}`, {
                    method: 'GET',
                    headers: {
                        Authorization: `Bearer ${token}`,
                        'Content-Type': 'application/json',
                    },
                });

                if (!response.ok) {
                    throw new Error('Помилка при отриманні даних');
                }

                const postData = await response.json();
                setData(postData);

            } catch (err) {
                setError(err.message);
            }
        } else {
            setError('Токен відсутній');
        }
    };

    return (
        <div className="content">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Введіть ID посту"
                    value={inputOne}
                    onChange={(event) => setInputOne(event.target.value)}
                />
                <button type="submit">Відправити</button>
            </form>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {data && (
                <div>
                    <h2>Дані посту:</h2>
                    <div className='post'>
                        <div>{data._id}</div>
                        <h3>{data.title}</h3>
                        <textarea>{data.text}</textarea>
                        <br />
                        <span><b>views:</b>{data.viewsCount}&nbsp;&nbsp;</span>
                        <span>{data.createdAt}</span>
                        <br />
                        <div><b>Tags:</b></div>
                        {
                            data.tags.map((tag, index) => {
                                return (<span>
                                    &nbsp;
                                    {tag}
                                </span>)
                            })
                        }
                        <br />
                    </div>
                </div>
            )}
        </div>
    );
}
