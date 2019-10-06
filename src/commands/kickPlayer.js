export default function(ctx) {
    console.log(ctx.player)
    if (!ctx.player.IsModerator) {
        ctx.twitchClient.say(ctx.channel, `Sorry ${ctx.player.Username} but you don't have permission to do this!`);
        return;
    }

    if (ctx.args[0] == undefined || ctx.args.length !== 1) {
        ctx.twitchClient.say(ctx.channel, `You need to provide a single users name!`);
        return;
    }
    const playerToKick = Object.create(ctx.player);
    playerToKick.Username = ctx.args[0];
    playerToKick.DisplayName = ctx.args[0];

    ctx.dispatchEvent('kick', JSON.stringify(ctx.player));
}
