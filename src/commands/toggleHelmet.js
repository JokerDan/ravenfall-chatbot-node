export default function(ctx) {
    ctx.dispatchEvent('toggle_helmet', JSON.stringify(ctx.player));
}
