import React, { useState } from "react";
import Login from "./Login";

export default function Reviews(props) {
    const [reviews, setReviews] = useState([]);    
    const [selectedGame, setSelectedGame] = useState(""); 
    const [otherGame, setOtherGame] = useState(""); 

    const games = ["Minecraft", "Trucking Simulator 2023", "NBA 2K24", "Others"]; 
    const gameBackgrounds = {
        "Minecraft": "url('https://wallpapers.com/images/featured/minecraft-s2kxfahyg30sob8q.jpg')", 
        "Trucking Simulator 2023": "url('https://www.metacritic.com/a/img/catalog/provider/6/12/6-1-945391-52.jpg')", 
        "NBA 2K24": "url('https://e0.365dm.com/23/07/2048x1152/skysports-nba-2k24-kobe-bryant_6212401.jpg?20230708145643')", 
        "Others": "url('https://i.redd.it/8d7f61ikv3s51.jpg')", 
    };

    function AddReview(){
        let review = {
            date: new Date().getFullYear() + "-" + (new Date().getMonth() + 1) + "-" + new Date().getDate(),
            title: document.getElementById("title").value,
            content: document.getElementById("content").value,
            game: selectedGame === "Others" ? otherGame : selectedGame 
        }
        
        setReviews(r => [...r, review]);
        document.getElementById("title").value = "";
        document.getElementById("content").value = "";
        setSelectedGame(""); 
        setOtherGame(""); 
    }

    const renderReviewHistory = () => {
        return reviews.map((review, index) => (
            <div key={index}>
                <h2>{review.title} - {review.game}</h2>
                <h5>{review.date}</h5>
                <p>{review.content}</p>
            </div>
        ));
    };

    if(props.isLoggedIn === false){
        return <Login />;
    }
    else{
        return(
            <div style={{ 
                backgroundImage: gameBackgrounds[selectedGame] || "url('https://i.redd.it/8d7f61ikv3s51.jpg')", 
                backgroundSize: "cover", 
                backgroundPosition: "center", 
                minHeight: "100vh", 
                padding: "20px" 
            }}>
                <div className="container" style={{ backgroundColor: "rgba(255, 255, 255, 0.8)", padding: "20px", borderRadius: "8px" }}>
                    <h1>Make a Game Review</h1>
                    <hr />
                    <h4>Game Reviews:</h4>
                    
                    <label htmlFor="gameSelect">Select Game:</label>
                    <select id="gameSelect" value={selectedGame} onChange={(e) => {
                        setSelectedGame(e.target.value);
                        if (e.target.value !== "Others") {
                            setOtherGame(""); 
                        }
                    }}>
                        <option value="">--Select a Game--</option>
                        {games.map((game, index) => (
                            <option key={index} value={game}>{game}</option>
                        ))}
                    </select>
                    <br /><br />
                    
                    {selectedGame === "Others" && (
                        <div>
                            <label htmlFor="otherGameInput">Please specify the game:</label>
                            <input 
                                type="text" 
                                id="otherGameInput" 
                                value={otherGame} 
                                onChange={(e) => setOtherGame(e.target.value)} 
                            />
                        </div>
                    )}
                    
                    Title: <input type="text" id="title"/>
                    <br /><br />
                    Content:
                    <br />
                    <textarea name="content" id="content" cols="50" rows="10"></textarea>
                    <br />
                    
                    <button type="submit" onClick={AddReview}>Submit</button>

                    <h4>Game Reviews History: </h4>
                    {renderReviewHistory()}
                </div>
            </div>
        )
    }
}