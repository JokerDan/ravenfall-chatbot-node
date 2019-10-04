export default function(ctx) {

    let statRequest = new StatsRequest(ctx.player, '');
    if (ctx.args[0] != undefined) {
        statRequest.Skill = String(ctx.args[0]);
    }
    ctx.dispatchEvent('player_stats', JSON.stringify(statRequest));
}

class StatsRequest {
    constructor(player, skill) {
        this.Player = player;   // Player
        this.Skill = skill;     // String
    }
}
