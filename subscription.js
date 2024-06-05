const schedule = require('node-schedule');

const subscriptions = [
    {
        user_id: "12345",
        next_payment_date: '2022-01-14 18:45',
        credit_card_info: '**** 1234',
        authorization_code: "43895743",
        amount: 100,
        retry_amount: 0
    },
    {
        user_id: "123",
        next_payment_date: '2022-01-15 18:45'
    },
    {
        user_id: "12",
        next_payment_date: '2022-01-16 18:45'
    }
]


const job = schedule.scheduleJob('* * * * *', function(){
  console.log('This is running!');

  const subs = getAllSubscriptionsToday()

  for (const sub of subs) {
    const response = applySub(sub);

    if (response.isSuccessful) {
        sub.next_payment_date = thirtyDaysFromNow()
    } else {
        sub.next_payment_date = tomorrow()
        sub.retry_amount += 1

        if (sub.retry_amount > 5) {
            removeFromPremiumAccount(sub.user_id);
            sub.next_payment_date = null;
        }
    }
  }
});