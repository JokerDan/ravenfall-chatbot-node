import streamerRaid from './streamerRaid';

export default function(ctx) {

    if (ctx.args[0] == undefined) {
        ctx.dispatchEvent('raid_join', JSON.stringify(ctx.player));
        return;
    } else {
        streamerRaid(ctx);
    }

    // ctx.twitchClient.say(ctx.channel, `${ctx.userstate['display-name']} has joined the RAID!`);
}
