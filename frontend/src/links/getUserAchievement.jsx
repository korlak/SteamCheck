import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function GetUserAchievement() {
    const navigate = useNavigate();
    const [steamId, setSteamId] = useState('');
    const [gameId, setGameId] = useState('');
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!steamId || !gameId) {
            setError('Будь ласка, введіть ID');
            return;
        }

        try {
            const response = await fetch(`/steam/userGameAchievements/${steamId}/${gameId}`, {
                method: 'GET',

            });

            if (!response.ok) {
                throw new Error('Помилка при отриманні даних');
            }

            const postData = await response.json();
            setData(postData);

        } catch (err) {
            setError(err.message);
        }
    }

    return (
        <div className="content">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Введіть SteamID"
                    value={steamId}
                    onChange={(event) => setSteamId(event.target.value)}
                />
                <input
                    type="text"
                    placeholder="Введіть ID гри"
                    value={gameId}
                    onChange={(event) => setGameId(event.target.value)}
                />
                <button type="submit">Відправити</button>
            </form>
            {data && (
                <div>
                    <div>Completed:{data.completed.unlockedCount}</div>
                    <div>Full amount:{data.fullAmount.achvAmount}</div>
                </div>
            )}
        </div>
    )
}