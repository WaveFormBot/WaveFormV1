const Command = require("../../structures/Command.js");
const { MessageAttachment } = require("discord.js");

class Bed extends Command {
  constructor(...args) {
    super(...args, {
      description: "There is a monster under my bed!",
      cooldown: 3,
      cost: 5,
      usage: "bed <@user> [@user]"
    });
  }

    async run(msg, [user]) {
        user = await this.verifyUser(msg, user, true);

        const img = await this.client.img.bobross(user.displayAvatarURL({ size: 128, format: "png" }));
        const attachment = new MessageAttachment(img, "bobross.png");

        const embed = new MessageEmbed()
            .setColor('#7D98F9')
            .attachFiles(attachment)
            .setImage("attachment://bed.png")

        return msg.channel.send(embed)
  }
}

module.exports = Bed;
