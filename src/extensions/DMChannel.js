const { Structures } = require("discord.js");

module.exports = Structures.extend("DMChannel", (DMChannel) => class WaveFormDMChannel extends DMChannel {

  get readable() {
    // DMs always readable.
    return true;
  }

  get postable() {
    // DMs always postable.
    return true;
  }
});
