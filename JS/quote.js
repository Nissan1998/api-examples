const loadQuote = () => {
    fetch('https://api.kanye.rest/')
    .then(res => res.json())
    .then(data => displayQuote(data))
}

const displayQuote = (quote) => {
    console.log(quote)
        const container = document.getElementById('quote');
        container.innerHTML = `
        <h1> ${quote.quote} </h1>
        `
    
    }
