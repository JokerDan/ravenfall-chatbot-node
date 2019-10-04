export default function(ctx) {

    let statRequest;

    statRequest = new StatsRequest(ctx.player, '');
    ctx.dispatchEvent('player_stats', JSON.stringify(statRequest));
}

class StatsRequest {
    constructor(player, skill) {
        this.Player = player;   // Player
        this.Skill = skill;     // String
    }
}
