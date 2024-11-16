import React, {useEffect, useState} from 'react';

const Games = () => {
  const [data, setData] = useState(null);
  const [trophy, setTrophy] = useState({});

  useEffect(() => {
    fetch('/steam/userGames')
      .then(res => res.json())
      .then(res => setData(res.message));
  }, []);

  const getach = async (id) => {
    const response = await fetch(`/steam/userGameAchievements/76561198951455714/${id}`);
    const result = await response.json();
    setTrophy(prevTrophies => ({
      ...prevTrophies,
      [id]: result.message
    }));
  };

  return (
    <>
      <table>
        {!data ? "loading..." : data.map((game, index) => {
          const link =
            `https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/${game.game.id}/${game.game.capsuleFilename}`;

          return (
            <tr className="userGame" key={index} onLoad={() => getach(game.game.id)}>
              <td>
                {index + 1}
              </td>
              <td>
                <img src={link} alt=""/>
              </td>
              <td>
                <div>{game.game.name}</div>

              </td>
              <td>
                {trophy[game.game.id] && (
                  <div>{trophy[game.game.id]}</div>
                )}
              </td>
            </tr>
          );
        })}
      </table>
    </>
  );
};

export default Games;
