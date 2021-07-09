const Readline = require("readline");

const io = Readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

module.exports = io;
