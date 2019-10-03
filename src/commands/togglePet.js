export default function(ctx) {
    ctx.dispatchEvent('toggle_pet', JSON.stringify(ctx.player))
}
