import dotenv from 'dotenv'
import Twit from 'twit';
import fs from 'fs';

dotenv.config();

const bot = new Twit({
	consumer_key: process.env.CONSUMER_KEY,
	consumer_secret: process.env.CONSUMER_SECRET,
	access_token: process.env.ACCESS_TOKEN,
	access_token_secret: process.env.ACCESS_TOKEN_SECRET,
	timeout_ms: 60*1000
});


	// post a tweet

// bot.post('statuses/update', {status: 'Hello, World from my learning twitter bot!'}, (error, data, response) => {
// 	if (error) {
// 		console.error(error)
// 	} else {
// 		console.log(data.text + 'was tweeted.');
// 	}
// });


	// log to console followers ids

// bot.get('followers/ids', {screen_name: 'igor_pinochet'}, (error, data, response) => {
// 	if (error) {
// 		console.log(error)
// 	} else {
// 		console.log(data)
// 	}
// });


// log to console list of followers


// bot.get('followers/list', {screen_name: 'IamKrus'}, (error, data) => {
// 	if (error) {
// 		console.log(error)
// 	} else {
// 		data.users.map(user => console.log(user.screen_name))
//
// 	}
// });


// bot.get('friends/list', {screen_name: 'igor_pinochet'}, (error, data) => {
// 	if (error) {
// 		console.log(error)
// 	} else {
// 		console.log(data);
// 	}
// });

bot.get('friendships/lookup', {screen_name: 'wowMariya'}, (error, data) => {
	if (error) {
		console.log(error)
	} else {
		console.log(data);
	}
});

// send new direct message

bot.post('direct_messages/new', {screen_name: 'wowMariya', text: 'Hello Masha'}, (error, data) => {
	if (error) {
		console.log(error)
	} else {
		console.log(data);
	}
});
