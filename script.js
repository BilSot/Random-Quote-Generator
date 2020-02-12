/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat
document.addEventListener('DOMContentLoaded', (event) => { printQuote(); });
setInterval(function() {
    printQuote();
}, 4000);

/***
 * `quotes` array
 ***/
var quotes;
quotes = [
    {
        quote: 'Every great developer you know got there by solving problems they were unqualified to solve until they actually did it.',
        source: 'Patrick McKenzie',
        citation: 'Twitter',
        year: 2016,
        tags: 'Technology'
    },
    {
        quote: 'It always seems impossible until it\'s done',
        source: 'Nelson Mandela',
        citation: '',
        year: 1998,
        tags: 'Inspirational'
    },
    {
        quote: 'You can close your eyes to the things you don\'t want to see, but you can not close your heart to the things you don\'t want to feel',
        source: 'Johnny Depp',
        citation: '',
        year: 2011
    },
    {
        quote: 'Success isn\'t about how much money you make. It\'s about the difference you make in people\'s lives.',
        source: 'Michelle Obama',
        citation: '',
        year: 2015,
        tags: 'Political'
    },
    {
        quote: 'Monsters are real and ghosts are real too. They live inside us and sometimes they win.',
        source: 'Stephen King',
        citation: 'AnotherSocialMedia',
        year: 1996
    }
];

var bodyHTMLColors = [
    'rgb(58, 193, 98)',
    'rgb(193, 58, 101)',
    'rgb(103, 58, 193)',
    'rgb(58, 184, 193)',
    'rgb(193, 58, 67)'

];


/***
 * `getRandomQuote` function
***/
var previousPosition = 0;
const getRandomQuote = (quotes) => {
    let position = getRandomNumber(quotes.length);
    while(previousPosition == position){
        position = getRandomNumber(quotes.length);
    }
    let color = bodyHTMLColors[position];
    applyBckgColor(color);
    previousPosition = position;
    return quotes[position];
}

const getRandomNumber = number => Math.floor(Math.random() * number);

const applyBckgColor = color => document.body.style.backgroundColor = color;

/***
 * `printQuote` function
***/
const printQuote = () => {
    let quote = getRandomQuote(quotes);
    let content = '<p class="quote">';
    content += quote.quote + '</p>';
    content += '<p class="source">' + quote.source;

    if(quote.citation !== ''){
        content += '<span class="citation">' + quote.citation + '</span>';
    }
    if(quote.year !== '' && quote.year !== 0){
        content += '<span class="year">' + quote.year + '</span>';
    }
    if(quote.tags){
        content += '<span class="tags">' + quote.tags + '</span>';
    }
    content += '</p>';
    document.getElementById('quote-box').innerHTML = content;
}


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);
