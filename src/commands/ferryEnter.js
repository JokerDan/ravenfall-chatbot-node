export default function(ctx) {
    ctx.dispatchEvent('ferry_enter', JSON.stringify(ctx.player));
}
