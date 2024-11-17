
import { useEffect, useState } from 'react'

export default function Register() {

    const [email, setEmail] = useState(null)
    const [nickName, setNickName] = useState(null)
    const [password, setPassword] = useState(null)
    const [avatar, setAvatar] = useState(null)
    const [responseData, setResponseData] = useState(null)

    const handleSubmit = async (event) => {
        event.preventDefault(); // зупинити стандартну поведінку форми
        const res = await fetch("http://localhost:3001/auth/register", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: email,
                fullName: nickName,
                password: password,
                avatarUrl: avatar,
            })
        });
        const content = await res.json();
        console.log(content);
        setResponseData(content)
    }

    return (
        <div className='content'>
            <form onSubmit={handleSubmit}>
                <input placeholder='Нікнейм' type="text" value={nickName} onChange={(e) => setNickName(e.target.value)} />
                <input placeholder='Email' type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input placeholder='Пароль' type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <input placeholder='Посилання на аватар' type="text" value={avatar} onChange={(e) => setAvatar(e.target.value)} />

                <input type="submit" value="Send" />
            </form>
            {responseData && (
                <div>
                    <h2>Response Data:</h2>
                    <pre>{JSON.stringify(responseData, null, 2)}</pre>
                </div>
            )}
        </div>
    )
}