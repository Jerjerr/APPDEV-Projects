export default function Header(){
    //stateless component - no hooks, no functions, no states

    return(
        <header>
        <h1>My Website</h1>
        <nav>
            <ul>
                <li><a href="a">Home</a></li>
                <li><a href="a">About</a></li>
                <li><a href="a">Contact</a></li>
            </ul>
        </nav>    
        </header>
    )
}