const Discord = require('discord.js');
const client = new Discord.Client();
const fetch = require('node-fetch');
const parse_ms = require('parse-ms')
cpuStat = require('cpu-stat')
os = require('os')
const ping = require('minecraft-server-util')
moment = require('moment')
dateformat = require('dateformat');
const urban = require('relevant-urban')
const weather = require('weather-js');
const { get } = require("request-promise-native");
const { MessageEmbed } = require("discord.js")
const ytdl = require("ytdl-core");











//prefix is first symbols like /,;etc you can edit it 
//for starting bot pls look up u will see terminal>click new ternmal>u willget cmd type node(space.)
//to make commands this is the (command == 'command name'remember dont leave space between two words){
                               //message.channel.send('content')etc for more information go to discord.js guide bot made by astronomia123

const prefix = '/';

const activity = [

  `Total server: ${client.guilds.cache.size.toLocaleString}`,
  `Total member invited in your server: ${client.users.cache.size.toLocaleString()} `,
  `Total channel invited: ${client.channels.cache.size.toLocaleString()}`,
  "type /commands for commands",
  `Node version: ${process.version}`,
  `ping: ${Math.floor(client.ws.ping)}`,
  "Made by:astronomia123#6150"

];



client.once('ready',() =>{
  client.user.setStatus('dnd')
 
  
  
      
      

  console.log('experio ds is online');
  setInterval(() => {
    const index = Math.floor(Math.random() * (activity.length - 1) + 1); // generates a random number between 1 and the length of the activities array list (in this case 5).
    client.user.setActivity(activity[index]); // sets bot's activities to one of the phrases in the arraylist.
}, 10000); // Runs this every 10 seconds
 
        
   
        

    
  
    
});

