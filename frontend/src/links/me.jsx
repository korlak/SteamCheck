import { useEffect, useState } from 'react'

export default function Me() {
    const [data, setData] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem('token');
        console.log(token)
        if (token) {
            fetch('/auth/me', {
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
    return (
        <div>
            {data ? (
                <div>
                    <h1>Інформація про користувача</h1>
                    <p>Ім'я: {data.fullName}</p>
                    <p>Email: {data.email}</p>
                    <img src={data.avatarUrl} alt="Avatar" style={{ width: 100, height: 100 }} />
                </div>
            ) : (
                'Завантаження...'
            )}
        </div>
    )
}