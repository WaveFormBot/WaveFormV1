const Command = require("../../structures/Command.js");
const { version } = require("discord.js");

class Founder extends Command {
  constructor(...args) {
    super(...args, {
      description: "View bot statistics and information.",
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
      .setTitle("WaveForm - Bot Founders")
        .setDescription("Hey! i'm WaveFormSUS! A bot heavily recoded by Allen K.#7284 and Captiosus#4658")
      .setAuthor(this.client.user.tag, this.client.user.displayAvatarURL({ size: 64 }))
      .setImage()
      .addField("Bot Stats", [
        `**Allen K.#7284**`,
        ``,
      ].join("\n")))         
  }
}

module.exports = Founder;
