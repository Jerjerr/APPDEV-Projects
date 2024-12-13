import './comp.css';

export default function About() {
    return (
        <>
        <div className='about-container'>
        <h1 className="about-title">✨ About This App ✨</h1>
        </div>
        <div className="about-container">
            <p className="about-description">
                Welcome to the world of cool games and fun vibes! 🎉 This app is built to bring gamers together, showcase amazing features, and explore the magic of <strong>React Routing</strong>! 🚀
            </p>
            <ul className="about-list">
                <li>⚡ Built with React for a seamless experience</li>
            </ul>
            <ul className='about-list'>
                <li>🎮 Includes fun and interactive games</li>
            </ul>
            <ul className='about-list'>
                <li>🌟 Styled with care to be playful and inviting</li>
            </ul>
            <p className="about-footer">Made with ❤️ for cool gamers like you! 😎</p>
        </div>
        </>
    );
}
