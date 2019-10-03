module.exports = {
  isBroadcaster: function(ctx) {
    return Boolean(ctx.badges.broadcaster);
  },

  isMod: function(ctx) {
    return (Boolean(ctx.mod) || isBroadcaster(ctx));
  },

  isSub: function(ctx) {
    return Boolean(ctx.subscriber);
  }
}
