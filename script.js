const quoteElement = document.getElementById('quote-element');
const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');
const loader = document.getElementById('loader');

// Show new quote
function newQuote() {
    showLoadingSpinner();
    // Pick a random quote from localQuotes array
    const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)];
    authorText.textContent = quote.author;

    // Make the font size smaller if quote is long
    if (quote.quote.length <= 100) {
        quoteText.classList.remove('long-quote');
        quoteText.classList.remove('longer-quote');
    }
    if (quote.quote.length > 100 && quote.quote.length <= 200) {
        quoteText.classList.add('long-quote');
        quoteText.classList.remove('longer-quote');
    }
    if (quote.quote.length > 200) {
        quoteText.classList.remove('long-quote');
        quoteText.classList.add('longer-quote');
    }

    // Set Quote, Hide Loader
    quoteText.textContent = quote.quote;
    loadingSpinnerComplete();
}

function showLoadingSpinner() {
    loader.hidden = false;
    quoteElement.hidden = true;
}

function loadingSpinnerComplete() {
    loader.hidden = true;
    quoteElement.hidden = false;
}



// Tweet quote
function tweetQuote() {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}&hashtags=handpickedquotes`;
    window.open(twitterUrl, '_blank');
}

// Event Listeners
newQuoteBtn.addEventListener('click', newQuote);
twitterBtn.addEventListener('click', tweetQuote);

// Get quotes from API
// async function getQuotes() {
//     const apiUrl = 'https://type.fit/api/quotes';
//     try {
//         const response = await fetch(apiUrl);
//         apiQuotes = await response.json();
//         newQuote();
//     } catch (error) {
//         alert(error);
//     }
// }

// On Load
newQuote();
