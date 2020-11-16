const Command = require("../../structures/Command.js");
const { MessageAttachment } = require("discord.js");
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

        const img = await this.client.img.achievement(user.displayAvatarURL({ size: 64, format: "png" }), text);
        const attachment = new MessageAttachment(img, "beautiful.png");

        const embed = new MessageEmbed()
            .setColor('#7D98F9')
            .attachFiles(attachment)
            .setImage("attachment://beautiful.png")

        return msg.channel.send(embed)
    }
}

module.exports = Beautiful;
