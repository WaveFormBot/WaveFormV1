const Command = require("../../structures/Command.js");
const { MessageAttachment, MessageEmbed } = require("discord.js");

class Beautiful extends Command {
  constructor(...args) {
    super(...args, {
      description: "Oh this. This is beautiful",
      cooldown: 3,
      cost: 5,
      usage: "beautiful [@user]"
    });
  }

  async run(msg, [user]) {
    user = await this.verifyUser(msg, user, true);

      const img = await this.client.img.beautiful(user.displayAvatarURL({ size: 256, format: "png" }));
      const attachment = new MessageAttachment(img, "beautiful.png");

      const embed = new MessageEmbed()
          .setTitle("Cool title")
          .attachFiles(attachment)
          .setImage("attachment://beautiful.png")

      return message.channel.send(embed)
  }
}

module.exports = Beautiful;
