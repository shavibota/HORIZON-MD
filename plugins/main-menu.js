import { promises, readFileSync } from 'fs'
import { join } from 'path'
import moment from 'moment-timezone'
import os from 'os'
let groupmenu = `
╭──── ✦ 𝙂𝙍𝙊𝙐𝙋 𝙈𝙀𝙉𝙐 ✦ ────╮
│ ◈ .getbio <@tag/reply>   Ⓛ
│ ◈ .animequote   
│ ◈ .setdesc <text>     
│ ◈ .setname <text>    
│ ◈ .add  
│ ◈ .delete   
│ ◈ .delwarn @user 
│ ◈ .demote (@tag)  
│ ◈ .infogp      
│ ◈ .hidetag       
│ ◈ .invite <947xxxxxx>   
│ ◈ .kick @user  
│ ◈ .link  
│ ◈ .poll question|option|option
│ ◈ .profile   
│ ◈ .promote   
│ ◈ .resetlink  
│ ◈ .setbye <text>    
│ ◈ .group *open/close* 
│ ◈ .setwelcome <text> 
│ ◈ .simulate <event> @user
│ ◈ .staff      
│ ◈ .tagall       
│ ◈ .totag           
│ ◈ .warn @user 
│ ◈ .warns        
│ ◈ .main       
╰──────────────────────╯
`

let ownermenu = `
╭──── ✦ 𝙊𝙒𝙉𝙀𝙍 𝙈𝙀𝙉𝙐 ✦ ────╮
│ ◈ .addprem <@tag>         │
│ ◈ .addowner @user         │
│ ◈ .allow <@tag>           │
│ ◈ .HEROKU                 │
│ ◈ .ban @user              │
│ ◈ .banchat                │
│ ◈ .tx                     │
│ ◈ .broadcastgroup <text>  │
│ ◈ .bcgc <text>            │
│ ◈ .cleartmp               │
│ ◈ .delexpired             │
│ ◈ .delprem @user          │
│ ◈ .removeowner @user      │
│ ◈ .setppbotfull           │
│ ◈ .getplugin <name file>  │
│ ◈ .getfile <name file>    │
│ ◈ .join                   │
│ ◈ .reset <54xxx>          │
│ ◈ .resetprefix            │
│ ◈ .restart                │
│ ◈ ..setprefix             │
│ ◈ ..setprefix [symbol]    │
│ ◈ .unban @user            │
│ ◈ .unbanchat              │
│ ◈ .update                 │
│ ◈ .config                 │
│ ◈ .listban                │
│ ◈ .deleteplugin <name>    │
╰────────────────────────────╯
`

let funmenu = `
╭──── ✦ 𝙁𝙐𝙉 𝙈𝙀𝙉𝙐 ✦ ────╮
│ ◈ .afk <reason>        │
│ ◈ .tomp3               │
│ ◈ .toav                │
│ ◈ .bot                 │
│ ◈ .character @tag      │
│ ◈ .dare                │
│ ◈ .flirt               │
│ ◈ .gay @user           │
│ ◈ .pickupline          │
│ ◈ .question            │
│ ◈ .shayari             │
│ ◈ .ship                │
│ ◈ .yomamajoke          │
│ ◈ .truth               │
│ ◈ .waste @user         │
│ ◈ .image               │
│ ◈ .meme                │
│ ◈ .quote               │
╰─────────────────────────╯
`

let reactmenu = `
╭──── ✦ 𝙍𝙀𝘼𝘾𝙏𝙄𝙊𝙉 𝙈𝙀𝙉𝙐 ✦ ────╮
│ ◈ .bully @tag               │
│ ◈ .cuddle @tag              │
│ ◈ .cry @tag                 │
│ ◈ .hug @tag                 │
│ ◈ .awoo @tag                │
│ ◈ .kiss @tag                │
│ ◈ .lick @tag                │
│ ◈ .pat @tag                 │
│ ◈ .smug @tag                │
│ ◈ .bonk @tag                │
│ ◈ .yeet @tag                │
│ ◈ .blush @tag               │
│ ◈ .smile @tag               │
│ ◈ .wave @tag                │
│ ◈ .highfive @tag            │
│ ◈ .handhold @tag            │
│ ◈ .nom @tag                 │
│ ◈ .bite @tag                │
│ ◈ .glomp @tag               │
│ ◈ .slap @tag                │
│ ◈ .kill @tag                │
│ ◈ .happy @tag               │
│ ◈ .wink @tag                │
│ ◈ .poke @tag                │
│ ◈ .dance @tag               │
│ ◈ .cringe @tag              │
╰──────────────────────────────╯
`

