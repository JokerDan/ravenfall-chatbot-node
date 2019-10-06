export default function(ctx) {

    if (ctx.args[0] == undefined || ctx.args.length !== 1) {
        ctx.twitchClient.say(ctx.channel, `You must specify a single destination!`);
        return;
    }

    const travelReq = new FerryTravelRequest(ctx.player, ctx.args[0].trim());

    ctx.dispatchEvent('ferry_travel', JSON.stringify(travelReq));
}

class FerryTravelRequest {
    constructor(player, destination) {
        this.Player = player;
        this.Destination = destination;
    }
}
