import { useState, useEffect } from "react";
export default function GetUserGames() {
    const [data, setData] = useState(null);
    const [trophy, setTrophy] = useState({});

    useEffect(() => {
        fetch('/steam/userGames')
            .then(res => res.json())
            .then(res => setData(res.message));
    }, []);

    const user_id = "76561198951455714"

    const getach = async (id) => {
        const response = await fetch(`/steam/userGameAchievements/${user_id}/${id}`);
        const result = await response.json();
        setTrophy(prevTrophies => ({
            ...prevTrophies,
            [id]: result.message
        }));
    };

    return (
        <div className="content">
            {user_id}
            <table className="steamGames">
                {!data ? "loading..." : data.map((game, index) => {
                    const link =
                        `https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/${game.game.id}/${game.game.capsuleFilename}`;

                    return (
                        <tr className="userGame" key={index} onLoad={() => getach(game.game.id)}>
                            <td>
                                {index + 1}
                            </td>
                            <td>
                                <img src={link} alt="" />
                            </td>
                            <td>
                                <div>{game.game.name}</div>

                            </td>
                            <td>
                                {trophy[game.game.id] && (
                                    <div>{trophy[game.game.id]}</div>
                                )}
                            </td>
                            <td>
                                {Math.floor(game.minutes/60)} г.
                            </td>
                            <td>
                            </td>
                        </tr>
                    );
                })}
            </table>
        </div>
    );
}