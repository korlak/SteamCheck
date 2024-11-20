import { useState, useEffect } from "react";

export default function GetUserGames() {
    const [data, setData] = useState(null); // Дані про ігри
    const [trophy, setTrophy] = useState({}); // Досягнення
    const [steamId, setSteamId] = useState(""); // Steam ID користувача

    const handleSubmit = async (e) => {
        e.preventDefault(); // Запобігає перезавантаженню сторінки
        if (!steamId) {
            alert("Введіть Steam ID");
            return;
        }

        try {
            const response = await fetch(`/steam/userGames/${steamId}`);
            const result = await response.json();
            setData(result.message); // Оновлюємо дані про ігри
        } catch (error) {
            console.error("Помилка при отриманні ігор:", error);
            setData(null); // Якщо помилка, очищаємо дані
        }
    };

    // Завантаження досягнень для всіх ігор після отримання даних
    useEffect(() => {
        if (data && steamId) {
            data.forEach((game) => {
                fetch(`/steam/userGameAchievements/${steamId}/${game.game.id}`)
                    .then((response) => response.json())
                    .then((result) => {
                        setTrophy((prevTrophies) => ({
                            ...prevTrophies,
                            [game.game.id]: result,
                        }));
                    })
                    .catch((error) => console.error("Помилка при отриманні досягнень:", error));
            });
        }
    }, [data, steamId]);

    return (
        <div className="content">
            <h1>Отримання ігор Steam</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Введіть Steam ID"
                    value={steamId}
                    onChange={(e) => setSteamId(e.target.value)}
                />
                <button type="submit">Отримати ігри</button>
            </form>

            <table className="steamGames">
                {!data ? (
                    "Завантаження або введіть Steam ID..."
                ) : (
                    data.map((game, index) => {
                        const link = `https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/${game.game.id}/${game.game.capsuleFilename}`;

                        return (
                            <tr className="userGame" key={index}>
                                <td>{index + 1}</td>
                                <td>
                                    <img src={link} alt="" />
                                </td>
                                <td>
                                    <div>{game.game.name}</div>
                                </td>
                                <td>
                                    {trophy[game.game.id] ? (
                                        <div>
                                            {trophy[game.game.id]?.completed?.unlockedCount}/
                                            {trophy[game.game.id]?.fullAmount?.achvAmount}
                                        </div>
                                    ) : (
                                        "Завантаження досягнень..."
                                    )}
                                </td>
                                <td>{Math.floor(game.minutes / 60)} г.</td>
                            </tr>
                        );
                    })
                )}
            </table>
        </div>
    );
}
