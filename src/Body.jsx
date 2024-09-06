import PropTypes from 'prop-types'
export default function Body(props) {
    return(

        <div className="person">
        <img src="https://i.postimg.cc/cC1gR3LL/lbj.jpg" alt="lbj" />
        <p>This is <strong>{props.name}'s</strong> championship record: </p>
        <p>{(props.champs).toUpperCase()}</p>
        <p><strong>{props.name} is {props.age} time world!</strong></p>
        <p>LeBron James is a professional basketball player widely regarded as one of the greatest in the sport's history. Known for his exceptional athleticism, versatility, and basketball IQ, he has played for the Cleveland Cavaliers, Miami Heat, and Los Angeles Lakers in the NBA. Throughout his career, LeBron has won multiple NBA championships, earned several MVP awards, and has been a key figure both on and off the court, contributing to various philanthropic and social causes.</p>
        </div>
    )
}

Body.propTypes = {
    name: PropTypes.string,
    champs: PropTypes.string,
    age: PropTypes.number
}
Body.defaultProps = {
    name: "Goat",
    champs: "unknown",
    age: 40
}