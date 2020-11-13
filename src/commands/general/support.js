const Command = require("../../structures/Command.js");


class Support extends Command {
  constructor(...args) {
    super(...args, {
      description: "Get the link to our support server."
    });
  }

  async run(msg, args) { // eslint-disable-line no-unused-vars
    return msg.send(this.client.embed()
      .setTitle("Join WaveForm Support")
        .setDescription("Hello my friend, if you need help setting up, join WaveForm Support.\nYou also get an oppurtunity to become a WaveForm Pro user which can only be obtained through a role in our server.\nYou will also recieve updates about the bot and much more!\n\n[Join Miyako Lounge](https://discord.gg/fAM2dJtfx7)")
      .setAuthor(this.client.user.tag, this.client.user.displayAvatarURL({ size: 64 })));
  }
}

module.exports = Support;
