let handler = async (m, { conn, text, usedPrefix, command }) => {
  m.react('👋🏻')
  let name = m.pushName || conn.getName(m.sender)
  let img = 'https://i.imgur.com/5lbN4va.jpeg'
  let textal = `
  🌐 𝑮𝒓𝒆𝒆𝒕𝒊𝒏𝒈𝒔 𝒇𝒓𝒐𝒎 𝑯𝑶𝑹𝑰𝒁𝑶𝑵-𝑴𝑫 🌐\n\n

  𝐼 𝑎𝑚 𝑝𝑙𝑒𝑎𝑠𝑒𝑑 𝑡𝑜 𝑎𝑛𝑛𝑜𝑢𝑛𝑐𝑒 𝑡ℎ𝑎𝑡 𝐼 𝑎𝑚 𝑐𝑢𝑟𝑟𝑒𝑛𝑡𝑙𝑦 𝑜𝑝𝑒𝑟𝑎𝑡𝑖𝑜𝑛𝑎𝑙 𝑎𝑛𝑑 𝑟𝑒𝑎𝑑𝑦 𝑡𝑜 𝑠𝑒𝑟𝑣𝑒 𝑦𝑜𝑢𝑟 𝑚𝑒𝑠𝑠𝑎𝑔𝑖𝑛𝑔 𝑛𝑒𝑒𝑑𝑠.
  \n   
   𝐴𝑠 𝑦𝑜𝑢𝑟 𝑎𝑑𝑣𝑎𝑛𝑐𝑒𝑑 𝑊ℎ𝑎𝑡𝑠𝐴𝑝𝑝 𝑏𝑜𝑡, 𝐼 𝑎𝑚 𝑒𝑞𝑢𝑖𝑝𝑝𝑒𝑑 𝑤𝑖𝑡ℎ 𝑎 𝑠𝑢𝑖𝑡𝑒 𝑜𝑓 𝑓𝑒𝑎𝑡𝑢𝑟𝑒𝑠 𝑑𝑒𝑠𝑖𝑔𝑛𝑒𝑑 𝑡𝑜 𝑒𝑛ℎ𝑎𝑛𝑐𝑒 𝑦𝑜𝑢𝑟 𝑐𝑜𝑚𝑚𝑢𝑛𝑖𝑐𝑎𝑡𝑖𝑜𝑛 𝑒𝑥𝑝𝑒𝑟𝑖𝑒𝑛𝑐𝑒.
    \n\n
  🔍 **𝗤𝘂𝗶𝗰𝗸 𝗦𝘁𝗮𝗿𝘁 𝗚𝘂𝗶𝗱𝗲:**\n
  𝑇𝑜 𝑏𝑒𝑔𝑖𝑛, 𝑠𝑖𝑚𝑝𝑙𝑦 𝑡𝑦𝑝𝑒 | .𝑚𝑒𝑛𝑢 | 𝑡𝑜 𝑎𝑐𝑐𝑒𝑠𝑠 𝑡ℎ𝑒 𝑚𝑎𝑖𝑛 𝑚𝑒𝑛𝑢.
  \n
  𝐹𝑟𝑜𝑚 𝑡ℎ𝑒𝑟𝑒, 𝑦𝑜𝑢 𝑐𝑎𝑛 𝑒𝑥𝑝𝑙𝑜𝑟𝑒 𝑣𝑎𝑟𝑖𝑜𝑢𝑠 𝑐𝑜𝑚𝑚𝑎𝑛𝑑𝑠 𝑎𝑛𝑑 𝑓𝑢𝑛𝑐𝑡𝑖𝑜𝑛𝑎𝑙𝑖𝑡𝑖𝑒𝑠 𝑡ℎ𝑎𝑡 𝐼 𝑜𝑓𝑓𝑒𝑟.
   \n\n
  🛠️ **𝗔𝘀𝘀𝗶𝘀𝘁𝗮𝗻𝗰𝗲 𝗼𝗻 𝗗𝗲𝗺𝗮𝗻𝗱:**\n
  𝘚𝘩𝘰𝘶𝘭𝘥 𝘺𝘰𝘶 𝘳𝘦𝘲𝘶𝘪𝘳𝘦 𝘢𝘯𝘺 𝘢𝘴𝘴𝘪𝘴𝘵𝘢𝘯𝘤𝘦 𝘰𝘳 𝘦𝘯𝘤𝘰𝘶𝘯𝘵𝘦𝘳 𝘢𝘯𝘺 𝘪𝘴𝘴𝘶𝘦𝘴,\n 
    𝘱𝘭𝘦𝘢𝘴𝘦 𝘥𝘰 𝘯𝘰𝘵 𝘩𝘦𝘴𝘪𝘵𝘢𝘵𝘦 𝘵𝘰 𝘳𝘦𝘢𝘤𝘩 𝘰𝘶𝘵 𝘣𝘺 𝘵𝘺𝘱𝘪𝘯𝘨 | .𝘩𝘦𝘭𝘱 |. \n
     𝘖𝘶𝘳 𝘴𝘶𝘱𝘱𝘰𝘳𝘵 𝘵𝘦𝘢𝘮 𝘪𝘴 𝘰𝘯 𝘴𝘵𝘢𝘯𝘥𝘣𝘺 𝘵𝘰 𝘱𝘳𝘰𝘷𝘪𝘥𝘦 𝘺𝘰𝘶 𝘸𝘪𝘵𝘩 𝘵𝘪𝘮𝘦𝘭𝘺 𝘴𝘰𝘭𝘶𝘵𝘪𝘰𝘯𝘴.
  \n\n
  🔐 **𝗦𝗲𝗰𝘂𝗿𝗶𝘁𝘆 𝗮𝗻𝗱 𝗖𝗼𝗺𝗽𝗹𝗶𝗮𝗻𝗰𝗲:**\n
  𝑌𝑜𝑢𝑟 𝑝𝑟𝑖𝑣𝑎𝑐𝑦 𝑎𝑛𝑑 𝑠𝑒𝑐𝑢𝑟𝑖𝑡𝑦 𝑎𝑟𝑒 𝑜𝑓 𝑢𝑡𝑚𝑜𝑠𝑡 𝑖𝑚𝑝𝑜𝑟𝑡𝑎𝑛𝑐𝑒.\n  
    𝑅𝑒𝑠𝑡 𝑎𝑠𝑠𝑢𝑟𝑒𝑑 𝑡ℎ𝑎𝑡 𝑎𝑙𝑙 𝑖𝑛𝑡𝑒𝑟𝑎𝑐𝑡𝑖𝑜𝑛𝑠 𝑎𝑟𝑒 𝑝𝑟𝑜𝑡𝑒𝑐𝑡𝑒𝑑 𝑤𝑖𝑡ℎ 𝑒𝑛𝑑-𝑡𝑜-𝑒𝑛𝑑 𝑒𝑛𝑐𝑟𝑦𝑝𝑡𝑖𝑜𝑛,\n
      𝑎𝑛𝑑 𝐼 𝑎𝑑ℎ𝑒𝑟𝑒 𝑠𝑡𝑟𝑖𝑐𝑡𝑙𝑦 𝑡𝑜 𝑊ℎ𝑎𝑡𝑠𝐴𝑝𝑝'𝑠 𝑡𝑒𝑟𝑚𝑠 𝑜𝑓 𝑠𝑒𝑟𝑣𝑖𝑐𝑒.
  \n\n
  📈 **𝗖𝗼𝗻𝘁𝗶𝗻𝘂𝗼𝘂𝘀 𝗜𝗺𝗽𝗿𝗼𝘃𝗲𝗺𝗲𝗻𝘁:**\n
  𝑊𝑒 𝑎𝑟𝑒 𝑐𝑜𝑚𝑚𝑖𝑡𝑡𝑒𝑑 𝑡𝑜 𝑐𝑜𝑛𝑡𝑖𝑛𝑢𝑜𝑢𝑠 𝑖𝑚𝑝𝑟𝑜𝑣𝑒𝑚𝑒𝑛𝑡 𝑎𝑛𝑑 𝑤𝑒𝑙𝑐𝑜𝑚𝑒 𝑦𝑜𝑢𝑟 𝑓𝑒𝑒𝑑𝑏𝑎𝑐𝑘.\n
     𝐼𝑓 𝑦𝑜𝑢 ℎ𝑎𝑣𝑒 𝑠𝑢𝑔𝑔𝑒𝑠𝑡𝑖𝑜𝑛𝑠 𝑜𝑛 ℎ𝑜𝑤 𝑤𝑒 𝑐𝑎𝑛 𝑏𝑒𝑡𝑡𝑒𝑟 𝑠𝑒𝑟𝑣𝑒 𝑦𝑜𝑢, 𝑝𝑙𝑒𝑎𝑠𝑒 𝑠ℎ𝑎𝑟𝑒 𝑡ℎ𝑒𝑚 𝑤𝑖𝑡ℎ 𝑢𝑠.\n
        𝑇ℎ𝑎𝑛𝑘 𝑦𝑜𝑢 𝑓𝑜𝑟 𝑐ℎ𝑜𝑜𝑠𝑖𝑛𝑔 𝐻𝑂𝑅𝐼𝑍𝑂𝑁-𝑀𝐷 𝐵𝑜𝑡 𝑎𝑠 𝑦𝑜𝑢𝑟 𝑡𝑟𝑢𝑠𝑡𝑒𝑑 𝑚𝑒𝑠𝑠𝑎𝑔𝑖𝑛𝑔 𝑎𝑠𝑠𝑖𝑠𝑡𝑎𝑛𝑡.\n
     𝑊𝑒 𝑙𝑜𝑜𝑘 𝑓𝑜𝑟𝑤𝑎𝑟𝑑 𝑡𝑜 𝑓𝑎𝑐𝑖𝑙𝑖𝑡𝑎𝑡𝑖𝑛𝑔 𝑦𝑜𝑢𝑟 𝑐𝑜𝑚𝑚𝑢𝑛𝑖𝑐𝑎𝑡𝑖𝑜𝑛 𝑛𝑒𝑒𝑑𝑠 𝑤𝑖𝑡ℎ 𝑒𝑓𝑓𝑖𝑐𝑖𝑒𝑛𝑐𝑦 𝑎𝑛𝑑 𝑝𝑟𝑜𝑓𝑒𝑠𝑠𝑖𝑜𝑛𝑎𝑙𝑖𝑠𝑚.
  \n\n
  — ©𝓣𝓱𝓮 𝓡𝓔𝓓𝓕𝓞𝓧 𝓘𝓝𝓒.
  \n
  `
  let con = {
    key: {
      fromMe: false,
      participant: `${m.sender.split`@`[0]}@s.whatsapp.net`,
      ...(m.chat ? { remoteJid: '16504228206@s.whatsapp.net' } : {}),
    },
    message: {
      contactMessage: {
        displayName: `${name}`,
        vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:${name}\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
      },
    },
  }
  let doc = {
    contextInfo: {
      mentionedJid: [m.sender],
      externalAdReply: {
        title: textal,
        body: 'HORIZON-MD',
        thumbnailUrl: img,
        sourceUrl: 'https://chat.whatsapp.com/KIpGJ7Z01T85Uq7NrEJu9q',
        mediaType: 1,
        renderLargerThumbnail: true,
      },
    },
  }

  await conn.sendMessage(m.chat, doc, { quoted: con })
}

handler.help = ['alive']
handler.tags = ['main']
handler.command = /^(alive)$/i

export default handler