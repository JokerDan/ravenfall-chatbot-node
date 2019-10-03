export default function(ctx) {
    ctx.dispatchEvent('join', JSON.stringify(ctx.player))
    ctx.twitchClient.say(ctx.channel, `${ctx.userstate['display-name']} has joined the game!`);
}
