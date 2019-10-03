import tmi from 'tmi.js';
import * as userUtils from './util/user';
import net from 'net';

// Commands
import * as commands from './commands';

const validCommands = {
  ping: {
    function: commands.pong,
    description: 'Pings the bot to see if it s alive and well!'
  },
  join: {
    function: commands.joinGame,
    description: 'Attempts to join the streamers game of Ravenfall.'
  },
  leave: {
    function: commands.leaveGame,
  },
  train: {
    function: commands.task,
  },
  raid: {
    function: commands.raid
  },
  startraid: {
    function: commands.startRaid
  },
  togglepet: {
    function: commands.togglePet
  },
  togglehelmet: {
    function: commands.toggleHelmet
  }
};

// Define configuration options
const config = require('../config/config.json');
const options = {
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

// --------------------------------------------------------

// Create a client with our options
// Docs: https://github.com/tmijs/docs/tree/gh-pages/_posts/v1.4.2
const twitchClient = new tmi.client(options);
// Register our event handlers (defined below)
twitchClient.on('message', onMessageHandler);
twitchClient.on('connected', onConnectedHandler);

// Connect to Twitch
twitchClient.connect();

// --------------------------------------------------------

const socket = new net.Socket();
const netDetails = {
  address: '127.0.0.1',
  port: 4040
};
// socket.connect(netDetails.port, netDetails.address, () => {
//   console.log(`Opening Connection to local game server...`);
// });
socket.on('connect', () => console.info(`* Connected to ${netDetails.address}:${netDetails.port}`));
socket.on('error', (err) => console.error(err));
socket.on('data', (inf) => console.info(inf));
socket.on('end', (inf) => console.info(`* Socket ended for ${netDetails.address}:${netDetails.port}`));
// socket.on('timeout', (inf) => console.info(inf));

// --------------------------------------------------------

// Called every time a message comes in
function onMessageHandler(channel, userstate, message, self) {
  if (self) { return; } // Ignore messages from the bot

  // Check message is for this bots command prefix, then parse out the message
  const prefixRE = new RegExp(`^${config.prefix}`, 'ig');
  if (!prefixRE.test(message)) { return; } // If not msg for bot, return
  const command = message.replace(prefixRE, '').trim().replace(/ +/gi, ' ').split(' ');

  const rootCommand = command.shift();
  const args = command;

  // Our 'Command Dispatcher'
  if (validCommands[rootCommand] != undefined) {
    const player = new Player(userstate);
    validCommands[rootCommand].function(
      { channel, args, userstate, twitchClient, dispatchEvent, player } );
  }
}

// Called every time the bot connects to Twitch chat
function onConnectedHandler(addr, port) {
  console.log(`* Connected to ${addr}:${port}`);
}

class Player {
  constructor(userstate) {
    this.Username = userstate.username;
    this.UserId = userstate["user-id"];
    this.DisplayName = userstate["display-name"];
    this.Color = userstate.color;
    this.IsBroadcaster = userUtils.isBroadcaster(userstate);
    this.IsModerator = userUtils.isMod(userstate);
    this.IsSubscriber = userUtils.isSub(userstate);
  }
}

function dispatchEvent(eventName, data) {
  socket.connect(netDetails.port, netDetails.address, () => {
    socket.end(`${eventName}:${data}`);
  });
}
