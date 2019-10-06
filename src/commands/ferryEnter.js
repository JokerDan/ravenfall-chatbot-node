import ferryTravel from './ferryTravel';

export default function(ctx) {

    if (ctx.args[0] == undefined || ctx.args.length == 0) {
        ctx.dispatchEvent('ferry_enter', JSON.stringify(ctx.player));
        return;
    } else {
        ferryTravel(ctx);
    }
}
