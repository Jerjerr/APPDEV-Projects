import React, { useState } from 'react';

const randomQuotes = [
    "I know nothing, except the fact of my ignorance.",
    "In a rich man's house there is no place to spit but his face.",
    "Stand a little less between me and the sun.",
    "The mob is the mother of tyrants.",
    "No man is hurt but by himself."
];

export default function ColorPicker() {
    const [quote, setQuote] = useState('Press "Random" to view a quote from Diogenes!');

    function getRandomNumber() {
        return Math.floor(Math.random() * randomQuotes.length);
    }

    function getRandomQuote() {
        let newQuote;

        do {
            newQuote = randomQuotes[getRandomNumber()];
        } while (newQuote === quote);

        return newQuote;
    }

    function randomQuoteChange() {
        setQuote(getRandomQuote());
    }

    return (
        <>
            <div className="color-picker-container">
                <center><h1>Diogenes Quotes</h1></center>
                <div className="container">
                    <p className="counter-container">Random Quote: {quote}</p>
                </div>
                <br />
                <button className="randomize" onClick={randomQuoteChange}>Random</button>
            </div>
        </>
    );
}
