import { useEffect, useState } from 'react'
export default function GetAllPosts() {
    const [data, setData] = useState(null);
    const [responseData, setResponseData] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem('token');
        console.log(token)
        if (token) {
            fetch('/posts/getAll', {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
            })
                .then((res) => {
                    if (!res.ok) {
                        throw new Error('Failed to fetch user data');
                    }
                    setResponseData(token)
                    return res.json();
                })
                .then((res) => setData(res))
                .catch((err) => {
                    console.error('Error fetching data:', err);
                    setData('Помилка при отриманні даних');
                });
        } else {
            setData('Токен відсутній');
        }
    }, []);

    const inputPosts = () => {
        return data.map((arr, index) => {
            return (
                <div className='post'>
                    <div>{arr._id}</div>
                    <h3>{arr.title}</h3>
                    <textarea>{arr.text}</textarea>
                    <br />
                    <span><b>views:</b>{arr.viewsCount}&nbsp;&nbsp;</span>
                    <span>{arr.createdAt}</span>
                    <br />
                    <div><b>Tags:</b></div>
                    {
                        arr.tags.map((tag, index) => {
                            return (<span>
                                &nbsp;
                                {tag}
                            </span>)
                        })
                    }
                    <br />
                </div>
            )
        })
    }

    return (
        <div className='content'>
            {
                data ? (
                    <div>
                        <h1>Всі пости</h1>
                        {inputPosts()}

                    </div>
                ) : (
                    'Завантаження...'
                )}
            {responseData && (
                <div>
                    <h2>Token</h2>
                    <pre>{JSON.stringify(responseData, null, 2)}</pre>
                </div>
            )}
        </div>
    )
}