import { File } from 'megajs'
import path from 'path'

let handler = async (m, { conn, args, usedPrefix, text, command }) => {
  m.react("♻")
  try {
    if (!text)
      return m.reply(`${usedPrefix + command} https://mega.nz/file/ovJTHaQZ#yAbkrvQgykcH_NDKQ8eIc0zvsN7jonBbHZ_HTQL6lZ8`)
    m.react("❌")
      

    const file = File.fromURL(text)
    await file.loadAttributes()

    if (file.size >= 300000000)
      return m.reply('Error: File size is too large (Maximum Size: 300MB)')
     m.react("❌")

    const downloadingMessage = `🌩️ Downloading file... Please wait.`
    m.react(rwait)
    m.reply(downloadingMessage)

    const caption = `
    *_Successfully downloaded..._*\n
    File: ${file.name}\n
    Size: ${formatBytes(file.size)}
    `

    const data = await file.downloadBuffer()

    const fileExtension = path.extname(file.name).toLowerCase()
    const mimeTypes = {
      '.mp4': 'video/mp4',
      '.pdf': 'application/pdf',
      '.zip': 'application/zip',
      '.rar': 'application/x-rar-compressed',
      '.7z': 'application/x-7z-compressed',
      '.jpg': 'image/jpeg',
      '.jpeg': 'image/jpeg',
      '.png': 'image/png',
    }

    let mimetype = mimeTypes[fileExtension] || 'application/octet-stream'

    await conn.sendFile(m.chat, data, file.name, caption, m, null, { mimetype, asDocument: true })
    m.react(done)
  } catch (error) {
    m.react("❌")
    return m.reply(`Error: ${error.message}`)
  }
}

handler.help = ['mega']
handler.tags = ['downloader']
handler.command = /^(mega)$/i
export default handler

function formatBytes(bytes) {
  if (bytes === 0) return '0 Bytes'

  const k = 1024
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB']
  const i = Math.floor(Math.log(bytes) / Math.log(k))

  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
}
