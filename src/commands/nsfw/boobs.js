const Command = require("../../structures/Command.js");
const fetch = require("node-fetch");


class Boobs extends Command {
  constructor(...args) {
    super(...args, {
      description: "Hentai Boobs",
      cooldown: 5,
      cost: 15,
      nsfw: true
    });
  }

  async run(msg) {
    const { url } = await fetch("https://nekos.life/api/v2/img/boobs")
      .then((res) => res.json());

    const embed = this.client.embed()
      .setTitle("Hentai Boobs")
      .setImage(url)
      .setFooter(`Requested by: ${msg.author.tag} | Powered by nekos.life`, msg.author.displayAvatarURL({ size: 32 }));

    return msg.send({ embed });
  }
}

module.exports = Boobs;
