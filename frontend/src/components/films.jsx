import { Link } from 'react-router-dom';
import "./style.css"
import img from '../img/12.jpg'
export default function Films() {
    const mesniki = img

    const films = ["Месники", "Веном: Останній танець", "Дедпул і Росомаха"]

    const contentFilm = () => {
        return films.map((cont, contIndex) => {
            console.log("123")
            return (
                <div class='rozdil1'>
                    <Link to="/film"><img className="mesniki" src={mesniki} /></Link>
                    <Link class='imya1' to="/film/${}">{cont}</Link>
                </div>
            )
        })
    }
    const contentMult = () => {
        return films.map((cont, contIndex) => {
            console.log("123")
            return (
                <div class='rozdil1'>
                    <Link to="/film"><img className="mesniki" src={mesniki} /></Link>
                    <Link class='imya1' to="/film/${}">{cont}</Link>
                </div>
            )
        })
    }

    return (
        <>
            <main>

                <div class='videos1'>
                    {contentFilm()}
                </div>
                <div class='videos1'>
                    {contentMult()}
                </div>
            </main>
        </>
    );
}