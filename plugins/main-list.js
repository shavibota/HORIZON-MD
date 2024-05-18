let handler = async (m, { conn, usedPrefix, command }) => {
  let who = m.quoted
    ? m.quoted.sender
    : m.mentionedJid && m.mentionedJid[0]
      ? m.mentionedJid[0]
      : m.fromMe
        ? conn.user.jid
        : m.sender
  if (!(who in global.db.data.users)) throw `user is not found !!`

  let pp = './Horizon-Media/BACK-HORIZON.jpeg'
  let more = String.fromCharCode(8206)
  let readMore = more.repeat(850)
  m.react("📑")

  let lkr
  switch (command) {
    case 'list':
      lkr =
        '*Get ready for the ride, here are your ticket options:*\n\n' +
        '🤖 *' +
        usedPrefix +
        "botmenu* - The Bot's secret control panel. What's your command, oh great one?\n\n" +
        '👑 *' +
        usedPrefix +
        "ownermenu* - The sacred scroll only for the chosen one. Yep, that's you, Boss!\n\n" +
        '🧑‍🤝‍🧑 *' +
        usedPrefix +
        'groupmenu* - Group shenanigans central! Unite, chat, conquer!\n\n' +
        '📥 *' +
        usedPrefix +
        "dlmenu* - 'DL' stands for 'Delicious Loot'. Come grab your goodies!\n\n" +
        '🎉 *' +
        usedPrefix +
        "funmenu* - The bot's party hat. Games, jokes and instant ROFLs. Let's get this party started!\n\n" +
        '💰 *' +
        usedPrefix +
        'stickermenu* - A rainbow of stickers for your inner artist. Make your chats pop!\n\n' +
        '🧰 *' +
        usedPrefix +
        "toolmenu* - Your handy-dandy toolkit. What's your pick, genius?\n\n" +
        '🎩 *' +
        usedPrefix +
        'logomenu* - Create a logo that screams YOU. Or whispers. You choose the volume.\n\n' +
        '🌙 *'
      break

    case 'botmenu':
      lkr = `╭─🤖【 BOT MENU 】🤖─╮
      │ 💎 _${usedPrefix}gita_               │
      │ 💎 _${usedPrefix}ping_               │
      │ 💎 _${usedPrefix}uptime_             │
      │ 💎 _${usedPrefix}bot_                │
      │ 💎 _${usedPrefix}owner_              │
      │ 💎 _${usedPrefix}script_             │
      │ 💎 _${usedPrefix}runtime_            │
      │ 💎 _${usedPrefix}info_               │
      │ 💎 _${usedPrefix}groups_             │
      │ 💎 _${usedPrefix}blocklist_          │
      │ 💎 _${usedPrefix}listprem_           │
      │ 💎    REDFOX-INC.                    │
      ╰───────────────────────╯
      ` 
      break
    case 'ownermenu':
      lkr = `╭─👑【 OWNER MENU 】👑─╮
      │ 💎 _${usedPrefix}banchat_           │
      │ 💎 _${usedPrefix}unbanchat_         │
      │ 💎 _${usedPrefix}banuser_           │
      │ 💎 _${usedPrefix}unbanuser_         │
      │ 💎 _${usedPrefix}broadcast_         │
      │ 💎 _${usedPrefix}broadcastgc_       │
      │ 💎 _${usedPrefix}join_              │
      │ 💎 _${usedPrefix}setppbot_          │
      │ 💎 _${usedPrefix}setprefix_         │
      │ 💎 _${usedPrefix}resetprefix_       │
      │ 💎 _${usedPrefix}getfile_           │
      │ 💎 _${usedPrefix}getplugin_         │
      ╰───────────────────────╯
      ` 
      break
    case 'groupmenu':
      lkr = `╭─🎉【 GROUP MENU 】🎉─╮
      │ 💎 _${usedPrefix}kick *<@tag>*_          │
      │ 💎 _${usedPrefix}promote *<@tag>*_       │
      │ 💎 _${usedPrefix}demote *<@tag>*_        │
      │ 💎 _${usedPrefix}infogroup_              │
      │ 💎 _${usedPrefix}resetlink_              │
      │ 💎 _${usedPrefix}link_                   │
      │ 💎 _${usedPrefix}setpp *<image>*_        │
      │ 💎 _${usedPrefix}setname *<text>*_       │
      │ 💎 _${usedPrefix}setdesc *<text>*_       │
      │ 💎 _${usedPrefix}setwelcome *<text>*_    │
      │ 💎 _${usedPrefix}setbye *<text>*_        │
      │ 💎 _${usedPrefix}hidetag *<ANY Format>*_ │
      │ 💎 _${usedPrefix}warn *<@tag>*_          │
      │ 💎 _${usedPrefix}unwarn *<@tag>*_        │
      │ 💎 _${usedPrefix}group *<open/close>*_   │
      │ 💎 _${usedPrefix}enable_                 │
      ╰───────────────────────╯
      `
      break
    case 'downloadermenu':
    case 'dlmenu':
      lkr = `╭─🌟【 DL MENU 】🌟─╮
      │ 💎 _${usedPrefix}play_                 │
      │ 💎 _${usedPrefix}song_                 │
      │ 💎 _${usedPrefix}yta <link>_           │
      │ 💎 _${usedPrefix}ytv <link>_           │
      │ 💎 _${usedPrefix}ytmp3 <link>_         │
      │ 💎 _${usedPrefix}ytmp4 <link>_         │
      │ 💎 _${usedPrefix}gimage_               │
      │ 💎 _${usedPrefix}pinterest_            │
      │ 💎 _${usedPrefix}mediafire <link>_     │
      │ 💎 _${usedPrefix}gdrive <link>_        │
      │ 💎 _${usedPrefix}gitclone <link>_      │
      │ 💎 _${usedPrefix}twitter <link>_       │
      │ 💎 _${usedPrefix}tiktok <link>_        │
      │ 💎 _${usedPrefix}tiktokstalk_          │
      │ 💎 _${usedPrefix}instagram <link>_     │
      │ 💎 _${usedPrefix}spotify_              │
      │ 💎 _${usedPrefix}facebook <link>_      │
      ╰───────────────────╯
      ` //
      break
    case 'funmenu':
      lkr = `
      ╭───🎉【 FUN MENU 】🎉───╮
      │ 🎲 _${usedPrefix}character_  │
      │ 🎯 _${usedPrefix}truth_      │
      │ 🃏 _${usedPrefix}dare_       │
      │ 🎶 _${usedPrefix}flirt_      │
      │ 🎨 _${usedPrefix}gay_        │
      │ 🎭 _${usedPrefix}shayeri_    │
      │ 🤔 _${usedPrefix}ship_       │
      │ 🧩 _${usedPrefix}waste_      │
      │ 🤣 _${usedPrefix}simpcard_   │
      │ 🎬 _${usedPrefix}hornycard_  │
      │ 🎈 _${usedPrefix}ytcomment_  │
      │ 🚀 _${usedPrefix}stupid_     │
      │ 🧸 _${usedPrefix}lolicon_    │
      ╰───────────────────────╯       
    `
      break
    case 'animemenu':
      lkr = `╭───✨【 ANIME MENU 】✨───╮
      │ 🌸 _${usedPrefix}waifu_       │
      │ 🐾 _${usedPrefix}neko_        │
      │ 🍭 _${usedPrefix}loli_        │
      │ 💑 _${usedPrefix}couplepp_    │
      │ 🎨 _${usedPrefix}toanime_     │
      │ 🌀 _${usedPrefix}naruto_      │
      │ 🌑 _${usedPrefix}itachi_      │
      │ 🚴 _${usedPrefix}akira_       │
      │ ⚔️ _${usedPrefix}asuna_       │
      │ 📚 _${usedPrefix}akiyama_     │
      │ 🍃 _${usedPrefix}boruto_      │
      │ 💌 _${usedPrefix}hornycard_   │
      │ 🏫 _${usedPrefix}ayuzawa_     │
      │ ❄️ _${usedPrefix}anna_        │
      │ ☕ _${usedPrefix}chiho_       │
      │ 🎀 _${usedPrefix}chitoge_     │
      │ 💥 _${usedPrefix}deidara_     │
      │ 🛡️ _${usedPrefix}erza_        │
      │ 🧙‍♀️ _${usedPrefix}elaina_     │
      │ ❄️ _${usedPrefix}emilia_      │
      │ 🔥 _${usedPrefix}hestia_      │
      │ 🌺 _${usedPrefix}hinata_      │
      │ 🎶 _${usedPrefix}inori_       │
      │ 🎢 _${usedPrefix}isuzu_       │
      │ 🌟 _${usedPrefix}kagura_      │
      │ 🎻 _${usedPrefix}kaori_       │
      │ 🖤 _${usedPrefix}keneki_      │
      │ ⏳ _${usedPrefix}kurumi_      │
      │ 🌪️ _${usedPrefix}madara_      │
      │ 🗡️ _${usedPrefix}mikasa_      │
      │ 🎤 _${usedPrefix}miku_        │
      │ ⚡ _${usedPrefix}minato_      │
      │ 🌹 _${usedPrefix}nezuko_      │
      │ 📺 _${usedPrefix}sagiri_      │
      │ 🐍 _${usedPrefix}sasuke_      │
      │ 🌸 _${usedPrefix}sakura_      │
      │ 🕊️ _${usedPrefix}kotori_      │
      ╰───────────────────────╯
      
    `
      break
    case 'stickermenu':
      lkr = `╒════════════════════╕
      │  🌟 STICKER MENU 🌟  │
      ╘════════════════════╛
      ├─🔖 _${usedPrefix}sticker_ : Convert images to stickers
      ├─📸 _${usedPrefix}take_ : Capture and stickerize
      ├─🔄 _${usedPrefix}scircle_ : Circular sticker format
      ├─🎨 _${usedPrefix}smaker_ : Custom sticker creation
      ├─🚫 _${usedPrefix}sremovebg_ : Stickers without background
      ├─🔍 _${usedPrefix}getsticker_ : Retrieve sticker packs
      ├─😃 _${usedPrefix}emojimix_ : Mix and match emojis
      ├─🖼️ _${usedPrefix}toimg_ : Convert stickers to images
      ├─🎥 _${usedPrefix}tovid_ : Turn stickers into videos
      ├─✏️ _${usedPrefix}ttp_ : Text to sticker
      ├─📦 _${usedPrefix}telesticker_ : Telegram sticker packs
      ├─🆒 _${usedPrefix}attp_ : Animated text to sticker
      ├─🆕 _${usedPrefix}attp2_ : Version 2 animated text
      ├─🆙 _${usedPrefix}attp3_ : Version 3 animated text
      ╘════════════════════╛
      `
      break
    case 'toolmenu':
      lkr =` ╭─✧─╮ 𝙏𝙊𝙊𝙇𝙎 𝙈𝙀𝙉𝙐 ╭─✧─╮
      ├───────────────────────┤
      │  🛠️ _${usedPrefix}autosticker_   │
      │  📄 _${usedPrefix}pdf_           │
      │  🎵 _${usedPrefix}whatmusic_     │
      │  🧮 _${usedPrefix}calc_          │
      │  🔍 _${usedPrefix}google_        │
      │  🎤 _${usedPrefix}lyrics_        │
      │  📖 _${usedPrefix}readmore_      │
      │  🌐 _${usedPrefix}ssweb_         │
      │  🗣️ _${usedPrefix}tts_           │
      │  🌎 _${usedPrefix}translate_     │
      │  🔗 _${usedPrefix}tourl_         │
      │  📚 _${usedPrefix}wikipedia_     │
      │  📱 _${usedPrefix}nowa_           │
      │  🎨 _${usedPrefix}qrmaker_       │
      │  🔍 _${usedPrefix}readqr_        │
      │  ✨ _${usedPrefix}fancy_         │
      │  ☀️ _${usedPrefix}weather_       │
      │  🗣️ _${usedPrefix}siri_          │
      │  🗣️ _${usedPrefix}alexa_         │
      │  🎨 _${usedPrefix}dalle_         │
      │  🖼️ _${usedPrefix}tocartoon_     │
      │  💬 _${usedPrefix}quote_         │
      │  📰 _${usedPrefix}technews_      │
      │  📖 _${usedPrefix}define_        │
      │  🐾 _${usedPrefix}pokedex_       │
      │  🖼️ _${usedPrefix}removebg_      │
      │  📲 _${usedPrefix}apk_            │
      │  🔗 _${usedPrefix}tinyurl        │
      │  📖 _${usedPrefix}readvo_        │
      │  ✅ _${usedPrefix}true_          │
      └───────────────────────┘
      ╰─✧─╯ 𝙀𝙉𝙃𝘼𝙉𝘾𝙀 𝙔𝙊𝙐𝙍 𝙀𝙓𝙋𝙀𝙍𝙄𝙀𝙉𝘾𝙀 ╰─✧─╯
       `
      break
    case 'logomenu':
      lkr = `use ${usedPrefix}logo to see all options \ngfx cmd upto 12` //
      break
    default:
      lkr = `Invalid command. Type ${usedPrefix}list to see available options.`
  }

  conn.sendFile(m.chat, pp, 'perfil.jpg', lkr, m, false, { mentions: [who] })

  let done = '👍'
  m.react(done)
}

handler.help = [
  'list',
  'botmenu',
  'ownermenu',
  'groupmenu',
  'dlmenu',
  'downloadermenu',
  'funmenu',
  'stickermenu',
  'logomenu',
  'toolmenu',
]
handler.tags = ['main']
handler.command = [
  'list',
  'botmenu',
  'ownermenu',
  'groupmenu',
  'dlmenu',
  'downloadermenu',
  'funmenu',
  'stickermenu',
  'logomenu',
  'toolmenu',
]

export default handler