client.on('message',async message =>{
  
         
      
  
  if (message.content.includes('discord.gg/'||'discordapp.com/invite/')) { //if it contains an invite link
    message.delete() //delete the message
      .then(message.channel.send('Link Deleted:\n**Invite links are not permitted on this server**'))
      if (message.content.includes('https'||'https://')) { //if it contains an invite link
        message.delete() //delete the message
  
        .then(message.channel.send('Link Deleted:\n** You send invite links are not permitted on this server**'))   
        

  }}
  
    if(!message.content.startsWith(prefix) || message.author.bot) return;
    
    
  

    

    const args = message.content.slice(prefix.length).split(/ +/);
    const command =args.shift ().toLowerCase();

    
     if (command == 'youtube'){
        message.channel.send('https://www.youtube.com/channel/UCaMs6jKLzU6daexftZHd5bw')


    }else if (command == 'twitch'){
      message.channel.send('https://m.twitch.tv/bitzellive/profile?lang=en')

    }else if (command == 'twitter'){
      message.channel.send('https://twitter.com/bitzelyt?lang=en')

    }else if (command == 'meme'){
      let message ='dont sent in channel like general use this command in memes';
  fetch('https://meme-api.herokuapp.com/gimme')
      .then(res => res.json())
      .then(json => {
          let embed = new Discord.MessageEmbed()
              
              .setTitle(json.title)
              .setImage(json.url)
              .setFooter('memes')
          message.channel.send(embed)
      })

    }else if (command == 'user-info'){
      
      const embed = new Discord.MessageEmbed()

      .setColor('#0099ff')
      .setAuthor('Userinfo')
      .setTitle(message.author.username)
      .setThumbnail(message.author.displayAvatarURL(128))
      .setImage(message.author.displayAvatarURL)
      .addField('Id', message.author.id)
      .addField('status',message.author.presence.status)
      .addField('joined at', message.guild.joinedAt)
      .setTimestamp('joined timestamp',message.guild.joinedTimestamp)
      .setFooter('userinfo')
      message.channel.send(embed)

      }else if (command == 'server-info'){
       const Discord = require('discord.js')

       const MessageEmbed = new Discord.MessageEmbed()
       .setColor('#0099ff')
       .setTitle(message.guild.name)
       .setThumbnail(message.guild.iconURL(128))
       .setImage(message.guild.bannerURL(128))
       .addField('Created at',message.guild.createdAt)
       .addField('rejion',message.guild.region)
       .addField('Nitro users',message.guild.premiumSubscriptionCount)
       .addField('Member Count',message.guild.memberCount)
       .addField('veriftication level',message.guild.verificationLevel)
       .setTimestamp(message.guild.createdTimestamp)
       message.channel.send(MessageEmbed)

       
      

    }else if (command === 'commands'){
      const Discord = require('discord.js')
      const MessageEmbed = new Discord.MessageEmbed()

      .setColor('#0099ff')
      .setTitle('**COMMANDS**')
      .addField('Prefix is>','**/**')
      .addField('**Warning>**','This bot is not online every time')
      .addField('**Fun Commands>**','```meme```,```urban```,```cats```,```avatar-steal```,```pokemon-info```')
      .addField('**information command>**','```ad-new-userinfo```,```spotify-status```,```botstatus```,```mc-server and```, ```ad-serverinfo```')
      .addField("**Modration>**","```kick```,```ban```,```purge```,``mute``` and ```unmute```")
      .addField('**Misc>**',"```covid{name}``` and ```ms```")
      .addField('**Command for Admin/Owner>** ',"```send {channel}(to announce)```,```warn-user and message{to message dm}```")
      .addField('*Others*', "```{report} this command is used to report to mod")
      message.channel.send(MessageEmbed)      
      
      
      

    }else if (command == "ad-new-userinfo"){
      let user = message.mentions.users.first() || message.author;
      
      
      if (user.presence.status === "dnd") user.presence.status = "Do Not Disturb";
      if (user.presence.status === "idle") user.presence.status = "Idle";
      if (user.presence.status === "offline") user.presence.status = "Offline";
      if (user.presence.status === "online") user.presence.status = "Online";
      
      function game() {
        let game;
        if (user.presence.activities.length >= 1) game = `${user.presence.activities[0].type} ${user.presence.activities[0].name}`;
        else if (user.presence.activities.length < 1) game = "None"; // This will check if the user doesn't playing anything.
        return game; // Return the result.
      }
      
      let x = Date.now() - user.createdAt; // Since the user created their account.
      let y = Date.now() - message.guild.members.cache.get(user.id).joinedAt; // Since the user joined the server.
      let created = Math.floor(x / 86400000); // 5 digits-zero.
      let joined = Math.floor(y / 86400000);
      
      const member = message.guild.member(user);
      let nickname = member.nickname !== undefined && member.nickname !== null ? member.nickname : "None";
      let createdate = moment.utc(user.createdAt).format("dddd, MMMM Do YYYY, HH:mm:ss"); // User Created Date
      let joindate = moment.utc(member.joinedAt).format("dddd, MMMM Do YYYY, HH:mm:ss"); // User Joined the Server Date
      let status = user.presence.status;
      let avatar = user.avatarURL({size: 2048}); // Use 2048 for high quality avatar.
      
      const embed = new Discord.MessageEmbed()
      .setAuthor(user.tag, avatar)
      .setThumbnail(avatar)
      .setTimestamp()
      .setColor(0x7289DA)
      .addField("ID", user.id, true)
      .addField("Nickname", nickname, true)
      .addField("Created Account Date", `${createdate} \nsince ${created} day(s) ago`, true)
      .addField("Joined Guild Date", `${joindate} \nsince ${joined} day(s) ago`, true)
      .addField("Status", status, true)
      .addField("Game", game(), true)
      
      
    message.channel.send(embed); // Let's see if it's working.
  }else if (command == 'purge'){
      if (!message.member.hasPermission("MANAGE_MESSAGES") || !message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("You don't have a permissions to do this.");
      if (isNaN(args[0])) return message.channel.send("Please input a valid number.") // isNaN = is Not a Number. (case sensitive, write it right)
      if (args[0] > 100) return message.channel.send("Insert the number less than 100.") // Discord limited purge number into 100.
      if (args[0] < 2) return message.channel.send("Insert the number more than 1.")
      
       message.delete()
       message.channel.bulkDelete(args[0])
      .then(messages => message.channel.send(`Deleted ${messages.size}/${args[0]} messages.`)).then(d => d.delete({timeout: 10000})) // How long this message will be deleted (in ms)
      .catch(() => message.channel.send("Something went wrong, while deleting messages.")) // This error will be displayed when the bot doesn't have an access to do it.
  }else if (command == 'kick'){
    if (!message.member.hasPermission("KICK_MEMBERS") || !message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("You don't have a permissions to do this.");
    let user = message.mentions.users.first();
    
    let member = message.guild.member(user);
    let reason = args.slice(1).join(" ");
    
    if (!user) return message.channel.send("Please mention the user.");
    if (user.id === message.author.id) return message.channel.send("You can't kick yourself.");
    if (user.id === client.user.id) return message.channel.send("You can't kick me.");
    
    if (!reason) reason = "No reason provided";
    
    member.kick(reason).then(() => {
      message.channel.send(`Successfully kicked **${user.tag}**`);
    }).catch(err => {
      message.reply("I was unable to kick the member.");
    })
  
  }else if (command == 'ad-server-info'){
    let icon = message.guild.iconURL({size: 2048}); // Server Avatar
    
    let region = {
      "brazil": "Brazil",
      "eu-central": "Central Europe",
      "singapore": "Singapore",
      "london": "London",
      "russia": "Russia",
      "japan": "Japan",
      "hongkong": "Hongkong",
      "sydney": "Sydney",
      "us-central": "U.S. Central",
      "us-east": "U.S. East",
      "us-south": "U.S. South",
      "us-west": "U.S. West",
      "eu-west": "Western Europe"
    }
    
    // Members
    let member = message.guild.members;
    let offline = member.cache.filter(m => m.user.presence.status === "offline").size,
        online = member.cache.filter(m => m.user.presence.status === "online").size,
        idle = member.cache.filter(m => m.user.presence.status === "idle").size,
        dnd = member.cache.filter(m => m.user.presence.status === "dnd").size,
        robot = member.cache.filter(m => m.user.bot).size,
        total = message.guild.memberCount;
    
    // Channels
    let channels = message.guild.channels;
    let text = channels.cache.filter(r => r.type === "text").size,
        vc = channels.cache.filter(r => r.type === "voice").size,
        category = channels.cache.filter(r => r.type === "category").size,
        totalchan = channels.cache.size;
    
    // Region
    let location = region[message.guild.region];
    
    // Date
    let x = Date.now() - message.guild.createdAt;
    let h = Math.floor(x / 86400000) // 86400000, 5 digits-zero.
    let created = dateformat(message.guild.createdAt); // Install "dateformat" first.
    
    const embed = new Discord.MessageEmbed()
    .setColor(0x7289DA)
    .setTimestamp(new Date())
    .setThumbnail(icon)
    .setAuthor(message.guild.name, icon)
    .setDescription(`**ID:** ${message.guild.id}`)
    .addField("Region", location)
    .addField("Date Created", `${created} \nsince **${h}** day(s)`)
    .addField("Owner", `**${message.guild.owner.user.tag}** \n\`${message.guild.owner.user.id}\``)
    .addField(`Members [${total}]`, `Online: ${online} \nIdle: ${idle} \nDND: ${dnd} \nOffline: ${offline} \nBots: ${robot}`)
    .addField(`Channels [${totalchan}]`, `Text: ${text} \nVoice: ${vc} \nCategory: ${category}`)
    .addField('Verification level', message.guild.verificationLevel)
    .addField('verified', message.guild.verified)
    .addField('rejion', message.guild.region)
    .addField('nitro users', message.guild.premiumSubscriptionCount)
    .addField('Users', client.users.cache.size)
    message.channel.send(embed); // Let's see if it's working!

  }else if (command == 'ban'){
      if (!message.member.hasPermission("BAN_MEMBERS") || !message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("You don't have a permissions to do this.");
      let user = message.mentions.users.first();
      
      let member = message.guild.member(user);
      let reason = args.slice(22).join(" ");
      
      if (!user) return message.channel.send("Please mention the user.");
      if (user.id === message.author.id) return message.channel.send("You can't ban yourself.");
      if (user.id === client.user.id) return message.channel.send("You can't ban me.");
      
      if (!reason) reason = "No reason provided";
      member.ban(reason).then(() => {
        message.channel.send(`Successfully banned **${user.tag}**`);
      }).catch(err => {
        message.reply("I was unable to ban the member.");
      })
    
  }else if (command == 'mute'){
    if (!message.member.hasPermission("MANAGE_MESSAGES") || !message.member.hasPermission("MUTE_MEMBERS") || !message.member.hasPermission("ADMINISTRATOR")) {
      return message.channel.send("You don't have any permissions to do this: Manage Messages/Mute Members/Admin");
    }
    
    let user = message.guild.member(message.mentions.users.first()) || message.guild.members.cache.get(args[0]);
    if (!user) return message.channel.send("You need to mention the user.");
    // Optional:
    // if (user.id === client.user.id) return message.channel.send("You can't mute me.");
    // if (user.id === message.author.id) return message.channel.send("You can't mute yourself.");
    let role = message.guild.roles.cache.find(r => r.name === "Muted");
    let bot = message.guild.members.cache.get(client.user.id).roles.highest;
    
    if (!role) return message.channel.send("Couldn't find the mute role.");
    if (role.position > bot.position) return message.channel.send("The role is higher than me.");
    
    let time = args[1];
    
    if (!time) {
      if (user.roles.cache.has(role.id)) return message.channel.send("The user is still muted.");
       (user.roles.add(role.id).catch(err => message.channel.send(`Something went wrong: ${err}`)))
      return message.channel.send(`${user.user.tag} is now muted.`);
    } else {
      if (user.roles.cache.has(role.id)) return message.channel.send("The user is still muted.");
       (user.roles.add(role.id).catch(err => message.channel.send(`Something went wrong: ${err}`)))
      
      let timer = setTimeout(function() {
        user.roles.remove(role.id).catch(err => message.channel.send(`Something went wrong: ${err}`));
        message.channel.send(`${user.user.tag} is now unmuted.`);
      }, ms(time))
      
      client.mute.set(user.user.id, timer);
      message.channel.send(`${user.user.tag} is now muted for **${ms(ms(time), {long: true})}**`);
    }
    
  }else if (command == 'unmute'){
    if (!message.member.hasPermission("MANAGE_MESSAGES") || !message.member.hasPermission("MUTE_MEMBERS") || !message.member.hasPermission("ADMINISTRATOR")) {
      return message.channel.send("You don't have any permissions to do this: Manage Messages/Mute Members/Admin");
    }
    
    let user = message.guild.member(message.mentions.users.first()) || message.guild.members.cache.get(args[0]);
    if (!user) return message.channel.send("You need to mention the user.");
    
    let role = message.guild.roles.cache.find(r => r.name === "Muted");
    if (!role) return message.channel.send("Couldn't find the mute role.Make a role called Muted.");
    
    if (!user.roles.cache.find(r => r.name === "Muted")) return message.channel.send("The user doesn't get muted.");
    
     user.roles.remove(role.id).catch(err => message.channel.send(`Something went wrong: ${err}`));
     clearTimeout(client.mute.get(user.user.id));
     client.mute.delete(user.user.id);
     message.channel.send(`${user.user.tag} is now unmuted.`)
  }else if (command == 'spotify-status'){
    let user;
    if (message.mentions.users.first()) {
      user = message.mentions.users.first();
    } else {
      user = message.author;
    }
    
    let convert = require('parse-ms')
    
    let status = user.presence.activities[0];
    
    if (user.presence.activities.length === 0 || status.name !== "Spotify" && status.type !== "LISTENING") return message.channel.send("This user isn't listening the Spotify.");
    
    if (status !== null && status.type === "LISTENING" && status.name === "Spotify" && status.assets !== null) {
      let image = `https://i.scdn.co/image/${status.assets.largeImage.slice(8)}`,
          url = `https://open.spotify.com/track/${status.syncID}`,
          name = status.details,
          artist = status.state,
          album = status.assets.largeText,
          timeStart = status.timestamps.start,
          timeEnd = status.timestamps.end,
          timeConvert = convert(timeEnd - timeStart);
      
      let minutes = timeConvert.minutes < 10 ? `0${timeConvert.minutes}` : timeConvert.minutes;
      let seconds = timeConvert.seconds < 10 ? `0${timeConvert.seconds}` : timeConvert.seconds;
      
      let time = `${minutes}:${seconds}`;
      
      const embed = new Discord.MessageEmbed()
      .setAuthor("Spotify Track Information", "https://image.flaticon.com/icons/svg/2111/2111624.svg")
      .setColor(0x1ED768)
      .setThumbnail(image)
      .addField("Name:", name, true)
      .addField("Album:", album, true)
      .addField("Artist:", artist, true)
      .addField("Duration:", time, false)
      .addField("Listen now on Spotify!", `[\`${artist} - ${name}\`](${url})`, false)
      message.channel.send(embed)
    }
  
  
  }else if (command == 'botstatus'){
    cpuStat.usagePercent(function (error, percent, seconds) {
      if (error) {
        return console.error(error)
      }
      
      const cores = os.cpus().length // Counting how many cores your hosting has.
      const cpuModel = os.cpus()[0].model // Your hosting CPU model.
      const guild = client.guilds.cache.size.toLocaleString() // Counting how many servers invite your bot. Tolocalestring, meaning separate 3 numbers with commas.
      const user = client.users.cache.size.toLocaleString() // Counting how many members in the server that invite your bot.
      const channel = client.channels.cache.size.toLocaleString() // Counting how many channels in the server that invite your bot
      const Node = process.version // Your node version.
      const CPU = percent.toFixed(2) // Your CPU usage.
      
      const embed = new Discord.MessageEmbed() // Stable or < below than 11.x.x use RichEmbed. More than 12.x.x or Master or https://github.com/discordjs/discord.js/ (github:discordjs/discord.js) use MessageEmbed.
      // Actually they are exactly the same.
      embed.addField('Bot Statistics:', `Server: ${guild} \nUser: ${user} \nChannel: ${channel}  \nNode: ${Node} \nCPU Usage: ${CPU}%`) // Use Grave accent or `` 
      // (its on your keyboard, besides on number 1.)
      // Use \n to make a new line.
      embed.addField('Physical Statistics:', `CPU: ${cores} - ${cpuModel} `)
      // Let's test it!
      // Use ** turn the text into bold.
      // Let's test again.
      message.channel.send(embed)
    })
  
  }else if (command == 'mc-server'){
    let args = message.content.substring(prefix.length).split(' ')
 
            if(!args[1]) return message.channel.send('You must type a minecraft server ip')
            if(!args[2]) return message.channel.send('You must type a minecraft server port')
 
            ping(args[1], parseInt(args[2]), (error, reponse) =>{
                if(error) throw error
                const Embed = new Discord.MessageEmbed()
                .setColor('RANDOM')
                .setTitle('Server Status')
                .addField('Server IP', reponse.host)
                .addField('Server Version', reponse.version)
                .addField('Online Players', reponse.onlinePlayers)
                .addField('Max Players', reponse.maxPlayers)
                
                message.channel.send(Embed)
            })
          }else if (command == 'yt-status'){
            let name = args.join(" ");
            if (!name) return message.channel.send("Unknown channel name.");
        
            const channel =   fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${name}&key=AIzaSyA-FhYvZDoFOUPjx-qqjzRlDkc-XKFAnn0&maxResults=1&type=channel`)
            .catch(() => message.channel.send("Unknown channel error."));
        
            if (!channel.body.items[0]) return message.channel.send("No channel result. Try again.");
        
            const data =   fetch(`https://www.googleapis.com/youtube/v3/channels?part=snippet,contentDetails,statistics,brandingSettings&id=${channel.body.items[0].id.channelId}&key=AIzaSyA-FhYvZDoFOUPjx-qqjzRlDkc-XKFAnn0`)
            .catch(() => message.channel.send("Unknown channel data error."));
            console.log(data);
        
            const embed = new Discord.MessageEmbed()
            .setColor(0x7289DA)
            .setThumbnail(channel.body.items[0].snippet.thumbnails.high.url)
            .setTimestamp(new Date())
            .addField("Channel Name", channel.body.items[0].snippet.channelTitle, true)
            .addField("Channel Description", channel.body.items[0].snippet.description, true)
            .addField("Subscribers Count", parseInt(data.body.items[0].statistics.subscriberCount).toLocaleString(), true)
            .addField("Total Views", parseInt(data.body.items[0].statistics.viewCount).toLocaleString(), true)
            .addField("Total Video(s)", parseInt(data.body.items[0].statistics.videoCount).toLocaleString(), true)
            .addField("Date Created", new Date(channel.body.items[0].snippet.publishedAt).toDateString(), true)
            .addField("Link", `[${channel.body.items[0].snippet.channelTitle}](https://www.youtube.com/channel/${channel.body.items[0].id.channelId})`, true)
            return message.channel.send(embed);
        
          }else if (command == 'ms'){
            try {
               message.channel.send("Pinging..."); // Make sure the async is written, top of the client.on("message", ...)
              const embed = new Discord.MessageEmbed()
              .setColor("RANDOM") // Tired of choosing the embed colors? Just type "RANDOM" on it!
              .addField("⌛ Latency", `**${message.createdTimestamp -  message.createdTimestamp}ms**`)
              .addField("💓 API", `**${Math.floor(client.ws.ping)}ms**`) // Use "client.ping" if your Discord.js is < 1.15.1 --- Use "client.ws.ping" if your Discord.js is > 12.0.0
              return message.channel.send(`🏓 Pong!`, embed);
            } catch (error) {
              return message.channel.send(`Something went wrong: ${error.message}`)
            }
        }else if (command == 'covid'){
          let countries = args[0] // Your/someone countries prefix.
    
          fetch(`https://corona.lmao.ninja/v2/countries/${countries}`)
          .then(res => res.json())
          .then(data => {
            let country = data.country;
            let flag = data.countryInfo.flag; // Turns out -> Link.
            let confirmed = data.cases.toLocaleString();
            let todayconfirmed = data.todayCases.toLocaleString();
            let deaths = data.deaths.toLocaleString();
            let todaydeaths = data.todayDeaths.toLocaleString();
            let recovered = data.recovered.toLocaleString();
            let critical = data.critical.toLocaleString();
            let active = data.active.toLocaleString();
            // Add .toLocaleString() if you wanna separate 3 numbers with commas.
            
            const embed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setThumbnail('https://imgur.com/EtrzMRy.png')
            .setTimestamp(new Date())
            .setAuthor("Coronavirus Statistics", flag)
            .addField(`Data for: ${country}`, `Confirmed: (Total: **${confirmed}** | Daily: **${todayconfirmed}**) \nDeaths: (Total: **${deaths}** | Daily: **${todaydeaths}**) \nRecovered: **${recovered}** \nCritical: **${critical}** \nActive: **${data.active}**`) // Sorry a little bit more complex.
            .addField('help to stop speading','[advise people](https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public)')
            
           
            message.channel.send(embed);
        })
      }else if (command == 'urban'){
       if (!args[0]) return message.channel.send('Please specify the query.');

       let result =  await urban(args[0]).catch(e =>{
         return message.channel.send(`Unknown word phrase of **${args[0]}**, please try again`);
       })
        const embed = new Discord.MessageEmbed()
        .setColor(0x72890A)
        .setTitle(result.word)
        .setURL(result.urbanUrl)
        .setDescription(`**Definition:** \n**${result.definition}** \n\n**Example:** \n**${result.example}**`)
        .addField("Author", result.author, true)
        .addField('Rating',`👍 ${result.thumbsUp.toLocaleString()} | 👎 ${result.thumbsDown.toLocaleString()}`)

        if (result.tags.length > 0 && result.tags.join("").length < 1024) {
          embed.addField("Tags", result.tags.join(","),true);
        }
         message.channel.send(embed);

  }else if (command == 'cats'){
    const {MessageAttachment} = require('discord.js');
    const {body} = fetch('https://nekos.life/api/v2/img/meow').then(res => res.json()).then(result => {
      if (!result.url) return message.channel.send("Something went wrong.");
      const attachment = new MessageAttachment(result.url);
      message.channel.send(attachment) // You can remove the :), it's optional.
    })
  
  
  }else if (command == 'meme-2'){
    const got = require('got'),
    {MessageEmbed} = require('discord.js');

got('https://www.reddit.com/r/meme/random/.json').then(response => {
let content = JSON.parse(response.body),
    image = content[0].data.children[0].data.url,
     embed = new MessageEmbed()
  .setImage(image)
    .setTimestamp()
   .setFooter('from: r/meme')
   message.channel.send(embed)
  })
    
  }else if (command == 'avatar-steal'){
    let user = message.mentions.users.first() || message.author;
   
    const embed = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setImage(user.avatarURL({size: 2048}));
    return message.channel.send(embed)

  }else if (command == 'warn-user'){
    let dUser = message.mentions.users.first() || message.guild.members.get(args[0]);
    if (!dUser) return message.channel.send("Can't find user!")
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("You can't you that command!")
    let dMessage = args.join(" ").slice(22);
    if(dMessage.length < 1) return message.reply('You must supply a reason!')

    const embed = new Discord.MessageEmbed()

    .setTitle('__**warning**__')
    .setColor('RANDOM')
    .setImage(message.author.displayAvatarURL(128))
    .addField("*you have been warn by*",message.author.username)
    .addField("__**Reason**__",`Here: ${dMessage}`)

    dUser.send(`${dUser} A moderator warn you: ${dMessage}`,embed)

   
  }else if (command == 'message'){
    let dUser = message.mentions.users.first() || message.guild.members.get(args[0]);
    if (!dUser) return message.channel.send("Can't find user!")
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("You can't you that command!")
    let dMessage = args.join(" ").slice(22);
    if(dMessage.length < 1) return message.reply('You must supply a message!')

    const embed = new Discord.MessageEmbed()

    .setTitle(`__**message from**__** ${message.guild.name}**__`)
    .setColor('RANDOM')
    .setImage(message.author.displayAvatarURL(128))
    .addField("__**Message sent by**__",message.author.username)
    .addField("__**Message**__",`Here: **${dMessage}**`)

    dUser.send(`${dUser} ${message.author} send you message you: ${dMessage}`,embed)

    
  }else if (command == 'weather'){
    if(!args.length) {
      return message.channel.send("Please give the weather location")
    }

 weather.find({search: args.join(" "), degreeType: 'C'}, function(err, result){
try {

let embed = new discord.MessageEmbed()
.setTitle(`Weather - ${result[0].location.name}`)
.setColor("#ff2050")
.setDescription("Temperature units can may be differ some time")
.addField("Temperature", `${result[0].current.temperature} Celcius`, true)
.addField("Sky Text", result[0].current.skytext, true)
.addField("Humidity", result[0].current.humidity, true)
.addField("Wind Speed", result[0].current.windspeed, true)//What about image
.addField("Observation Time", result[0].current.observationtime, true)
.addField("Wind Display", result[0].current.winddisplay, true)
.setThumbnail(result[0].current.imageUrl);
   message.channel.send(embed)
  } catch(err) {
    return message.channel.send("Unable To Get the data of Given location")
  }
  });  
} else if (command == 'pokemon-info'){
  const options = {
    url: `https://courses.cs.washington.edu/courses/cse154/webservices/pokedex/pokedex.php?pokemon=${args.join(" ")}`,
    json: true
  
  }
  
  message.channel.send("Fetching Informtion for API").then(message => {
    get(options).then(body => {
  
      let embed = new MessageEmbed()
      .setAuthor(body.name, `https://courses.cs.washington.edu/courses/cse154/webservices/pokedex/${body.images.typeIcon}`)
      .setDescription(body.info.description)
      .setThumbnail(`https://courses.cs.washington.edu/courses/cse154/webservices/pokedex/${body.images.photo}`)
      .setColor("#ff2050")
      .setFooter(`Weakness of pokemon - ${body.info.weakness}`, `https://courses.cs.washington.edu/courses/cse154/webservices/pokedex/${body.images.weaknessIcon}`)
  
      message.channel.send(embed)
      message.delete()
    })
  })
  
}else if (command == 'send'){
  let dUser = message.mentions.channels.first() || message.guild.members.get(args[0]);
  if (!dUser) return message.channel.send("Can't find user!")
  if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("You can't you that command!")
  let dMessage = args.join(" ").slice(22);
  if(dMessage.length < 1) return message.reply('You must supply a reason!')

  const embed = new Discord.MessageEmbed()

  .setTitle('__**Guild-Message**__')
  .setColor('RANDOM')
  .setImage(message.author.displayAvatarURL(128))
  .addField("__**sent by**__",message.author.username)
  .addField("__**message**__",`Here: **${dMessage}**`)

  dUser.send(`${dUser} A moderator send you: ${dMessage}`,embed)

}else if (command == 'report'){
  let dUser = message.mentions.users.first() || message.guild.members.get(args[0]);
  if (!dUser) return message.channel.send("Can't find user!")
  let dMessage = args.join(" ").slice(22);
  if(dMessage.length < 1) return message.reply('You must supply a message!')

  const embed = new Discord.MessageEmbed()

  .setTitle(`__**message from**__** ${message.guild.name}**__`)
  .setColor('RANDOM')
  .setImage(message.author.displayAvatarURL(128))
  .addField("__**Message sent by**__",message.author.username)
  .addField("__**Message**__",`Here: **${dMessage}**`)

  dUser.send(`${dUser} ${message.author} sucessfully sended`,embed)
  message.author.send(embed)
}else if (command == 'send'){
  let dUser = message.mentions.channels.first() || message.guild.members.get(args[0]);
  if (!dUser) return message.channel.send("Can't find user!")
  if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("You can't you that command!")
  let dMessage = args.join(" ").slice(22);
  if(dMessage.length < 1) return message.reply('You must supply a reason!')

  const embed = new Discord.MessageEmbed()

  .setTitle('__**Guild-Message**__')
  .setColor('RANDOM')
  .setImage(message.author.displayAvatarURL(128))
  .addField("__**sent by**__",message.author.username)
  .addField("__**message**__",`Here: **${dMessage}**`)

  dUser.send(`${dUser} A moderator send you: ${dMessage}`,embed)
}else if (command == 'report'){
  let dUser = message.mentions.user.first() || message.guild.members.get(args[0]);
  if (!dUser) return message.channel.send("Can't find user!")
  let dMessage = args.join(" ").slice(22);
  if(dMessage.length < 1) return message.reply('You must supply a message!')

  const embed = new Discord.MessageEmbed()

  .setTitle(`__**message from**__** ${message.guild.name}**__`)
  .setColor('RANDOM')
  .setImage(message.author.displayAvatarURL(128))
  .addField("__**Message sent by**__",message.author.username)
  .addField("__**Message**__",`Here: **${dMessage}**`)

  dUser.send(`${dUser} ${message.author} sucessfully sended`,embed)
}else if (command == 'poll'){
  let dUser = message.mentions.channels.first() || message.guild.members.get(args[0]);
  if (!dUser) return message.channel.send("Can't find user!")
  if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("You can't you that command!")
  let dMessage = args.join(" ").slice(22);
  if(dMessage.length < 1) return message.reply('You must supply a message!')

  const embed = new Discord.MessageEmbed()

  .setTitle(`__**message from**__** ${message.guild.name}**__`)
  .setColor('RANDOM')
  .setImage(message.author.displayAvatarURL(128))
  .addField("__**Message sent by**__",message.author.username)
  .addField("__**Message**__",`Here: **${dMessage}**`)

  dUser.send(`${dUser} ${message.channel}sucessfully sended`,embed).then(async message => {
    await message.react("👍");
    await message.react("👎");
  });


}else if (command == 'dm-react'){
  let dUser = message.mentions.channels.first() || message.guild.members.get(args[0]);
  if (!dUser) return message.channel.send("Can't find user!")
  if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("You can't you that command!")
  let dMessage = args.join(" ").slice(22);
  if(dMessage.length < 1) return message.reply('You must supply a message!')

  const embed = new Discord.MessageEmbed()

  .setTitle(`__**message from**__** ${message.guild.name}**__`)
  .setColor('RANDOM')
  .setImage(message.author.displayAvatarURL(128))
  
  .addField("__**Message sent by**__",message.author.username)
  .addField("__**Message**__",`Here: **${dMessage}**`)

  dUser.send(`${dUser} ${message.channel} sucessfully sended`,embed).then(async message => {
    await message.react("👍");
    await message.react("👎");
  })

}else if (command == 'roles'){
  
}

 



      
  
     
  });

client.login('NzQ3NjU5MjY4Nzc3NDQzMzgw.X0SF9A.s5MIoAEqh2wQnM2L2K9B0dj-74c');



