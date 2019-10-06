# Project - Twitch Chat Bot for [Ravenfall](http://ravenfall.stream)

Very early days, work in progress chat bot written in node for the game Ravenfall. For more information, see the following;

GitHub: https://github.com/zerratar/

Game Client Releases: https://github.com/zerratar/Ravenfall/releases/

Twitch: https://www.twitch.tv/zerratar/

Game Website: http://ravenfall.stream

---

## Chat Commands

**Note:** The '!' is dependant on the prefix in the config, if you change that, your commands will start with that instead.

#### Player Commands

###### Join / Leave
- `!join` - Joins the game!
- `!leave`  - Leaves the game!

###### Skills, Training and Raids
- `!train <skill name>` - Train a skill of your choosing - See skills below.
- `!traininfo` - Show what you are currently training
- `!raid` - Join the raid, will you win?!
- `!stats` - Shows your current stats
- `!stats <skill>` - Shows information for a specific stat
- `!res` / `!resources` - Show your current resources!

###### Ferry Commands

- `ferryenter` / `embark` - Get on the boat! - Provide an island name to try and sail!
- `ferryleave` / `disembark` / `stop` - Get off the boat!
- `travel <destination>` / `sail <destination>` - See the world, travel to a different island

###### Misc Commands
- `!togglehelmet` - Toggle your helmet on/off
- `!togglepet` - Toggle through all of your pets, awwww

#### Broadcaster / Mod Commands

- `!kick <playername>` - Will attempt to kick the player from the game

###### Camera
- `!observe <username>` - Observe a specific player

###### Raid Commands
- `!startraid` - Start an in game boss raid! Raaawr!
- `!raid <username>` / `!raidwar <username>` - Start a raid war against another streamer!

---

## Running The Bot

1. With the account you want to use as your twitch chat bot, generate a token [at this link.](https://twitchapps.com/tmi/)
2. Edit `./config/config.json` - Example below;
3. Run `npm install`
4. Run `npm run start`

Example `config.json`
```js
{
    // Command prefix for the twitch chat.
    "prefix": "!",
    // The username of the bot account for twitch chat
    "botUsername": "superbot_3000",
    // The token generated in step 1, including the 'oauth'
    "botToken": "oauth:xxxxxxxxxxxxxxxxxxx",
    // The channel the bot will be running in, i.e the streamer username
    "twitchChannel": "streamer_name"
}
```

#### NPM commands:
- `npm run build` will transpile the project as it makes use of ES6 functionality.
- `npm run start` will run the build command, and then start the bot.
