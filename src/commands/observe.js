export default function(ctx) {
    ctx.dispatchEvent('observe', JSON.stringify(ctx.player));
}
