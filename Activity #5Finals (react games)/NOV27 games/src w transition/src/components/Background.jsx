import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './Background.css'; // Import the CSS file for styles

const backgrounds = {
    '/': 'url(https://as1.ftcdn.net/v2/jpg/00/88/98/18/1000_F_88981880_YjJManMJ6hJmKr5CZteFJAkEzXIh8mxW.jpg)',
    '/about': 'url(https://as1.ftcdn.net/v2/jpg/00/88/98/18/1000_F_88981880_YjJManMJ6hJmKr5CZteFJAkEzXIh8mxW.jpg)',
    '/games': 'url(https://as1.ftcdn.net/v2/jpg/00/88/98/18/1000_F_88981880_YjJManMJ6hJmKr5CZteFJAkEzXIh8mxW.jpg)',
    '/games/1': 'url(https://e1.pxfuel.com/desktop-wallpaper/169/819/desktop-wallpaper-329508-teamfight-tactics-featherknight-iphone-10-7-6s-6-backgrounds-and-tft.jpg)',
    '/games/2': 'url(https://i.pinimg.com/originals/54/07/cd/5407cd7d9b10d751ebdbdd869e5a03dd.jpg)',
    '/games/3': 'url(https://wallpapers.com/images/hd/pixel-3-league-of-legends-background-850-x-1204-pfmwoqo0t2c8pg47.jpg)',
    '/games/4': 'url(https://wallpaperaccess.com/full/11302547.jpg)',
    '/games/5': 'url(https://wallpapers.com/images/featured/apex-legends-phone-5mon3xo27wo2dkpx.jpg)',

    '*': 'url(https://userway.org/blog/wp-content/uploads/2024/03/The-404-Page_-How-To-Turn-a-404-Error-Into-a-Win-for-Your-Website.jpg)'
};

export default function Background() {
    const location = useLocation();

    useEffect(() => {
        const backgroundImage = backgrounds[location.pathname] || 'none';
        document.body.style.backgroundImage = backgroundImage;
        document.body.style.backgroundSize = 'cover';
        document.body.style.backgroundPosition = 'center';
        document.body.style.backgroundRepeat = 'repeat';
        
        return () => {
            document.body.style.backgroundImage = 'none'; // Clean up on unmount
        };
    }, [location]);

    return (
        <div className="background-overlay"></div> // Add an overlay div
    );
}