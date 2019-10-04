export default function(ctx) {
    ctx.dispatchEvent('player_resources', JSON.stringify(ctx.player));
}
