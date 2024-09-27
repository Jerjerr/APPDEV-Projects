import React, { useState } from 'react';

const randomColor = [
  "1: I know nothing, except the fact of my ignorance.",
  "2: In a rich man's house there is no place to spit but his face.",
  "3: Stand a little less between me and the sun.",
  "4: The mob is the mother of tyrants.",
  "5: No man is hurt but by himself."
];

export default function ColorPicker() {
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [color, setColor] = useState('Press "Next" to view a quote from Diogenes!');

  function getNextQuote() {
    const nextIndex = (quoteIndex + 1) % randomColor.length;
    setQuoteIndex(nextIndex);
    setColor(randomColor[nextIndex]);
  }

  function getPreviousQuote() {
    const previousIndex = (quoteIndex - 1 + randomColor.length) % randomColor.length;
    setQuoteIndex(previousIndex);
    setColor(randomColor[previousIndex]);
  }

  return (
    <>
      <div className="color-picker-container">
        <center><h1>Diogenes Quotes</h1></center>
        <div className="container">
          <p className="counter-container">Quote {color}</p>
        </div>
        <br/>
        <div className="button-container">
          <button className="randomize" onClick={getPreviousQuote}>Previous Quote</button>
          <button className="randomize" onClick={getNextQuote}>Next Quote</button>
        </div>
      </div>
    </>
  );
}
