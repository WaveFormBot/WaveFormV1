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
        .setDescription("If you need help setting up, **join WaveForm Support.**\nYou also get an oppurtunity to become a **WaveForm Pro** user which can only be obtained **through a role in our server.**\nYou will also recieve **updates about the bot and much more!**\n\n[**Join WaveForm Support**](https://discord.gg/GcyQSuzhfx)")
        .setImage('https://i.imgur.com/OwwZ5gC.png')
      .setAuthor(this.client.user.tag, this.client.user.displayAvatarURL({ size: 64 })));
  }
}

module.exports = Support;