let dlmenu = `
╭──── ✦ 𝘿𝙊𝙒𝙉𝙇𝙊𝘼𝘿𝙀𝙍 𝙈𝙀𝙉𝙐 ✦ ────╮
│ ◈ .facebook <url>                               │
│ ◈ .gdrive 🅟                                          │
│ ◈ .gitclone <url>                                 │
│ ◈ .igstalk                                              │
│ ◈ .instagram                                        │
│ ◈ .mediafire <url>                               │
│ ◈ .mega                                               │
│ ◈ .modapk                                          │
│ ◈ .play <query>                                  │
│ ◈ .play2 <text>                                   │
│ ◈ .spotify                                             │
│ ◈ .tiktok <url>                                     │
│ ◈ .tiktokstalk                                        │
│ ◈ .twitter <url>                                    │
│ ◈ .ytmp3 <url>                                    │
│ ◈ .ytsearch                                           │
│ ◈ .ytmp4 <yt-link>                              │
│ ◈ .wallpaper <query>                          │
╰───────────────────────────────────╯
`
let logomenu = `
╭──── ✦ 𝙈𝘼𝙆𝙀𝙍 𝙈𝙀𝙉𝙐 ✦ ────╮
│ ◈ .blur                          │
│ ◈ .difuminar2                    │
│ ◈ .hornycard                     │
│ ◈ .hornylicense                  │
│ ◈ .gfx1                          │
│ ◈ .gfx2                          │
│ ◈ .gfx3                          │
│ ◈ .gfx4                          │
│ ◈ .gfx5                          │
│ ◈ .gfx6                          │
│ ◈ .gfx7                          │
│ ◈ .gfx8                          │
│ ◈ .gfx9                          │
│ ◈ .gfx10                         │
│ ◈ .gfx11                         │
│ ◈ .gfx12                         │
│ ◈ .simpcard                      │
│ ◈ .itssostupid                   │
│ ◈ .iss                           │
│ ◈ .stupid                        │
│ ◈ .tweet <comment>               │
│ ◈ .lolicon                       │
│ ◈ .ytcomment <comment>           │
╰──────────────────────────╯
`

let stickermenu = `
╭──── ✦ 𝙎𝙏𝙄𝘾𝙆𝙀𝙍 𝙈𝙀𝙉𝙐 ✦ ────╮
│ ◈ .emojimix <emoji+emoji>          │
│ ◈ .getsticker                      │
│ ◈ .smaker                          │
│ ◈ .stickerwithmeme (caption|reply media) │
│ ◈ .swmeme <url>                    │
│ ◈ .swm (caption|reply media)       │
│ ◈ .sfull                           │
│ ◈ .toimg <sticker>                 │
│ ◈ .tovid                           │
│ ◈ .trigger <@user>                 │
│ ◈ .ttp                             │
│ ◈ .ttp2                            │
│ ◈ .ttp3                            │
│ ◈ .ttp4                            │
│ ◈ .ttp5                            │
│ ◈ .attp                            │
│ ◈ .attp2                           │
│ ◈ .attp3                           │
│ ◈ .take <name>|<author>            │
╰──────────────────────────────╯
`

let audiomenu = `
╭──── ✦ 𝘼𝙐𝘿𝙄𝙊 𝙈𝙀𝙉𝙐 ✦ ────╮
│ ◈ .bass [vn]                      │
│ ◈ .blown [vn]                     │
│ ◈ .deep [vn]                      │
│ ◈ .earrape [vn]                   │
│ ◈ .fast [vn]                      │
│ ◈ .fat [vn]                       │
│ ◈ .nightcore [vn]                 │
│ ◈ .reverse [vn]                   │
│ ◈ .robot [vn]                     │
│ ◈ .slow [vn]                      │
│ ◈ .smooth [vn]                    │
│ ◈ .tupai [vn]                     │
╰──────────────────────────╯
`

