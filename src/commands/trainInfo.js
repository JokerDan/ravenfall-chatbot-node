export default function(ctx) {
    ctx.dispatchEvent('train_info', JSON.stringify(ctx.player));
}
