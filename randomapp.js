const schedule = require('node-schedule');

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
    'if you didnt pay your school fee you will not access to lms  - Jerry',
    'Whatever is worth doing is worth doing well - Zainab 2025(Tinyuka)',
    'Just eat first - Kara 2023(Tinyuka)',
    'We will reduce their purchasing power - Abiodun 2025(Tinyuka)',
    'How will you understand Node JS, Without knowing JS - OluwaSegun Adedeji 2025(Baraka)',
    'people say a lot, so I watch what they do - John Ughiovhe 2025(Baraka)',
    'surviving is franklin guys, everything else is bullshit - Aderibole Bolade Ayodeji 2025(Baraka)',
    'Small steps still move you forward - Prestige 2025(Baraka)',
]

const randomQuoteGenerator = () => {
    const randomIndex = Math.floor(Math.random() * randomQuote.length);
    return randomQuote[randomIndex];
}

schedule.scheduleJob('* * * * *', () => {
    console.log('Running random quote generator...');
    const quote = randomQuoteGenerator();

    console.log(quote)
})