import fg from 'api-dylux'

const handler = async (m, { conn, args, usedPrefix, command }) => {
  m.react("♻")
  if (!args[0]) {
    m.react("❌")
    throw `✳️ Please send the link of a Facebook video\n\n📌`
  }

  const urlRegex =
    /^(?:https?:\/\/)?(?:www\.)?(?:facebook\.com|fb\.watch)\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/i
  if (!urlRegex.test(args[0])) {
    m.react("❌")
    throw '⚠️ PLEASE GIVE A VALID URL.'
  }

  m.react(rwait)

  try {
    const result = await fg.fbdl(args[0])
    const tex = `
⊱ ─── {* FBDL*} ─── ⊰
↳ *VIDEO TITLE:* ${result.title}
-*REDFOX INC.*
⊱ ────── {⋆♬⋆} ────── ⊰`

    const response = await fetch(result.videoUrl)
    const arrayBuffer = await response.arrayBuffer()
    const videoBuffer = Buffer.from(arrayBuffer)

    conn.sendFile(m.chat, videoBuffer, 'fb.mp4', tex, m)
    m.react("✅")

  } catch (error) {
    m.react("❌")
    console.log(error)
    m.reply('⚠️ An error occurred while processing the request. Please try again later.')
  }
}

handler.help = ['facebook <url>']
handler.tags = ['downloader']
handler.command = /^((facebook|fb)(downloder|dl)?)$/i
handler.diamond = true

export default handler
