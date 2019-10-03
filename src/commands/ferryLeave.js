export default function(ctx) {
    ctx.dispatchEvent('ferry_leave', JSON.stringify(ctx.player));
}