let animemenu = `
╭──── ✦ 𝘼𝙉𝙄𝙈𝙀 𝙈𝙀𝙉𝙐 ✦ ────╮
│ ◈ .anime                         │
│ ◈ .akira                         │
│ ◈ .akiyama                       │
│ ◈ .anna                          │
│ ◈ .asuna                         │
│ ◈ .ayuzawa                       │
│ ◈ .boruto                        │
│ ◈ .chiho                         │
│ ◈ .chitoge                       │
│ ◈ .deidara                       │
│ ◈ .erza                          │
│ ◈ .elaina                        │
│ ◈ .emilia                        │
│ ◈ .hestia                        │
│ ◈ .hinata                        │
│ ◈ .inori                         │
│ ◈ .isuzu                         │
│ ◈ .itachi                        │
│ ◈ .itori                         │
│ ◈ .kaga                          │
│ ◈ .kagura                        │
│ ◈ .kaori                         │
│ ◈ .keneki                        │
│ ◈ .kotori                        │
│ ◈ .kurumi                        │
│ ◈ .madara                        │
│ ◈ .mikasa                        │
│ ◈ .miku                          │
│ ◈ .minato                        │
│ ◈ .naruto                        │
│ ◈ .nezuko                        │
│ ◈ .sagiri                        │
│ ◈ .sasuke                        │
│ ◈ .sakura                        │
│ ◈ .manhwa                        │
│ ◈ .waifu                         │
│ ◈ .neko                          │
│ ◈ .zerotwo                       │
│ ◈ .loli                          │
│ ◈ .pokedex <pokemon>             │
│ ◈ .trace                         │
╰──────────────────────────╯

  `

let toolsmenu = `
╭──── ✦ 𝙏𝙊𝙊𝙇𝙎 ✦ ────╮
│ ◈ .nowa                     │
│ ◈ .qr <text>                │
│ ◈ .qrcode <text>            │
│ ◈ .style <key> <text>       │
│ ◈ .weather *<place>*        │
│ ◈ .dehaze                   │
│ ◈ .recolor                  │
│ ◈ .hdr                      │
│ ◈ .length <amount>          │
│ ◈ .tinyurl <link>           │
│ ◈ .shorten <link>           │
│ ◈ .tempmail                 │
│ ◈ .shazam                   │
│ ◈ .cal <equation>           │
│ ◈ .carbon <code>            │
│ ◈ .define <word>            │
│ ◈ .element                 │
│ ◈ .google                   │
│ ◈ .itunes                   │
│ ◈ .lyrics                   │
│ ◈ .imdb                     │
│ ◈ .course                   │
│ ◈ .randomcourse             │
│ ◈ .readmore <text1>|<text2> │
│ ◈ .readvo                   │
│ ◈ .removebg                 │
│ ◈ .ss <url>                 │
│ ◈ .ssf <url>                │
│ ◈ .subreddit                │
│ ◈ .telesticker  Ⓛ           │
│ ◈ .tourl                    │
│ ◈ .translate <lang> <text>  │
│ ◈ .true                     │
│ ◈ .tts <lang> <task>        │
│ ◈ .wa                       │
│ ◈ .wikipedia                │
╰─────────────────────╯
`

let Aimenu = `
╭──── ✦ 𝘼𝙄 ✦ ────╮
│ ◈ .dalle             │
│ ◈ .toanime           │
│ ◈ .tocartoon         │
│ ◈ .alexa             │
│ ◈ .bingimg           │
╰───────────────╯

  `


let botmenu = `
╭──── ✦ 𝘽𝙊𝙏 𝙈𝙀𝙉𝙐 ✦ ────╮
│ ◈ .ping                │
│ ◈ .runtime             │
│ ◈ .script              │
│ ◈ .server              │
│ ◈ .blocklist           │
│ ◈ .alive               │
│ ◈ .info                │
│ ◈ .owner               │
│ ◈ .totalfeature        │
│ ◈ .list                │
│ ◈ .menu                │
│ ◈ .messi               │
│ ◈ .cristianoronaldo    │
│ ◈ .cr7                 │
│ ◈ .ppcouple            │
│ ◈ .ppcp                │
│ ◈ .pinterest           │
╰────────────────╯

  `

