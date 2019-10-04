export default function(ctx) {
    if (!ctx.player.IsBroadcaster) {
        ctx.twitchClient.say(ctx.channel, `Sorry ${ctx.player.Username} but you don't have permission to do this!`);
        return;
    }
    ctx.dispatchEvent('raid_force', JSON.stringify(ctx.player));
    // ctx.twitchClient.say(ctx.channel, `${ctx.userstate['display-name']} has STARTED a RAID!`);
}
