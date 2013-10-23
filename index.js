var config = require('./config.json');
var webapp = require('./lib/app.js');
var ircbot = require('./lib/bot.js');

ircbot.connect(config.irc);

webapp.listen(config.web.port);
