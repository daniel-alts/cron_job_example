
const randomQuote = [
    'The greatest glory in living lies not in never falling, but in rising every time we fall.',
    'Excellence is not an art, but a habit.',
    'Life is hard, but do not give up',
    'A town hall different from balablu, bulabalabu',
    'All knowledge comes from memory',
    'Composure is a must',
    'to err is human, to forgive is divine.',
    'Its either a WIN or a WIN',
    'Everyday you have a chance to make a choice; DAY ONE or ONE DAY',
    'No gree for anybody.',
    'Earned not given',
    'Stay guiding',
    'Is it for garri or eba?',
    'Get rich or die trying',
    'maintain your steeze no matter what',
    'if you didnt pay your school fee you will not access to lms "Jerry"'
]

const randomQuoteGenerator = () => {
    const randomIndex = Math.floor(Math.random() * randomQuote.length);
    return randomQuote[randomIndex];
}


console.log(randomQuoteGenerator())