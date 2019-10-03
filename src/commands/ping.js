export default function(ctx) {
    ctx.twitchClient.say(ctx.channel, 'Hello!');
    console.info("Command Ran - Ping : Pong")
}
