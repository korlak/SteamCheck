import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';


export default function MainPage(){
    return(
        <div className='links'>
        <table>
          <tr>
            <td>METHOD</td>
            <td>URL</td>
            <td>INFO</td>
            <td>TOKEN</td>
          </tr>
          <tr>
            <td>POST</td>
            <td><Link to="/auth/login">/auth/login</Link></td>
            <td>Логін</td>
            <td></td>
          </tr>
          <tr>
            <td>POST</td>
            <td><Link to="/auth/register">/auth/register</Link></td>
            <td>Реєстрація</td>
            <td></td>
          </tr>
          <tr>
            <td>GET</td>
            <td><Link to="/auth/me">/auth/me</Link></td>
            <td>Отримати свої дані користувача</td>
            <td>Token</td>
          </tr>
          <tr>
            <td>POST</td>
            <td><Link to="/upload">/upload</Link></td>
            <td>Завантажити зображення</td>
            <td>Token</td>
          </tr>
          <tr>
            <td>POST</td>
            <td><Link to="/posts/create">/posts/create</Link></td>
            <td>Створити пост</td>
            <td>Token</td>
          </tr>
          <tr>
            <td>GET</td>
            <td><Link to="/posts/getAll">/posts/getAll</Link></td>
            <td>Отримати всі пости</td>
            <td>Token</td>
          </tr>
          <tr>
            <td>GET</td>
            <td><Link to="/posts/getOne/">/posts/getOne/:id</Link></td>
            <td>Отримати один пост</td>
            <td>Token</td>
          </tr>
          <tr>
            <td>GET</td>
            <td><Link to="/test">/test</Link></td>
            <td>Тестова сторінка</td>
            <td></td>
          </tr>
          <tr>
            <td>GET</td>
            <td><Link to="/steam/userGames">/steam/userGames</Link></td>
            <td>Отримати всі ігри користувач Steam</td>
            <td></td>
          </tr>
          <tr>
            <td>GET</td>
            <td><Link to="/steam/userGameAchievements/:userId/:gameId">/steam/userGameAchievements/:userId/:gameId</Link></td>
            <td>Отримати дані користувача про досягнення до гри</td>
            <td></td>
          </tr>

          <tr>
            <td>DELETE</td>
            <td><Link to="/posts/delete/:id">/posts/delete/:id</Link></td>
            <td>Видалити пост</td>
            <td>Token</td>
          </tr>
          <tr>
            <td>PATCH</td>
            <td><Link to="/posts/patch/:id">/posts/patch/:id</Link></td>
            <td>Редагувати пост</td>
            <td>Token</td>
          </tr>


        </table>
      </div>
    )
}