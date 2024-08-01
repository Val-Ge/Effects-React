import { useState, useEffect } from "react";

const RANDOM_QUOTE_URL = "https://inspo-quotes-api.herokuapp.com/quotes/random";

export default function QuoteFetcher() {
    const [quote, setQuote] = useState({ text:"", author: ""}); //initialize state

    useEffect(() => {
        async function getInitialQuote() {
            const response = await fetch(RANDOM_QUOTE_URL);
            const jsonResponse = await response.json();
            const randomQuote = jsonResponse.quote;
            setQuote(randomQuote) //update state with the new quote
    }
    getInitialQuote();
    }, []);

    async function fetchQuote() {
        const response = await fetch(RANDOM_QUOTE_URL);
        const jsonResponse = await response.json();
        const randomQuote = jsonResponse.quote;
        setQuote(randomQuote) //update state with the new quote
    }

    return (
        <div>
            <button onClick={fetchQuote}>Get Quote Using Handler</button>
            <h2>{quote.text}</h2>
            <h3>{quote.author}</h3>
        </div>
    )
}