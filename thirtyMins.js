const schedule = require('node-schedule');

const job = schedule.scheduleJob('30 * * * *', function(){
    console.log('this')
});
