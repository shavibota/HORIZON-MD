import fs from 'fs'
import axios from 'axios'
import ffmpeg from 'fluent-ffmpeg'
import fetch from 'node-fetch'
import ytdl from 'youtubedl-core'
import yts from 'youtube-yts'
import { pipeline } from 'stream'
import { promisify } from 'util'
import os from 'os'

const streamPipeline = promisify(pipeline)

const wait = 'Searching... Please wait a moment.'

const searchAndDownloadMusic = async text => {
  try {
    const results = await yts(text)
    const allLinks = results.videos.slice(0, 5).map(video => ({
      title: video.title,
      url: video.url,
    }))

    return { allLinks }
  } catch (error) {
    console.error(error)
    throw 'An error occurred while searching for YouTube songs.'
  }
}

const generateRandomName = () => {
  return Math.random().toString(36).substring(7)
}

const handler = async (m, { conn, command, text, args, usedPrefix }) => {
  m.react('🎵')
  if (!text) throw `Give a text to search. Example: *${usedPrefix + command}* Dilo`

  conn.PLAY = conn.PLAY ? conn.PLAY : {}
  await conn.reply(m.chat, wait, m)

  const result = await searchAndDownloadMusic(text)
  m.react('🔍')
  const infoText = `✦ ──『 *HORIZON Song Downloader* 』── ⚝ \n\n [ ⭐ Reply the number of the desired search result to get the song]. \n\n`

  const orderedLinks = result.allLinks.map((link, index) => {
    const sectionNumber = index + 1
    const { title, url } = link
    return `*${sectionNumber}.* ${title}`
  })

  const orderedLinksText = orderedLinks.join('\n\n')
  const fullText = `${infoText}\n\n${orderedLinksText}`
  const { key } = await conn.reply(m.chat, fullText, m)

  conn.PLAY[m.sender] = {
    result,
    key,
    timeout: setTimeout(() => {
      delete conn.PLAY[m.sender]
    }, 60000),
  }
}

// Before handler to process the user's choice
handler.before = async (m, { conn }) => {
  m.react('⬇')
  conn.PLAY = conn.PLAY ? conn.PLAY : {}
  if (m.isBaileys || !(m.sender in conn.PLAY)) return

  const { result, key, timeout } = conn.PLAY[m.sender]
  if (!m.quoted || m.quoted.id !== key.id || !m.text) return
  m.react('⬆')

  const choice = m.text.trim()
  const inputNumber = Number(choice)
  if (inputNumber >= 1 && inputNumber <= result.allLinks.length) {
    const selectedUrl = result.allLinks[inputNumber - 1].url
    console.log('selectedUrl', selectedUrl)
    let title = generateRandomName()
    const audioStream = ytdl(selectedUrl, {
      filter: 'audioonly',
      quality: 'highestaudio',
    })
    m.react('⬆')
    
    const tmpDir = os.tmpdir()
    const writableStream = fs.createWriteStream(`${tmpDir}/${title}.mp3`)
    

    await streamPipeline(audioStream, writableStream)

    const doc = {
      audio: {
        url: `${tmpDir}/${title}.mp3`,
      },
      caption:text,
      mimetype: ext,asDocument: true,
      ptt: false,
      waveform: [100, 0, 0, 0, 0, 0, 100],
      fileName: `${title}.mp3`,
    }

    await conn.sendMessage(m.chat, doc,{ quoted: m })
    
    clearTimeout(timeout)
    delete conn.PLAY[m.sender]
  } else {
    m.reply(
      'Invalid sequence number. Please select the appropriate number from the list above.\nBetween 1 to ' +
        result.allLinks.length
    )
  }
}

handler.help = ['song']
handler.tags = ['downloader']
handler.command = /^song?$/i

export default handler
