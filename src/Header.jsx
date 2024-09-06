//This is my header component
export default function Header (){
    return(
        <header className="header">
            <div className="container">
                <h1>LBJ</h1>
                <nav>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
                </nav>
            </div>
        </header>
    )
}

