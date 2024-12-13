import './comp.css';
import { Link } from 'react-router-dom';


export default function Home() {
    return (
        <>
        <div className='homepage-container'>
        <h1 className="homepage-title">🎮 Welcome to My Cool Games! 🎉</h1>
        </div>

        <div className="homepage-container">
            <p className="homepage-description">
                The ultimate hangout for gamers who love fun, adventure, and a touch of ✨coolness✨! 😎
            </p>
            <Link to="/games">
                <button className="homepage-button">Start Playing!</button>
            </Link>
        </div>
        </>

    );
}
