import './games.css'; 
import { Link } from "react-router-dom"

const games = [
    {
        id: 1, 
        name: 'TeamFight Tactics', 
        description: "Teamfight Tactics (TFT) is an auto-battler strategy game developed by Riot Games, where players compete by assembling and positioning a team of champions from the League of Legends universe to automatically fight against other players' teams. The goal is to outlast all opponents by strategically upgrading units, placing them on the board, and using synergies between champions' traits and items to gain an advantage.",
        publisher: 'Riot Games, Garena, Taiwan Mobile ',
        developer: 'Riot Games',
        rev1:'Noisy Pixel 80/100: Teamfight Tactics is one of the more substantial auto chess games available. Given that there’s already a familiar player base from the League of Legends community, this title has the community and development backing to evolve with the genre, which shows up prominently in this mobile version. With the addition of crossplay and ranked modes, if you’re going to get into auto chess, this is perhaps the best the genre has to offer. ',
        rev2:"SpazioGames 80/100: Teamfight Tactics it's an excellent porting of the League of Legends autobattler. ",
        rev3:'Multiplayer.it 80/100: Teamfight Tactics is the best autobattler on the market, one of the few with its identity. ', },
    {
        id: 2, 
        name: 'Valorant', 
        description:"Valorant is a tactical first-person shooter (FPS) developed and published by Riot Games, blending precise gunplay with unique hero abilities. Players control 'Agents,' each equipped with a set of skills that add strategic depth to the game, as they compete in 5v5 matches with the objective of planting or defusing a bomb (the 'spike') or eliminating the opposing team. The game emphasizes teamwork, communication, and precise aim, with a focus on strategy and careful execution.",
        publisher: 'Riot Games',
        developer: 'Riot Games',
        rev1: 'PC Gamer 90/100: Valorant transforms the best of CS:GO with agents and abilities, resulting in an exceptional FPS that everyone should try.',
        rev2: "IGN 90/100: Valorant is the most fun I've had with a multiplayer FPS since Valve's Team Fortress 2. The flexibility of its magically-infused cast paired with a deep arsenal makes for a magnificent competitive canvas, if a tricky one to initially pick up. I'm already pondering new strategies to pull off with my friends in the future, and that joyous daydreaming won't stop anytime soon. It may not be the prettiest modern FPS around, but its visual simplicity enables excellent clarity in every fight. With its teeth sunk in this deep, Valorant makes me want to keep playing until there's nothing left to master.",
        rev3: "IGN Italia 86/100: Valorant is the almost perfect meeting point between Overwatch and CS: GO in Riot Games sauce. Competition, individual skills and co-op come together to create a title that is easy to understand but difficult to master. The definitive spark is missing, but the time to light it is there and Riot knows how to do it."},
    {
        id: 3, 
        name: 'League of Legends',
        description: "League of Legends (LoL) is a popular multiplayer online battle arena (MOBA) game developed and published by Riot Games. Released in 2009, it has become one of the most influential and widely played video games in the world, known for its strategic gameplay, competitive scene, and massive esports ecosystem.",
        publisher: 'Riot Games',
        developer: 'Riot Games',
        rev1: 'GameCritis 80/100: I find that with League of Legends, Riot has cultivated one of the most unique spaces in gaming history—mostly for good reasons but also for some awful ones, and in the gaming museum of the future, League is sure to have its own wing.',
        rev2: 'Pelit (Finland) 85/100: League of Legends handles well the worst problem DOTA has: its autistic n00b-hating elite players. Thanks to match making, now we weaklings dare to play. [Nov 2011]',
        rev3: 'Thunderbolt 70/100: Improvements are constantly being updated and although team mates make or break many matches, there is genuine fun to be found.'},
    {
        id: 4, 
        name: 'Minecraft', 
        description:'Minecraft is a sandbox video game developed by Mojang Studios, where players can explore, build, mine, and survive in a procedurally generated world made of blocks. The game offers various modes, including survival, creative, and adventure, allowing for endless possibilities in construction, exploration, and combat. Its open-ended nature and modding community have made it one of the best-selling and most influential video games of all time.',
        publisher: 'Microsoft',
        developer: 'Mojang Studios',
        rev1: "Gamer.no 90/100: The 1.0 version of the indie phenomena is still obviously unfinished and flawed in many ways, but it's so easy to forget that when you're building your dream castle, exploring scary caves and vast mountain ranges and having a great time in its blocky world.",
        rev2: "ActionTrip 92/100: While Minecraft may not be everybody's cup of tea, I doubt anyone can deny that it's an important step into new territory.",
        rev3: 'games(TM) 80/100: A must-play title - as much a part of videogaming as it is anything else. [Issue#118, p.102]' },
    {
        id: 5, 
        name: 'Apex Legends', 
        description:'Apex Legends is a free-to-play battle royale game developed by Respawn Entertainment, where squads of players choose from unique "Legends," each with special abilities, to fight against other teams in fast-paced, ever-shrinking arenas. Players must gather weapons, gear, and strategize to become the last team standing, with a focus on teamwork, movement, and tactical play. The game is set in the Titanfall universe and has become a popular title for competitive gaming and esports.',
        publisher: 'Electronic Arts',
        developer: 'Respawn Entertainment, Lightspeed Studios',
        rev1: "Metro GameCentral 90/100: Purely from a gameplay perspective, it’s the best first person battle royale title out there, and well worth dipping into a year on. It’s disappointing that Titanfall 3 seems further away than ever, but for now Apex Legends will do just as well.",
        rev2: "USgamer 80/100: Apex Legends spices up the battle royale formula with hero-based shooter pizazz and its revolutionary pinging system, which helps everyone feel welcome to the team. Though its Season One rollout has been disappointing content-wise and its visual flair remains bland, Apex Legends still has the solid foundation necessary for a free-to-play shooter to survive in the long run. And with 50 million players reached in its first month, it's not like it's slowing down anytime soon. We're all jumpmasters now.",
        rev3: "PlayStation Country 90/100: There are many free to play Battle Royale games out there that are vying for your attention, but Apex Legends takes the genre to new heights with its superb gunplay, Moreish game loop and a superb communication mechanic."},
        
]


export default function Games() {
    return (
      <>
      <center>
        <h1>Games List:</h1>
        <br/>
        <ul>
          {games.map((game) => (
            <li key={game.id} className="game-item">
              <Link to={`/games/${game.id}`} state={{ game }} className="game-button">
                {game.name.toUpperCase()}
              </Link>
            </li>
          ))}
        </ul>
        </center>
      </>
    );
  }