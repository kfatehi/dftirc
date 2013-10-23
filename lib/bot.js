var irc = require('irc');

module.exports = {
  connect: function(config) {
    this.client = new irc.Client(config.server, config.nick, {
      channels: config.channels,
    });
  }
}