const handler = async (m, { conn, command, text, args, usedPrefix }) => {
  m.react("📑")
  let glb = global.db.data.users
  let usrs = glb[m.sender]
  let tag = `@${m.sender.split('@')[0]}`
  let mode = global.opts['self'] ? 'Private' : 'Public'

  
  let name = await conn.getName(m.sender)
  let premium = glb[m.sender].premiumTime
  let prems = `${premium > 0 ? 'Premium' : 'Free'}`
  let platform = os.platform()

  let Greeting = `${greetfunc()}`

  let _uptime = process.uptime() * 1000
  let _muptime
  if (process.send) {
    process.send('uptime')
    _muptime =
      (await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      })) * 1000
  }
  let muptime = clockString(_muptime)
  let uptime = clockString(_uptime)

  let totalfeatures = Object.values(global.plugins).filter(v => v.help && v.tags).length
  let totalreg = Object.keys(glb).length

  conn.hmenu = conn.hmenu ? conn.hmenu : {}

  global.fcontact = {
    key: { fromMe: false, participant: `0@s.whatsapp.net`, remoteJid: 'status@broadcast' },
    message: {
      contactMessage: {
        displayName: `${name}`,
        vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:${name}\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
      },
    },
  }
  const infoText = `
 《 ${botname} 》\n
 〈 HELLO ! ${name} 〉

   〖 *${Greeting}* 〗 
     
  ╭───『 *U S E R*』───╮
  │*Name:* ${name}
  ╰───────────────➤
     
  ╭───『 *I N F O*』───╮
  │*Bot Name:* ${botname}
  │*Mode:* ${mode}
  │*Platform:* ${platform}
  │*Type:* Node.Js
  │*Baileys:* Multi Device
  │*Prefix:* [ *${usedPrefix}* ]
  │*Uptime:* ${muptime}
  │*Database:* ${totalreg}
  ╰───────────────➤
  
  > ©THE REDFOX-INC™\n\n
  ${readMore}
  
  ╭───『 **』───╮
  │*${totalfeatures}* Commands
  ╰───────────────➤
  
  ╭───『 *INFO*』───╮
  │ REPLY NO. OF YOUR ,
  │ DESIRED MENU 
  ╰───────────────➤
  
  ╭───────➣
  │ *1.* Bot Menu
  │ *2.* Owner Menu
  │ *3.* Group Menu
  │ *4.* Fun Menu
  │ *5.* Reaction Menu
  │ *6.* Downloader Menu
  │ *7.* logo Menu
  │ *8.* Sticker Menu
  │ *9.* Audio Menu
  │ *10.* Anime Menu
  │ *11.* Tools Menu
  │ *12.* AI Menu
  ╰───────➣
  
 `
  const { result, key, timeout } = await conn.sendMessage(
    m.chat,
    { video: { url: menuvid }, caption: infoText.trim(),
    contextInfo: {
      mentionedJid: [m.sender],
      isForwarded: true,
      forwardedNewsletterMessageInfo: {
        newsletterJid: '120363178281296360@newsletter',
        newsletterName: 'Click Here',
        serverMessageId: -1,
      },
      forwardingScore: 999,
      externalAdReply: {
        title: 'ȶɦⱸ ɦơɽίʑơȵ-ɱɗ',
        body: 'ᴍᴇɴᴜ',
        thumbnailUrl: 'https://i.imgur.com/ZKjzjwr.jpeg',
        sourceUrl: 'https://github.com/shavibota',
        mediaType: 1,
        renderLargerThumbnail: false,
      },
    },
    
    gifPlayback: true, gifAttribution: 0 },
    { quoted: fcontact }
  )
  m.react("📑")


  conn.hmenu[m.sender] = {
    result,
    key,
    timeout: setTimeout(() => {
      conn.sendMessage(m.chat, {
        delete: key,
      })
      delete conn.hmenu[m.sender]
    }, 150 * 1000),
  }
}

