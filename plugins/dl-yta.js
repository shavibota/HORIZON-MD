import fs from 'fs'
import ytdl from 'ytdl-core'
import ffmpeg from 'fluent-ffmpeg'

const handler = async (m, { conn, args, usedPrefix, command }) => {
  conn['youtubedl'] = conn['youtubedl'] || {}
  if (m.sender in conn['youtubedl']) {
    return
  }
  if (!args[0]) {
    m.react('❌')
    return m.reply(`Example: *${usedPrefix + command}* https://www.youtube.com/watch?v=Z28dtg_QmFw`)
  }

  const isValid = await ytdl.validateURL(args[0])
  if (!isValid) {
    m.react('❌')
    return m.reply('*Your link is not supported.*')
  }

  const _filename = `./tmp/${Math.random().toString(36).substring(2, 7)}.mp3`
  const writer = fs.createWriteStream(_filename)

  conn['youtubedl'][m.sender] = true
  try {
    const { videoDetails } = await ytdl.getInfo(args[0])
    const { title, publishDate, author } = videoDetails
    const { name: user } = author

    return new Promise((resolve, reject) => {
      const stream = ytdl(args[0], {
        quality: 'highestaudio',
      })

      ffmpeg(stream)
        .audioBitrate(128)
        .save(_filename)
        .on('end', async () => {
          try {
            m.react('⬆')
            await conn.sendMessage(
              m.chat,
              {
                audio: {
                  stream: fs.createReadStream(_filename),
                },
                fileName: `${title}.mp3`,
                mimetype: 'audio/mpeg',
                caption: `
                ┌  • *--HORIZON YTMP3 DOWNLOADER--*\n│
                ◦ *Title:* ${title}\n│  
                ◦ *Published:* ${publishDate}\n
                └  ◦ *Author:* ${user}`,
              },
              { quoted: m }
            )
            m.react('✅')
            fs.unlinkSync(_filename)
            delete conn['youtubedl'][m.sender]
            resolve()
          } catch (err) {
            m.react('❌')
            m.reply('Failed to send song')
            fs.unlinkSync(_filename)
            delete conn['youtubedl'][m.sender]
            reject(err)
          }
        })
        .on('error', err => {
          m.react('❌')
          m.reply('Failed to download song')
          fs.unlinkSync(_filename)
          delete conn['youtubedl'][m.sender]
          reject(err)
        })
    })
  } catch (error) {
    m.react('❌')
    m.reply('*Failed to get the audio!*')
    delete conn['youtubedl'][m.sender]
    console.error(error)
  }
}

handler.help = ['yta'].map(v => v + ' url')
handler.tags = ['downloader']
handler.command = /^yt(a|mp3|audio)?$/i
handler.register = false

export default handler
