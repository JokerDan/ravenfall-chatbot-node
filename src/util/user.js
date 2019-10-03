module.exports = {
  isBroadcaster: function(ctx) {
    if (!ctx.badges) {
      return false;
    }
    return Boolean(ctx.badges.broadcaster);
  },

  isMod: function(ctx) {
    return (Boolean(ctx.mod) || this.isBroadcaster(ctx));
  },

  isSub: function(ctx) {
    return Boolean(ctx.subscriber);
  }
}
