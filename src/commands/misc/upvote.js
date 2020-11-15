const Command = require("../../structures/Command.js");

class Upvote extends Command {
  constructor(...args) {
    super(...args, {
      description: "Upvote for me!",
      aliases: ["vote"]
    });
    }

    async run(msg, args) { // eslint-disable-line no-unused-vars
        const { client } = this; // Avoid typing a lot of 'this'

        const seconds = Math.floor(client.uptime / 1000) % 60;
        const minutes = Math.floor((client.uptime / (1000 * 60)) % 60);
        const hours = Math.floor((client.uptime / (1000 * 60 * 60)) % 24);
        const days = Math.floor((client.uptime / (1000 * 60 * 60 * 24)) % 7);
        const uptime = [`${days} Days`,
        `${hours} Hours`,
        `${minutes} Minutes`,
        `${seconds} Seconds`].filter((time) => !time.startsWith("0")).join(", ");

        return msg.send(this.client.embed()
            .setTitle("Hey Friend! Please upvote me on top.gg!")
            .setDescription('***https://top.gg/bot/775870714024558602***')
            .setAuthor(this.client.user.tag, this.client.user.displayAvatarURL({ size: 64 }))
            .setImage('https://i.imgur.com/iZU23p3.png'))

    }
}

module.exports = Upvote;
