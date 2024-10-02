export default function Footer(){
    //stateless component - no hooks, no functions, no states
    //funcion component - has functions, events, has states
    return(
        <>
        <footer>
            <hr />
            <p>&copy; {new Date().getFullYear()} My Favorite Games || Written by Jeremiah Rizalde</p>
        </footer>
        </>
    )
}