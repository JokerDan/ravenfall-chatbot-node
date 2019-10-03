export default function(ctx) {
    ctx.dispatchEvent('raid_force', JSON.stringify(ctx.player));
    ctx.twitchClient.say(ctx.channel, `${ctx.userstate['display-name']} has STARTED a RAID!`);
}
