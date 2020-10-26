const { MessageEmbed } = require('discord.js')
const r = require('../../src/randomizers')

module.exports.run = (bot, message, args) => {
    if (!args[0]) return message.channel.send('What do you want clyde to say?');
    let clydeMessage = args.slice(0).join(' ');
    let encodedLink = encodeURI(`https://ctk-api.herokuapp.com/clyde/${clydeMessage}`);
    const clydeEmbed = new MessageEmbed()
      
    .setImage(encodedLink)
    .setFooter(r)
      
    message.channel.send(clydeEmbed)
  }
  module.exports.help = {
	name: "clyde",
	aliases: [],
	description: "",
	usage: "",
	category: "fun",
};