handler.before = async (m, { conn }) => {
  conn.hmenu = conn.hmenu ? conn.hmenu : {}
  if (m.isBaileys || !(m.sender in conn.hmenu)) return
  const { result, key, timeout } = conn.hmenu[m.sender]
  if (!m.quoted || m.quoted.id !== key.id || !m.text) return
  const choice = m.text.trim()

  if (choice === '1') {
    await conn.sendMessage(
      m.chat,
      { image: { url: 'https://i.imgur.com/ZKjzjwr.jpeg' }, caption: botmenu },
      { quoted: fcontact }
    )
  } else if (choice === '2') {
    await conn.sendMessage(
      m.chat,
      { image: { url: 'https://i.imgur.com/ZKjzjwr.jpeg' }, caption: ownermenu },
      { quoted: fcontact }
    )
  } else if (choice === '3') {
    await conn.sendMessage(
      m.chat,
      { image: { url: 'https://i.imgur.com/ZKjzjwr.jpeg' }, caption: groupmenu },
      { quoted: fcontact }
    )
  } else if (choice === '4') {
    await conn.sendMessage(
      m.chat,
      { image: { url: 'https://i.imgur.com/ZKjzjwr.jpeg' }, caption: funmenu },
      { quoted: fcontact }
    )
  } else if (choice === '5') {
    await conn.sendMessage(
      m.chat,
      { image: { url: 'https://i.imgur.com/ZKjzjwr.jpeg' }, caption: reactmenu },
      { quoted: fcontact }
    )
  } else if (choice === '6') {
    await conn.sendMessage(
      m.chat,
      { image: { url: 'https://i.imgur.com/ZKjzjwr.jpeg' }, caption: dlmenu },
      { quoted: fcontact }
    )
  } else if (choice === '7') {
    await conn.sendMessage(
      m.chat,
      { image: { url: 'https://i.imgur.com/ZKjzjwr.jpeg' }, caption: logomenu },
      { quoted: fcontact }
    )
  } else if (choice === '8') {
    await conn.sendMessage(
      m.chat,
      { image: { url: 'https://i.imgur.com/ZKjzjwr.jpeg' }, caption: stickermenu },
      { quoted: fcontact }
    )
  } else if (choice === '9') {
    await conn.sendMessage(
      m.chat,
      { image: { url: 'https://i.imgur.com/ZKjzjwr.jpeg' }, caption: audiomenu },
      { quoted: fcontact }
    )
  } else if (choice === '10') {
    await conn.sendMessage(
      m.chat,
      { image: { url: 'https://i.imgur.com/ZKjzjwr.jpeg' }, caption: animemenu },
      { quoted: fcontact }
    )
  } else if (choice === '11') {
    await conn.sendMessage(
      m.chat,
      { image: { url: 'https://i.imgur.com/ZKjzjwr.jpeg' }, caption: toolsmenu },
      { quoted: fcontact }
    )
  } else if (choice === '12') {
    await conn.sendMessage(
      m.chat,
      { image: { url: 'https://i.imgur.com/ZKjzjwr.jpeg' }, caption: Aimenu },
      { quoted: fcontact }
    )
  m.react("📑")

  } else {
    m.reply('Invalid choice. Please reply with a valid number.')
  m.react("❌")

  }
}

handler.help = ['menu']
handler.tags = ['downloader']
handler.command = /^(menu)$/i
handler.limit = true
export default handler

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, ' H ', m, ' M ', s, ' S '].map(v => v.toString().padStart(2, 0)).join('')
}

function clockStringP(ms) {
  let ye = isNaN(ms) ? '--' : Math.floor(ms / 31104000000) % 10
  let mo = isNaN(ms) ? '--' : Math.floor(ms / 2592000000) % 12
  let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000) % 30
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [
    ye,
    ' *Years 🗓️*\n',
    mo,
    ' *Month 🌙*\n',
    d,
    ' *Days ☀️*\n',
    h,
    ' *Hours 🕐*\n',
    m,
    ' *Minute ⏰*\n',
    s,
    ' *Second ⏱️*',
  ]
    .map(v => v.toString().padStart(2, 0))
    .join('')
}

function greetfunc() {
  const time = moment.tz('Asia/Colombo').format('HH')
  let res = 'Good morning ☀️ My Friend.....'
  if (time >= 4) {
    res = 'Good Morning 🌄'
  }
  if (time >= 10) {
    res = 'Good Afternoon ☀️'
  }
  if (time >= 15) {
    res = 'Good Afternoon 🌇'
  }
  if (time >= 18) {
    res = 'Hey Dear! Good Night 🌙'
  }
  return res
}
