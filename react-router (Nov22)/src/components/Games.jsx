import { Link } from "react-router-dom"

const games = [
    {
        id: 1, 
        name: 'TeamFight Tactics', 
        description:'This is the most popular chess auto-battler in the world'},
    {
        id: 2, 
        name: 'Valorant', 
        description:'This is a popular FPS games'},
    {
        id: 3, 
        name: '2XKO',
        description:'An upcoming 2v2 Tag Team Fighting Game'}
        
]

export default function Games() {

    return(
        <>
            <h1>Games List:</h1>
            <ul>
                {games.map((game) =>(
                    <li key={game.id}>
                        <Link to = {'/games/${game.id}'} state={{game}}>{game.name.toUpperCase()}:</Link>
                        {game.description}
                        
                    </li>
                ))}
            </ul>
        </>
    )
}