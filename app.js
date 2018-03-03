const path = require('path');
const chalk = require('chalk');
const express = require('express');
const app = express();

app.use('/js', express.static(path.join('build')));
app.use('/phaser', express.static(path.join('node_modules', 'phaser-ce', 'build')));
app.use('/assets', express.static(path.join('src', 'assets')));

app.listen(8080, '0.0.0.0', () => {
	console.log();
	console.log(chalk.green('Server listening on 8080'));
})

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, 'index.html'));
});