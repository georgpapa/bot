const Discord = require("discord.js")

const client = new Discord.Client();

const config = require("./config.json");

client.on ("guildMemberAdd", function(member) {
	member.guild.channels.find("name", "welcome-goodbye").send(member.toString() + " Welcome to UridiumNetwork");

	member.addRole(member.guild.roles.find("name", "Member"));
});

client.on("message", async message =>{
	if(message.author.bot) return;
    if(message.content.indexOf(config.prefix) !== 0) return;

    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    if(command === "ip") {
    const embed = new Discord.RichEmbed()
    .setTitle("Ip Command")
    .setAuthor("UridiumNetwork")
    .setColor("0x00AE86")
    .addField("Network Ip",
      "Our Ip has not been published yet.")
    message.channel.send({embed});
  }

  if(command === "help") {
  const embed =  new Discord.RichEmbed()
  .setTitle("Help Menu")
  .setAuthor("Menu by GeorgGames", "https://www.youtube.com/channel/UCYpdSYhQbeFoGJ3XyPRD4vw")
  .setColor(0x00AE86)
  .addField("Member Commands",
  	"/help **Opens the help menu \n/ip **Gives you the ip of the server.** \n/apply **Gives you the application form.** \n/ping **Gives you your ms.**")
  message.channel.send({embed});
  }

  if(command === "ping") {

  const m = await message.channel.send("Ping?")
  m.edit(`Your ping is ${m.createdTimestamp - message.createdTimestamp}ms. API latency is ${Math.round(client.ping)}ms`);
  }
  if(command === "apply") {
  const embed = new Discord.RichEmbed()
  .setTitle("Application Forms")
  .setAuthor("UridiumNetwork")
  .setColor(0x00AE86)
  .addField("Network Forms" ,
    "We don`t need staff members at the moment")
  message.channel.send({embed});
  }
    

  if(command === "sponsor") {
  const embed = new Discord.RichEmbed()
  .setTitle("Sponsor Information")
  .setAuthor("UridiumNetwork")
  .setColor(0x00AE86)
  .addField("HISC",
    "Uridium Network is provided by Hellenic Internet Service Center. Hellenic Internet Service Center is a Greek Organization that contains:\n :one:  Moneysafe2Paypal exchange System\n :two:  Minecraft Hosting\n :three: Professional Developers\n :four:  Minecraft Servers/Networks\n :five:  Minecraft/Fortnite Alt Shops")
  message.channel.send({embed});
  }
});

client.login(config.token);