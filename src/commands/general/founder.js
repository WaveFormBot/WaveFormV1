const Command = require("../../structures/Command.js");
const { version } = require("discord.js");

class Founder extends Command {
  constructor(...args) {
    super(...args, {
      description: "View who the founders of the WaveForm Bot",
      aliases: ["info"]
    });
  }

  async run(msg, args) { // eslint-disable-line no-unused-vars
    const { client } = this; // Avoid typing a lot of 'this'

    const seconds = Math.floor(client.uptime / 1000) % 60 ;
    const minutes = Math.floor((client.uptime / (1000 * 60)) % 60);
    const hours = Math.floor((client.uptime / (1000 * 60 * 60)) % 24);
    const days = Math.floor((client.uptime / (1000 * 60 * 60 * 24)) % 7);
    const uptime = [`${days} Days`,
      `${hours} Hours`,
      `${minutes} Minutes`,
      `${seconds} Seconds`].filter((time) => !time.startsWith("0")).join(", ");

      return msg.send(this.client.embed()
          .setTitle("These are my owners! Be nice to them.")
          .setAuthor(this.client.user.tag, this.client.user.displayAvatarURL({ size: 64 }))
          .setImage('https://i.imgur.com/Mml6gPK.png'))
      
  }
}

module.exports = Founder;
