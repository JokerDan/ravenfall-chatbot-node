export default function(ctx) {
    ctx.dispatchEvent('leave', JSON.stringify(ctx.player));
    ctx.twitchClient.say(ctx.channel, `${ctx.userstate['display-name']} has left the game!`);
}
