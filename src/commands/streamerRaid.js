export default function(ctx) {
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
