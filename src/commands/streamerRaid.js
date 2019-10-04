export default function(ctx) {
    // Temporarily allow zerratar to force a raid start for testing :)
    if (!ctx.player.IsBroadcaster && !ctx.player.username == 'zerratar') {
        ctx.twitchClient.say(ctx.channel, `Sorry ${ctx.player.Username} but you don't have permission to do this!`);
        return;
    }

    if (ctx.args[0] == undefined) {
        return;
    }
    const streamerRaid = new StreamerRaid(
        ctx.player,
        true
    );
    streamerRaid.Player.username = ctx.args[0];
    streamerRaid.Player.DisplayName = ctx.args[0];
    ctx.dispatchEvent('raid_streamer', JSON.stringify(streamerRaid, true));
}

class StreamerRaid {
    constructor(player, war) {
        this.Player = player;
        this.War = war;
    }
}
