export default function(ctx) {
    if (!ctx.player.IsBroadcaster) {
        ctx.twitchClient.say(ctx.channel, `Sorry ${ctx.player.Username} but you don't have permission to do this!`);
        return;
    }
    ctx.dispatchEvent('observe', JSON.stringify(ctx.player));
}
