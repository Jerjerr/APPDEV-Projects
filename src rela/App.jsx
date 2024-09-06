import Footer from './Footer';
import Header from './Header';
import Body from './Body';
function App(){
    return(
        <>
        <Header />
        <br/>
        <Body />
        <br/>
        <Body name = "Julius" food = "Pandesal" isHealthy={false} age={24}/>
        <Body name = "John" food = "Spanish Bread" isHealth={false} age={34}/>
        <Body name = "Jeffery" food = "Cake" isHealth={false} age={20}/>
        <Body name = "Jonathan" food = "Tomato" isHealth={true} age={14}/>
        <Body name = "Joshua" food = "Potato" isHealth={true} age={19}/>
        <Footer />
        </>
    )
}
export default App;