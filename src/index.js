import dotenv from 'dotenv'
import Twit from 'twit';

dotenv.config();

const bot = new Twit({
	consumer_key: process.env.CONSUMER_KEY,
	consumer_secret: process.env.CONSUMER_SECRET,
	access_token: process.env.ACCESS_TOKEN,
	access_token_secret: process.env.ACCESS_TOKEN_SECRET,
	timeout_ms: 60*1000
});


	// post a tweet

bot.post('statuses/update', {status: 'Hello, World from my learning twitter bot!'}, (error, data, response) => {
	if (error) {
		console.error(error)
	} else {
		console.log(data.text + 'was tweeted.');
	}
});


	// log to console followers ids

bot.get('followers/ids', {screen_name: 'igor_pinochet'}, (error, data, response) => {
	if (error) {
		console.log(error)
	} else {
		console.log(data)
	}
});
