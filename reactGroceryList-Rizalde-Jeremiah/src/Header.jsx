import React from 'react';

export default function Header() {
    // Inline styles
    const headerStyle = {
        backgroundColor: '#4CAF50', // Green background color
        color: 'white', // White text color
        padding: '20px', // Padding around the header
        textAlign: 'center', // Center the text
        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)', // Subtle shadow for depth
    };

    const titleStyle = {
        margin: '0', // Remove default margin
        fontSize: '2.5rem', // Title font size
        fontFamily: 'Arial, sans-serif', // Font family
        fontWeight: 'bold', // Bold text
    };

    return (
        <header style={headerStyle}>
            <h1 style={titleStyle}>Welcome to Food Market</h1>
        </header>
    );
}