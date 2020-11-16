const Command = require("../../structures/Command.js");
const { MessageAttachment, MessageEmbed } = require("discord.js");

class Achievement extends Command {
    constructor(...args) {
        super(...args, {
            description: "Achievement Get!",
            cooldown: 3,
            cost: 5,
            usage: "achievement [@user] <text>"
        });
    }

    async run(msg, [user, ...args]) {
        user = await this.verifyUser(msg, user, true)
            .catch(() => {
                args.unshift(user);
                return msg.author;
            });

        if (!args.length) return msg.send("Hey Friend, You need to provide some text.");

        const text = args.join(" ");

        if (text.length > 21) return msg.send("Sorry Friend, Text cannot be longer than 21 characters.");

        const img = await this.client.img.achievement(user.displayAvatarURL({ size: 64, format: "png" }), text);
        const attachment = new MessageAttachment(img, "achievement.png");

        const embed = new MessageEmbed()
            .setTitle("Cool title")
            .attachFiles(achievement)
            .setImage("attachment://achievement.png")

        return message.channel.send(embed)
    }
}

module.exports = Achievement;