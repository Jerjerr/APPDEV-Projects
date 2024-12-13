//This is my header component
export default function Header (){
    return(
        <header className="header">  
            <div class="header">
            <a href="#default" class="logo">Keyboard Masters</a>
                <div class="header-right">
                    <a class="active" href="#home">Home</a>
                    <a href="#contact">Contact</a>
                    <a href="#about">About</a>
                </div>
            </div>
        </header>
    )
}

