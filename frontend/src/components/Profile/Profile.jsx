import React, {useEffect, useState} from 'react';
import './profile.css';
import img from '../../img/baza.png';

const Profile = () => {
  const [data, setData] = useState(null);
  const [completedGames, setCompletedGames] = useState([]);
  useEffect(() => {
    // Отримуємо список ігор
    fetch('/steam/userGames')
      .then(res => res.json())
      .then(res => {
        setData(res.message);
        // Після отримання даних по іграх, робимо запити для досягнень
        fetchGameAchievements(res.message);
      });
  }, []);

  const fetchGameAchievements = async (games) => {
    const filteredGames = [];

    // Для кожної гри робимо fetch для отримання досягнень
    const gamePromises = games.map(async (game) => {
      const response = await fetch(`/steam/userGameAchievements/76561198951455714/${game.game.id}`);
      const result = await response.json();

      // Перевіряємо чи відповідь містить потрібні поля
      if (result.completed && result.fullAmount) {
        const {completed, fullAmount} = result;

        // Перевіряємо чи кількість виконаних досягнень дорівнює загальній кількості
        if (completed.unlockedCount === fullAmount.achvAmount) {
          filteredGames.push(game);
        }
      } else {
        console.warn(`Гра ${game.game.id} не має валідних даних про досягнення.`);
      }
    });

    // Чекаємо завершення всіх запитів
    await Promise.all(gamePromises);
    // Оновлюємо стан з відфільтрованими іграми
    setCompletedGames(filteredGames);
  };

  return (
    <div className="profile">
      <div className="photoAndDesc">
        <div className="photo">
          <img src={img} alt=""/>
        </div>
        <div className="fullInfo">
          <div className="block nickName">Korlak</div>
          <div className="block description">Paranoid Android get down</div>
        </div>
      </div>
      <div className="miniStats">
        <div className="miniStats-header">
          <span>Steam</span>
          <span>My Goals</span>
        </div>
      </div>
      <div className="completedGames">
        <h3 className="nameCategory">Ігри на 100%</h3>
        <div className="cards">
          {!completedGames.length ? "Завантаження..." : completedGames.map((card, index) => {
            const link = `https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/${card.game.id}/${card.game.capsuleFilename}`;
            const newStyles = {
              backgroundImage: `url(${link})`,

            };
            if (index % 2 === 0){
              newStyles.marginTop = `5px`;
            }
            else{
              newStyles.marginBottom = `5px`;

            }
              return (
                <div key={card.game.id}>
                  <div className="card" style={newStyles}></div>
                </div>
              );
          })}
        </div>
      </div>
    </div>
  );
};

export default Profile;
