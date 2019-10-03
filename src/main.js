import tmi from 'tmi.js';

// Commands
import * as commands from './commands';

// Define configuration options
const config = require('../config/config.json');
const opts = {
  identity: {
    username: config.botUsername,
    password: config.botToken
  },
  connection: {
    reconnect: true,
    secure: true
  },
  channels: [
    config.twitchChannel
  ]
};

const state = {
  data: {}
};

// Create a client with our options
// Docs: https://github.com/tmijs/docs/tree/gh-pages/_posts/v1.4.2
const client = new tmi.client(opts);
// Register our event handlers (defined below)
client.on('message', onMessageHandler);
client.on('connected', onConnectedHandler);

// Connect to Twitch
client.connect();

// Called every time a message comes in
function onMessageHandler(channel, context, message, self) {
  if (self) { return; } // Ignore messages from the bot

  // Check message is for this bots command prefix, then parse out the message
  const prefixRE = new RegExp(`^${config.prefix}`, 'ig');
  if (!prefixRE.test(message)) { return; } // If not msg for bot, return
  const command = message.replace(prefixRE, '').trim().replace(/ +/gi, ' ').split(' ');

  const rootCommand = command.shift();
  const args = command;

  const validCommands = {
    'ping': {
      'function': commands.pong,
    }
  };

  if (validCommands[rootCommand] != undefined) {
    validCommands[rootCommand].function(
      { channel, client } );
  }
}

// Called every time the bot connects to Twitch chat
function onConnectedHandler(addr, port) {
  console.log(`* Connected to ${addr}:${port}`);
}


function sendEvent(eventName, object) {

}
