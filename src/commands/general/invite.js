const Command = require("../../structures/Command.js");


class Invite extends Command {
  constructor(...args) {
    super(...args, {
      description: "Invite me to your server!",
      aliases: ["inv"]
    });
  }

  async run(msg, args) { // eslint-disable-line no-unused-vars
    return msg.send(this.client.embed()
      .setTitle("Invite WaveForm to your server")
      .setAuthor(this.client.user.tag, this.client.user.displayAvatarURL({ size: 64 }))
        .setDescription("You can invite me to your server using the following link:\n\n[Invite Link](https://discord.com/oauth2/authorize?client_id=775870714024558602&permissions=2016537702&scope=bot)\n[Join WaveForm Support!](https://discord.gg/fAM2dJtfx7)"));
  }
}

module.exports = Invite;
