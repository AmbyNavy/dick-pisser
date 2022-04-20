// Require the necessary discord.js classes
const { Client, Intents, Message, MessageContextMenuInteraction, Permissions, DiscordAPIError } = require('discord.js');
const { token } = require('./config.json');
const prefix = "$";
var unitauth = ['239986007313743873', '254216945375772673', '480792708462673920', '616316541499342848', '291933059576627200', '660046048667893760', '182162812276047874'];
var genauth = ['551491388999729202', '254216945375772673', '616316541499342848', '182162812276047874'];
var mcauth = ['701517292990627881', '254216945375772673'];
const airole = "931138758718394408";
const munchrole = "966124012394655815";
var bannednums = [88];
var remchannels = [];

// Create a new client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS,  Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MEMBERS, Intents.FLAGS.GUILD_PRESENCES, Intents.FLAGS.GUILDS] });

// When the client is ready, run this code (only once)
client.once('ready', () => {
	console.log('Ready!');
});


client.on("messageCreate", async (msg) => {
    
    if (remchannels.includes(msg.channel.id)) {
        msg.delete();
        
    }
    if (msg.content === "!rank") {
        msg.reply("Low Rank XD");
    }

    const content = msg.content.slice(1).split(" ");
    const command = content[0].toLowerCase();

    if (msg.content.toLowerCase().startsWith(prefix)) {
        console.log("Command: " + command + " - User: " + msg.author.username + " - FULL TEXT: " + msg.content);

        switch (command) {
            case "hey":
                msg.reply("Hey " + msg.author.username);
                break;

            case "sexme":
                msg.reply("<@551491388999729202> has sexed " + msg.author.username); 
                msg.member.roles.add(msg.guild.roles.cache.find(role => role.id == '898537395631292436'));
                break;

            case "unitify":
                try {
                    if (unitauth.includes(msg.author.id)) {
                        const member = msg.mentions.members.first();
                        if (!member) {
                            msg.reply("You need to @ the user. if they arent in this chat, @ them by typing `<@ID>`");
                        } else {
                            let unitrole = msg.guild.roles.cache.find(role => role.id == airole);
                            member.roles.add(unitrole);

                            await msg.guild.members.fetch(); // fetch all members and cache them
                            const list = unitrole.members.map(m => m.displayName); // map members by nickname
                            var numlist = [];
                            list.forEach(element => {
                                if (element.toUpperCase().includes("AI UNIT")) {
                                    numlist.push(Number(element.replace(/\D/g, "")));
                                }
                            });

                            var changed = false;
                            for (let inc = 11; inc < Math.max.apply(null, numlist); inc++) {
                                if (numlist.includes(inc) === false && !bannednums.includes(inc)) {
                                    if (!changed) {
                                        console.log("Was Set.");
                                        await member.edit({nick: "AI UNIT " + String(inc)});
                                        changed = true;
                                        
                                    }
                                    break;
                                }
                                
                            }
                            if (!changed) {
                                console.log("Was Not Set.");
                                await member.edit({nick: "AI UNIT " + (Math.max.apply(null, numlist)+1)});
                            }


                            msg.reply("<@" + msg.author.id + "> has indoctrinated " + content[1] + " into the legion! Welcome comrade.");
                            
                        }
                    }
                    break;
                } catch (err) {
                    msg.reply("There was some sort of error. God damnit.");
                    break;
                }

			case "deunitify":
				if (unitauth.includes(msg.author.id)) {
					
					try {

						const member = msg.mentions.members.first();
						if (!member) {
							msg.reply("You need to @ the user. if they arent in this chat, @ them by typing `<@ID>`");
						} else {
							let unitrole = msg.guild.roles.cache.find(role => role.id == airole);
							member.roles.remove(unitrole);
							member.edit({nick: ""});
							msg.reply(content[1] + " has been banished from the legion. Stinky.");
							
						}
					} catch (err) {
						console.log(err);HOLY 
					}


				}
				break;
			
			case "munchify":
				try {
					const member = msg.mentions.members.first();
					if (!member) {
						msg.reply("You need to @ the user. if they arent in this chat, @ them by typing `<@ID>`");
					} else {
						let muncherrole = msg.guild.roles.cache.find(role => role.id == munchrole);
						member.roles.add(muncherrole);
						msg.reply("<@" + msg.author.id + "> fucking loves eating graphite!");
					}
				break;
				} catch (err) {
					msg.reply("There was some sort of error. God damnit.");
					break;
				}
			
			case "demunchify":
				try {
					const member = msg.mentions.members.first();
					if (!member) {
						msg.reply("You need to @ the user. if they arent in this chat, @ them by typing `<@ID>`");
					} else {
						let muncherrole = msg.guild.roles.cache.find(role => role.id == munchrole);
						member.roles.remove(muncherrole);
						msg.reply("<@" + msg.author.id + "> no longer chews graphite - weirdo.");
					}
				break;
				} catch (err) {
					msg.reply("There was some sort of error. God damnit.");
					break;
				}

            case "say":
                if (genauth.includes(msg.author.id)) {
                    if (content.length > 1) {
                        msg.delete();
                        msg.channel.send(content.slice(1).join(" "));
                    }
                }
                break;
            
            case "listadmins":
                if (genauth.includes(msg.author.id)) {
                    var toSend = "";
                    if (content.length <= 1) {
                        content.push("e");
                    }
                    switch (content[1].toLowerCase()) {
                        case "general":
                            genauth.forEach(uid => {
                                try {
                                    toSend += msg.guild.members.cache.find(mbr => mbr.id == uid).username + "\t - " + msg.guild.members.cache.find(mbr => mbr.id == uid).id + "\n";
                                } catch (TypeError) {
                                    toSend += "User Left or Deleted\n";
                                }
                            });
                            break;
                        case "minecraft":
                            mcauth.forEach(uid => {
                                try {
                                    toSend += msg.guild.members.cache.find(mbr => mbr.id == uid).username + "\t - " + msg.guild.members.cache.find(mbr => mbr.id == uid).id + "\n";
                                } catch (TypeError) {
                                    toSend += "User Left or Deleted\n";
                                }
                            });                            break;
                        case "legion":
                            unitauth.forEach(uid => {
                                try {
                                    toSend += msg.guild.members.cache.find(mbr => mbr.id == uid).username + "\t - " + msg.guild.members.cache.find(mbr => mbr.id == uid).id + "\n";
                                } catch (TypeError) {
                                    toSend += "User Left or Deleted\n";
                                }
                            });                            break;
                        default:
                            toSend = "You need to specify a form to take.";

                    }
                    msg.reply(toSend);
                }
                break;

            case "unitlist":
                if (unitauth.includes(msg.author.id)) {
                    
                    await msg.guild.members.fetch(); // fetch all members and cache them
                    const role = msg.guild.roles.cache.get(airole); // get role from cache by ID (roles are always cached)
                    const list = role.members.map(m => m.displayName); // map members by nickname
                    
                    var usrString = list.join("\n");
                    msg.channel.send("```" + usrString + "```");

    
                }
                break;
            
            case "muteall":
                if (msg.author.id === "254216945375772673") {
                    //msg.channel.send("Fuck everyone!");
                    remchannels.push(msg.channel.id);
                }
                break;

            case "unmuteall":
                if (msg.author.id === "254216945375772673") {
                    //msg.channel.send("Done.");
                    remchannels = remchannels.filter(e => e != msg.channel.id);
                }
                break;


            case "emojilist":
                var emojis = msg.guild.emojis.cache.map(m => {
                    if (m.animated) {
                        return String("<a:" + m.name + ":" + m.id + ">");
                    } else {
                        return String("<:" + m.name + ":" + m.id + ">");
                    }
                    
                });
                var emojitext = "";
                emojis.forEach(e => {
                    if (String(emojitext + e).length < 2000) {
                        emojitext += e;
                    }
                    else {
                        msg.channel.send(emojitext);
                        emojitext = e;
                    }
                });
                msg.channel.send(emojitext);
                break;
            
            case "minecraftmention":
                if (mcauth.includes(msg.author.id)) {
                    let mcrole = msg.guild.roles.cache.find(role => role.id == '961793799426822184');
                    await mcrole.edit({mentionable: true});
                    await msg.channel.send("<@&961793799426822184> " + content.slice(1).join(" "));
                    await mcrole.edit({mentionable: false});
                    
                }
                break;

            case "legionmention":
                if (msg.author.id === "254216945375772673") {
                    let lgrole = msg.guild.roles.cache.find(role => role.id == airole);
                    await lgrole.edit({mentionable: true});
                    await msg.channel.send("<@&" + airole + "> " + content.slice(1).join(" "));
                    await lgrole.edit({mentionable: false});
                    
                }
                break;

            case "ping":
                msg.reply("Pong!");
                break;

            case "shutdown":
                if (genauth.includes(msg.author.id)) {
                    msg.reply("alright <@" + msg.author.id + ">. bye bye");
                    throw "Bot Died. - " + msg.author.username;
                }
                break;

            case "gogogo":
                if (genauth.includes(msg.author.id)) {
                    let lerole = msg.guild.roles.cache.find(role => role.id == '961520843509358633');
                    await lerole.setPermissions([Permissions.DEFAULT]);
                }
                break;

            case "myroles":
                var roleHeirarchy = [];
                var roleList = [];
                var rolePopularity = [];

                await msg.member.fetch();
                msg.member.roles.cache.forEach(role => {
                    roleHeirarchy.push(role.position);
                    roleList.push(role.name);
                    rolePopularity.push(role.members.size);
                });
                var tmp = "";
                

                for (let inc = Math.max.apply(null, roleHeirarchy); inc > -1; inc--) {
                    var index = roleHeirarchy.indexOf(inc);
                    if (index != -1) {
                        var repeatLength = 25-roleList[index].length;
                        if (repeatLength < 1) {
                            repeatLength = 1;
                        }
                        tmp += "`" + roleList[index] + " ".repeat(repeatLength) + rolePopularity[index] + " Members`\n";
                    }
                }
                //msg.reply("Role Heirarchy: \n" + roleHeirarchy.join("\n"));
                //msg.reply("Role List: \n" + roleList.join("\n"));
                msg.reply(tmp);
                break;

            }
        }
});

client.on("error", error => {
    var chan = client.channels.get("858545668439408640");
    chan.send(error);
});

// Login to Discord with your client's token
client.login(token);
