// Require the necessary discord.js classes
const { Client, Intents, MessageEmbed, Guild, CommandInteractionOptionResolver } = require('discord.js');
const { token } = require('./config.json');
const fs = require('fs')
const prefix = "$";
var unitauth = ['239986007313743873', '254216945375772673', '480792708462673920', '616316541499342848', '291933059576627200', '660046048667893760', '182162812276047874', '480088366663335938', '291933059576627200', '701517292990627881'];
var adminauth = ['239986007313743873', '319658921126133762', '480792708462673920', '254216945375772673', '616316541499342848', '182162812276047874', '480088366663335938', '291933059576627200'];
var mcauth = ['701517292990627881', '254216945375772673', '182162812276047874','291933059576627200'];
var munchauth = ["182162812276047874", "701517292990627881", "480792708462673920", "322850804761624576", "610736360411758604"]
var ambyauth = "182162812276047874";
var ambyaltauth = "962453954543902740";
const airole = "982828262843617301";
const phrogerole = "983152988933718036";
var phrogeauth = ["701517292990627881", "182162812276047874"];
const munchrole = "966124012394655815";
var bannednums = [88];
var remchannels = [];
var annoy = false;
var muteeveryone = false;
var tobeannoyed = 0;
var wumbusannoy = "716860776694153296";
var wumbusquiet = false;
var modteamauth = ["319658921126133762", "480792708462673920", "393564496922148865", "616316541499342848", "701517292990627881", "182162812276047874", "480792708462673920", "660614807300472845", "225772174336720896", "534245314606006273"]
const jihadrole = "989562510023733319" ;
var jihadauth = ['828555638837346354', '182162812276047874'];
var bannedwords = ["cock", "vulva", "masturbat", "erotic", "ahegao", "whore", "breast", "nude", "naked", "nipple", "tiddy", "foreskin", "tiddies", "penile", "hentai", "cunnilingus", "ejaculation", "penes", "labia", "nudity", "scrotum", "herpes", "genital", "fetish", "dick", "porn", "sex", "nigger", "faggot", "vagina", "penis", "nazi", "nigga", "furries", "furry", "yiff", "pubes", "pubic", "testicles", "nsfw", "boob", "breasts", "%46%6f%72%72%65%73 %41%63%61%64%65%6d%79", "semen"]; 
const airole2 = '911164577071378493';
const guesscooleddown = new Set();
var wumbusboys = ["212591081999695872", "120811982608662530", "439016537257672707", "121089524276133892", "709949386234396763", "716860776694153296", "772336999540981760", ];

// Create a new client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS,  Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MEMBERS, Intents.FLAGS.GUILD_PRESENCES, Intents.FLAGS.GUILDS] });

// When the client is ready, run this code (only once)
client.once('ready', () => {
	console.log('time to piss dick');
});

function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min +1) + min);
}

