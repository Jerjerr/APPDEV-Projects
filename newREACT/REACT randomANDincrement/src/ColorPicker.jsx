import React, { useState } from 'react';

const quotes = [
  "Quote 1: I know nothing, except the fact of my ignorance.",
  "Quote 2: In a rich man's house there is no place to spit but his face.",
  "Quote 3: Stand a little less between me and the sun.",
  "Quote 4: The mob is the mother of tyrants.",
  "Quote 5: No man is hurt but by himself."
];

export default function QuotePicker() {
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [quote, setQuote] = useState('Press "Next" to view a quote from Diogenes!');

  function getNextQuote() {
    const nextIndex = (quoteIndex + 1) % quotes.length;
    setQuoteIndex(nextIndex);
    setQuote(quotes[nextIndex]);
  }

  function getPreviousQuote() {
    const previousIndex = (quoteIndex - 1 + quotes.length) % quotes.length;
    setQuoteIndex(previousIndex);
    setQuote(quotes[previousIndex]);
  }

  function getRandomQuote() {
    let newQuote;
    do {
      newQuote = quotes[Math.floor(Math.random() * quotes.length)];
    } while (newQuote === quote);
    setQuote(newQuote);
  }

  return (
    <div className="color-picker-container">
      <center><h1>Diogenes Quotes</h1></center>
      <div className="container">
        <p className="counter-container">{quote}</p>
      </div>
      <br />
      <div className="button-container">
        <button className="randomize" onClick={getPreviousQuote}>Previous</button>
        <button className="randomize" onClick={getRandomQuote}>Random Quote</button>
        <button className="randomize" onClick={getNextQuote}>Next</button>
      </div>
    </div>
  );
}
