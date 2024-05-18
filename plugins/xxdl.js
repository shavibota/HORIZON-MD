import { xnxxSearch, xnxxdl } from '../lib/scraper.js'

let handler = async (m, { conn, args, text, usedPrefix, command }) => {
  if (!text)
    throw `✳️ What do you want to search?\n📌 Usage: *${usedPrefix + command} <search>*\n\n you can use a link as well`

  m.react('⌛')

  let url
  try {
    url = new URL(text)
  } catch (error) {
    url = null
  }

  if (url) {
    try {
      const files = await xnxxdl(url.href)
      if (files && files.high) {
        conn.sendFile(m.chat, files.high, 'video.mp4', 'Here is your video', m)
        m.react('✅')
      } else {
        m.reply('🔴 Error: Failed to retrieve the download URL.')
        m.react('❌')
      }
    } catch (e) {
      console.error(e)
      m.react('❌')
      m.reply('🔴 Error: We encountered a problem while processing the request.')
    }
  } else {
    try {
      const results = await xnxxSearch(text)
      if (results.length > 0) {
        const message = results.map((r, i) => `${i + 1}. [${r.title}](${r.link})`).join('\n')
        m.react('✅')
        m.reply(message, null, {
          contextInfo: {
            mentionJid: conn.parseMention(message),
          },
        })
      } else {
        m.reply('🔴 Error: No search results found.')
        m.react('❌')
      }
    } catch (e) {
      console.error(e)
      m.reply('🔴 Error: We encountered a problem while processing the request.')
      m.react('❌')
    }
  }
}

handler.help = ['xnxx']
handler.tags = ['nsfw', 'premium']
handler.command = ['xnxxsearch', 'xnxxdl', 'xnxx']
handler.group = true
handler.premium = false
handler.register = true

export default handler
