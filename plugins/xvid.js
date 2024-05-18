import { xvideosSearch, xvideosdl } from '../lib/scraper.js'

let handler = async (m, { conn, args, text, usedPrefix, command }) => {
  if (!text)
    throw `✳️ What do you want to search?\n📌 Usage: *${usedPrefix + command} <search>*\n\nExample: Hot desi bhabi or you can use a link as well\nExample: .xnxx link *`

  m.react('⌛')
  if (!text) throw 'Please provide a search query or a valid Xvideos URL.'
  m.react(' ')

  // Check if the input is a valid Xvideos URL
  const isURL = /^(https?:\/\/)?(www\.)?xvideos\.com\/.+$/i.test(text)


  try {
    if (isURL) {
      // If it's a valid URL, directly download the video
      const result = await xvideosdl(text)
      const { title, url } = result.result

      // Send the video file
      const response = await fetch(url)
      const buffer = await response.arrayBuffer()
      m.react('🕑')

      conn.sendFile(
        m.chat,
        Buffer.from(buffer),
        `${title}.mp4`,
        `Here you go: ${title}`
      )
      m.react('✅')
    } else {
      // If it's not a valid URL, perform a search and display the search results
      m.reply('searching...')
      m.react('🕒')
      const results = await xvideosSearch(text)
      if (results.length === 0) {
        m.reply('No search results found for the given query.')
        m.react('❌')
      } else {
        const searchResults = results
          .map((result, index) => {
            return `${index + 1}. *${result.title}*\nDuration: ${result.duration}\nQuality: ${result.quality}\nURL: ${result.url}`
          })
          .join('\n\n')

        m.reply(`*Search Results for "${text}":*\n\n${searchResults}`)
        m.reply('✅')
      }
    }
  } catch (error) {
    console.error(error)
    throw 'Failed to fetch Xvideos video details.'
  }
}

handler.help = ['xvid']
handler.tags = ['nsfw']
handler.command = ['xvid']
handler.group = true
handler.premium = false
handler.register = true

handler.premium = false

export default handler
