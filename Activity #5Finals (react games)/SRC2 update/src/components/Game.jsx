import './game.css';
import { useLocation, Link } from "react-router-dom";



export default function Game() {
    const location = useLocation();
    const game = location.state.game;

    return (
        <div className="game-container">
            <div className="game-header">
                <br/>
                <h1>{game.name}</h1>
                <p>{game.description}</p>
            </div>

            <div className="game-details">
                <div className="game-description">
                    <h2>Description</h2> <br/>
                    <p>{game.description}</p> <br/>
                    <p><strong>Publisher:</strong> {game.publisher}</p> <br/>
                    <p><strong>Developer:</strong> {game.developer}</p>
                </div>
            </div>

            <div className="game-details">
                <div className="game-description">
                    <h2>Reviews</h2>
                    <br/>
                    <p>{game.rev1}</p> <br/>
                    <p>{game.rev2}</p> <br/>
                    <p>{game.rev3}</p> <br/>

                </div>
            </div>

            <div className="game-buttons">
                <Link to="/games">
                    <h2>← Go Back ←</h2>
                </Link>
            </div>
        </div>
    );
}
