const Command = require("../../structures/Command.js");
const { MessageAttachment, MessageEmbed } = require("discord.js");

class Bobross extends Command {
  constructor(...args) {
    super(...args, {
      cooldown: 3,
      cost: 5,
      usage: "bobross [@user]"
    });
  }

  async run(msg, [user]) {
    user = await this.verifyUser(msg, user, true);

      const img = await this.client.img.bobross(user.displayAvatarURL({ size: 256, format: "png" }));
      const attachment = new MessageAttachment(img, "bobross.png");

      const embed = new MessageEmbed()
          .setColor('#429EFF')
          .attachFiles(attachment)
          .setImage("attachment://bobross.png")

      return msg.channel.send(embed)
  }
}

module.exports = Bobross;