client.on("messageCreate", async (msg) => {
    if (msg.author.id == wumbusannoy && wumbusquiet == true) {
        msg.delete();
    }
    if (msg.author.id == tobeannoyed && annoy == true) {
        var random = randomIntFromInterval(1, 3);
        if (random == 3){
            msg.delete();
            console.log("deleted");
        }
    }
    if (muteeveryone == true && remchannels.includes(msg.channel.id)) {
        msg.delete();
    }
    if (msg.content.includes("<:yawning_face:emoji id>")) {
        msg.delete();
    }
    if (msg.content === "!rank") {
        msg.reply("low rank xd").catch(e=>{console.log(`Saved bot from crash, error:\n${e}`)});
    }
    if (msg.content.includes("?lockdown") && !msg.content.includes("?lockdown end")) {
        setTimeout(() => {msg.reply("https://cdn.discordapp.com/attachments/790138778181435402/995026345899864084/StandBy-1.mp4")}, 10000);
    }
    const content = msg.content.slice(1).split(" ");
    const command = content[0].toLowerCase();

    if (msg.content.toLowerCase().startsWith(prefix)) {
        console.log("Command: " + command + " - User: " + msg.author.username + " - FULL TEXT: " + msg.content);

        switch (command) {

////////// Chat Commands //////////

            case "annoy":
                if (msg.author.id == ambyauth || msg.author.id == ambyaltauth) {
                    const member = msg.mentions.members.first();
                    if (!member) {
                        msg.reply("You need to @ the user. if they arent in this chat, @ them by typing `<@ID>`");
                    } else {
                        if (annoy == false) {
                            annoy = true;
                            tobeannoyed = member.id;
                            msg.channel.send("trolled");
                        } else {
                            annoy = false;
                            tobeannoyed = 0;
                            msg.channel.send("untrolled");
                        }
                    }
                }
            break;

            case "wumbusquiet":
                if (msg.author.id =='480792708462673920' ) {
                        if (wumbusquiet == false) {
                            wumbusquiet = true;
                        } else {
                            wumbusquiet = false;
                        }
                    }
            break;

            case "hey":
                msg.reply("Hey " + msg.author.username);
                break;
           
            case "say":
                if (adminauth.includes(msg.author.id)) {
                    if (content.length > 1) {
                        msg.delete();
                        msg.channel.send(content.slice(1).join(" "));
                    }
                }
                break;

            case "playlist":
                msg.reply("The Bean Zone Lore playlist, curated by AmbyNavy: https://www.youtube.com/playlist?list=PLfRqRuxX3UFXGyZpj8NHOHm7C1EokiI0A");
                break;
  
            case "munch" :
                msg.channel.send("https://cdn.discordapp.com/attachments/858545668439408640/967030446389096508/beanzone_graphite_munchers_render_forest.mp4")   
            break;

            case "ping":
                msg.reply("Pong!");
                break;

            case "bam":
                try {
                    const member = msg.mentions.members.first();
                    if (!member) {
                        break;
                    } else {
                        msg.reply("bammed <@" + msg.mentions.members.first().id + ">");
                    }
                } 
                catch (err) {
                    msg.reply("There was some sort of error. God damnit.");
                    break;
                } 
                break;      

            case "wheel":
                if (modteamauth.includes(msg.author.id)) {  
                    try{
                        const embed = new MessageEmbed().setImage('https://media.giphy.com/media/EpqmhROkIwfza/giphy.gif').setTitle("Spinning the wheel for you, please hold...")
                        msg.channel.send({ embeds: [embed] })
                        await msg.guild.members.fetch(); // fetch all members and cache them
                        const role = msg.guild.roles.cache.get(content.slice(1).join(" ")); // get role from cache by ID (roles are always cached)
                        var rigged = false;
                        if (rigged == true) {
                            if (role == '789754987370512385' || role == '925686765589790740') {
                                msg.channel.send("The winner is <@182162812276047874>! Congratulations!");
                            } else {
                                const list = role.members.map(m => m.id);
                                const length = list.length;
                                const winner = list[Math.floor(Math.random() * length)];
                                msg.channel.send("The winner is <@" + winner + ">! Congratulations!");
                            }
                        }else{
                        const list = role.members.map(m => m.id);
                                const length = list.length;
                                const winner = list[Math.floor(Math.random() * length)];
                                msg.channel.send("The winner is <@" + winner + ">! Congratulations!");
                        }
                    }
                    catch(err){
                        msg.reply("There was an error. Please try again.");
                        console.log(err);
                    }
                }break;

            case "cockrate":
                const talkedrecentlycock = new Set();
                if(msg.author.id.includes('182162812276047874') || msg.author.id.includes('480792708462673920') || msg.author.id.includes('319658921126133762')) {
                try{
                    var values = [];
                    var total = 0;
                    var member = msg.mentions.members.first();
                    while(values.length <= 5) { //get 6 values for rating
                        var randomiser = Math.floor(Math.random() * 7) + 1;
                        // Randomiser weighting block. Kinda retarded but yields varied enough results to keep as is. do not touch lol
                        if (randomiser == 1) {
                            values[values.length] = 1;
                        }
                        if (randomiser == 7) {
                            values[values.length] = 10;
                        }
                        if (randomiser == 2 || randomiser == 3) {
                            values[values.length] = randomIntFromInterval(2,6);
                        }
                        if (randomiser == 4 || randomiser == 5 || randomiser == 6) {
                            values[values.length] = randomIntFromInterval(7,9);
                        }
                    }
                    for(var i = 0; i < values.length; i++) {
                        total += values[i];
                    }
                    total = Math.floor(total /6);
                    console.log('Average Calculated')
                    if(!member) { member = msg.author.id} // if no member use author 
                    msg.channel.send("**COCK RATING:** <@" + member + ">\nGirth: " + values[0] + "/10\nShape: " + values[1] + "/10\nFlaccidness: " + values[2] + "/10\nCock To Ball Ratio: " + values[3] + "/10\nHair: " + values[4] + "/10\nLength:" + values[5] + "/10\n**FINAL RATING:** " + total + "/10!")
                }
                catch(err){
                    msg.reply("There was an error. Please try again.");
                    console.log(err);
                }} else{
                    if (talkedrecentlycock.has(msg.author.id)) {
                        msg.author.send("You can only use the `cockrate` command every hour. not like you're gonna get a different answer anyway.").catch(e=>{console.log(`Saved bot from crash, error:\n${e}`)});
                    } else {
                        msg.reply("**COCK RATING:** <@" + msg.author.id + ">\nGirth: -10/10\nShape:-10/10\nFlaccidness: -10/10\nCock To Ball Ratio: -10/10\nHair: -10/10\nLength: -10/10\n**FINAL RATING:** -10/10!\n\nget a fucking life holy shit stop trying to rate your cock on the internet you fucking cringe ass bitch");
                        talkedrecentlycock.add(msg.author.id);
                        setTimeout(() => {
                            talkedrecentlycock.delete(msg.author.id);
                        }, 3600000);
                    }
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

            case "wiki" :
                const talkedrecentlywiki = new Set();
                try {
                    if (modteamauth.includes(msg.author.id) && msg.author.id != '476735278627946497') {
                        if (talkedrecentlywiki.has(msg.author.id  && msg.author.id != ambyauth && msg.author.id != ambyaltauth)) {
                            msg.author.send("You can only use the `wiki` command every minute.").catch(e=>{console.log(`Saved bot from crash, error:\n${e}`)});
                            break;
                        }else {
                            if (content.length > 1) {
                                var search = content.slice(1).join(" ")
                                for(i = 0; i < bannedwords.length; i++) {
                                    var searchlower = search.toLowerCase();
                                    if(searchlower.includes(bannedwords[i])) {
                                        msg.author.send("<@" + msg.author.id + "> You're not allowed to search for that word.");
                                        return;
                                    }
                                }
                                search = search.replaceAll(" ", "_");
                                msg.channel.send("<@" + msg.author.id + "> https://en.wikipedia.org/wiki/" + search).catch(e=>{console.log(`Saved bot from crash, error:\n${e}`)});
                                talkedrecentlywiki.add(msg.author.id);
                                setTimeout(() => {
                                    talkedrecentlywiki.delete(msg.author.id);
                                }, 60000);
                                console.log("sent wiki"); 
                            }
                        }
                    }
                } catch (err) {
                    console.log(err); 
                    break;
                }
            break;

            case "randomwiki" :
                try {
                    if (ambyauth.includes(msg.author.id) || ambyaltauth.includes(msg.author.id) || msg.author.id != '476735278627946497') {
                    msg.reply("https://en.wikipedia.org/wiki/Special:Random").catch(e=>{console.log(`Saved bot from crash, error:\n${e}`)});
                    }
                } catch(err){
                    console.log(err);
                }
            break;
////////// Role Commands //////////

            case "unitify":
                try {
                    if (unitauth.includes(msg.author.id)) {
                        
                        const member = msg.mentions.members.first();
                        let unitrole = 0;
                        if (!member) {
                            msg.reply("You need to @ the user. if they arent in this chat, @ them by typing `<@ID>`");
                        } else {
                            if (Guild.id == 911163788634521640) {
                                unitrole = msg.guild.roles.cache.find(role => role.id == airole2);
                            }else{
                                unitrole = msg.guild.roles.cache.find(role => role.id == airole);
                            }
                            
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
                } catch (err) {
                    msg.reply("There was some sort of error. God damnit.");
                    break;
                }
                break;

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
						console.log(err); 
                        break;
					}

                }
				break;
						
			case "munchify":
				try {
                    if (munchauth.includes(msg.author.id)) {
					    const member = msg.mentions.members.first();
                        if (!member) {
                            msg.reply("You need to @ the user. if they arent in this chat, @ them by typing `<@ID>`");
                        } else {
                            let muncherrole = msg.guild.roles.cache.find(role => role.id == munchrole);
                            member.roles.add(muncherrole);
                            msg.reply("<@" + msg.mentions.members.first().id + "> fucking loves eating graphite!");
                        }
                    }
				} 
                catch (err) {
					msg.reply("There was some sort of error. God damnit.");
					break;
				}	
                break;	

			case "demunchify":
				try {
                    if (munchauth.includes(msg.author.id)) {
                        const member = msg.mentions.members.first();
                        if (!member) {
                            msg.reply("You need to @ the user. if they arent in this chat, @ them by typing `<@ID>`");
                        } else {
                            let muncherrole = msg.guild.roles.cache.find(role => role.id == munchrole);
                            member.roles.remove(muncherrole);
                            msg.reply("<@" + msg.mentions.members.first().id + "> no longer chews graphite - weirdo.");
                        }
                    }
				} catch (err) {
					msg.reply("There was some sort of error. God damnit.");
					break;
				}
				break;
                
            case "jihadify":
                    try {
                        if (jihadauth.includes(msg.author.id)) {
                            const member = msg.mentions.members.first();
                            if (!member) {
                                msg.reply("You need to @ the user. if they arent in this chat, @ them by typing `<@ID>`");
                            } else {
                                let jihadirole = msg.guild.roles.cache.find(role => role.id == jihadrole);
                                member.roles.add(jihadirole);
                                msg.reply("<@" + msg.mentions.members.first().id + "> joined the jihad! inshallah habibi.");
                            }
                        }
                    } 
                    catch (err) {
                        msg.reply("There was some sort of error. God damnit.");
                        break;
                    }	
                    break;	
    
            case "dejihadify":
                    try {
                        if (jihadauth.includes(msg.author.id)) {
                            const member = msg.mentions.members.first();
                            if (!member) {
                                msg.reply("You need to @ the user. if they arent in this chat, @ them by typing `<@ID>`");
                            } else {
                                let jihadirole = msg.guild.roles.cache.find(role => role.id == jihadrole);
                                member.roles.remove(jihadirole);
                                msg.reply("<@" + msg.mentions.members.first().id + "> left the light of allah.");
                            }
                        }
                    } catch (err) {
                        msg.reply("There was some sort of error. God damnit.");
                        break;
                    }
                    break; 

            case "phrogify":
                try {
                    if (phrogeauth.includes(msg.author.id)) {
                        
                        const member = msg.mentions.members.first();
                        if (!member) {
                            msg.reply("You need to @ the user. if they arent in this chat, @ them by typing `<@ID>`");
                        } else {
                            member.roles.add(phrogerole);

                            member.setNickname(member.nickname + " 𓆏");

                            msg.reply("<@" + msg.author.id + "> has helped " + content[1] + " become a phroge fren :>");
                        }
                    }
                } catch (err) {
                    msg.reply("There was some sort of error. God damnit.");
                    console.log(err);
                    break;
                }
            break;

            case "unphrogify":
                try {
                    if (phrogeauth.includes(msg.author.id)) {
                        
                        const member = msg.mentions.members.first();
                        if (!member) {
                            msg.reply("You need to @ the user. if they arent in this chat, @ them by typing `<@ID>`");
                        } else {
                            member.roles.remove(phrogerole);

                            member.setNickname(member.nickname.replace(" 𓆏", ""));

                            msg.reply( content[1] + " has decided to leave the phroge frens. byebye :wave:!");
                        }
                    }
                } catch (err) {
                    msg.reply("There was some sort of error. God damnit.");
                    console.log(err);
                    break;
                }
            break;

            case "members":
                if (adminauth.includes(msg.author.id)) {
                    try {
                    msg.channel.send("Gathering members, please hold..")
                    await msg.guild.members.fetch(); // fetch all members and cache them
                    const role = msg.guild.roles.cache.get(content.slice(1).join(" ")); // get role from cache by ID (roles are always cached)
                    const list = role.members.map(m => m.displayName);
                     // map members by nickname
                    
                    var userString = list.join("\n");
                    
                    fs.writeFile("./rolemembers.txt", userString, (err) => {
                        if (err) {
                            console.log(err);
                        }

                        console.log('Members Saved');
                    });
                    msg.channel.send({files: [{attachment: "rolemembers.txt", name: "rolemembers.txt"}]});
                    console.log("Members sent.");
                }catch (err) {
                    msg.reply("There was an error. Please try again.");
                    console.log(err);
                }
            }break;

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
            
            // case "listadmins":
            //     if (adminauth.includes(msg.author.id)) {
            //         var toSend = "";
            //         if (content.length <= 1) {
            //             content.push("e");
            //         }
            //         switch (content[1].toLowerCase()) {
            //             case "general":
            //                 adminauth.forEach(uid => {
            //                     try {
            //                         toSend += msg.guild.members.cache.find(mbr => mbr.id == uid).username + "\t - " + msg.guild.members.cache.find(mbr => mbr.id == uid).id + "\n";
            //                     } catch (TypeError) {
            //                         toSend += "User Left or Deleted\n";
            //                     }
            //                 });
            //                 break;
            //             case "minecraft":
            //                 mcauth.forEach(uid => {
            //                     try {
            //                         toSend += msg.guild.members.cache.find(mbr => mbr.id == uid).username + "\t - " + msg.guild.members.cache.find(mbr => mbr.id == uid).id + "\n";
            //                     } catch (TypeError) {
            //                         toSend += "User Left or Deleted\n";
            //                     }
            //                 });                            break;
            //             case "legion":
            //                 unitauth.forEach(uid => {
            //                     try {
            //                         toSend += msg.guild.members.cache.find(mbr => mbr.id == uid).username + "\t - " + msg.guild.members.cache.find(mbr => mbr.id == uid).id + "\n";
            //                     } catch (TypeError) {
            //                         toSend += "User Left or Deleted\n";
            //                     }
            //                 });                            break;
            //             default:
            //                 toSend = "You need to specify a form to take.";

            //         }
            //         msg.reply(toSend);
            //     }
            //     break;
      
////////// The Funny //////////
                     
            case "muteall":
                if (msg.author.id === ambyauth || msg.author.id === "765871804136423434") {
                    msg.channel.send("Fuck everyone!");
                    muteeveryone = true;
                    remchannels.push(msg.channel.id);
                }
                break;

            case "unmuteall":
                if (msg.author.id === ambyauth || msg.author.id === "765871804136423434") {
                    muteeveryone = false;
                    msg.channel.send("Done.");
                    remchannels = remchannels.filter(e => e != msg.channel.id);
                }
                break;

////////// Mention Commands //////////
                
            case "minecraftmention":
                if (mcauth.includes(msg.author.id)) {
                    msg.delete();
                    let mcrole = msg.guild.roles.cache.find(role => role.id == '961793799426822184');
                    await mcrole.edit({mentionable: true});
                    await msg.channel.send("<@&961793799426822184> " + content.slice(1).join(" "));
                    await mcrole.edit({mentionable: false});
                    
                }
                break;

            case "legionmention":
                if (msg.author.id === "254216945375772673" || msg.author.id === "182162812276047874") {
                    msg.delete();
                    let lgrole = msg.guild.roles.cache.find(role => role.id == airole);
                    await lgrole.edit({mentionable: true});
                    await msg.channel.send("<@&" + airole + "> " + content.slice(1).join(" "));
                    await lgrole.edit({mentionable: false});
                    
                }
                break;

            case "jihadmention":
                if (msg.author.id === "828555638837346354" || msg.author.id === "182162812276047874") {
                    let lgrole = msg.guild.roles.cache.find(role => role.id == "989562510023733319");
                    await lgrole.edit({mentionable: true});
                    await msg.channel.send("<@&" + "989562510023733319" + "> " + content.slice(1).join(" "));
                    await lgrole.edit({mentionable: false});
                    
                }
                break;

            case "mention":
                if (msg.author.id === "393564496922148865" || msg.author.id === "182162812276047874" || msg.author.id === "476459750561939458" || msg.author.id === "480792708462673920" || msg.author.id === "319658921126133762") {
                    try {
                    let mentionrole = msg.guild.roles.cache.find(role => role.id == content[1]);
                    msg.delete();
                    await mentionrole.edit({mentionable: true});
                    let removearr = content.slice(0, 2);
                    const removalset = new Set(removearr);
                    const msgcontent = content.filter((name) => {
                        // return those elements not in the content
                        return !removalset.has(name);
                      });
                    await msg.channel.send("<@&" + mentionrole + "> " + msgcontent.join(" "));
                    await mentionrole.edit({mentionable: false});
                    }catch(err){
                        console.log(err); 
                        msg.channel.send("You did something that almost crashed the bot you dribbling idiot. Get Amby to check the console. (if it was you amby then lol(lmao))");
                    }
                    
                }
                break;

////////// Puzzle Guesser Command //////////

            case "guess":
                try {
                    if (guesscooleddown.size >= 1) {
                        console.log("guess on cooldown")
                        msg.channel.send("Guessing is on cooldown.")
                        break;
                    }else {
                        if (content.length > 1) {
                            var guess = content.slice(1).join(" ")
                            for(i = 0; i < bannedwords.length; i++) {
                                var guesslower = guess.toLowerCase();
                                if(guesslower.includes(bannedwords[i])) {
                                    msg.channel.send("<@" + msg.author.id + "> You're not allowed to search for that word.");
                                    return;
                                }
                            }
                            guess = guess.toLowerCase();
                            if (guess == "approbation") {
                                msg.channel.send("Correct, <@" + msg.author.id + ">. <@" + "849763305609756712" + "> has been notified.");
                            } else{
                                msg.channel.send("Incorrect, <@" + msg.author.id + ">. A new guess can be placed 15 minutes from now.");
                                guesscooleddown.add(msg.author.id);
                                setTimeout(() => {
                                    guesscooleddown.delete(msg.author.id);
                                    msg.channel.send("Timer up, you can guess again.");
                                }, 900000);
                                console.log("wrong");
                            }
                        }
                    }
                } catch (err) {
                    console.log(err); 
                }
            break;
  
////////// mass renamer //////////
            case "bulkrename":
                try {
                    if (modteamauth.includes(msg.author.id)){
                        if(content.length > 1){
                            msg.channel.send(content.slice(2).join(" "))
                        }
                        // await msg.guild.members.fetch(); // fetch all members and cache them
                        

                    }
                }catch(err){
                    console.log(err);
                    break;
                }
            break;
////////// the fuck button //////////

            case "shutdown":
                if (ambyauth.includes(msg.author.id) || ambyaltauth.includes(msg.author.id)) {
                    msg.reply("dick pisser is kil");
                    throw "Bot Died. - " + msg.author.username;
                }
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
