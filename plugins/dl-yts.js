import axios from 'axios'

let handler = async (m, { conn, text }) => {
  m.react("♻")
  if (!text) throw '✳️ What do you want me to search for on YouTube?'
  m.react("❌")

  try {
    m.react("🕒")
    const query = encodeURIComponent(text)
    const response = await axios.get(`https://weeb-api.vercel.app/ytsearch?query=${query}`)
    const results = response.data

    if (results.length === 0) {
      m.react("✅")
      throw 'No results found for the given query.' 
    }

    const firstResult = results[0]
    const secondResult = results[1]
    const thirdResult = results[2]
    const fourthResult = results[3]
    const fifthResult = results[4]
    const sixthResult = results[5]
    const seventhResult = results[6]
    const eighthResult = results[7]
    const ninthResult = results[8]
    const tenthResult = results[9]

    const message = `
    ✧˚·̩̩̥͙˚̩̥̩̥·̩̩̥͙✧·̩̩̥͙˚̩̥̩̥˚·̩̩̥͙✧ 𝙷𝙾𝚁𝙸𝚉𝙾𝙽-𝙼𝙳 𝚈𝚃 𝚂𝙴𝚁𝚅𝙴𝚁 ✧˚·̩̩̥͙˚̩̥̩̥·̩̩̥͙✧·̩̩̥͙˚̩̥̩̥˚·̩̩̥͙✧

    𝙋𝙒𝘿 𝘽𝙔 𝙍𝙀𝘿𝙁𝙊𝙓 𝙄𝙉𝘾.2024
    ...........................................................
    ➤ ${firstResult.title}
    ➤ Link : ${firstResult.url}
    ➤ Duration : ${firstResult.timestamp}
    ➤ Published : ${firstResult.ago}
    ➤ Views: ${firstResult.views}
    .............................................................
    ➤ ${secondResult.title}
    ➤ Link : ${secondResult.url}
    ➤ Duration : ${secondResult.timestamp}
    ➤ Published : ${secondResult.ago}
    ➤ Views: ${secondResult.views}
    .............................................................
    ➤ ${thirdResult.title}
    ➤ Link : ${thirdResult.url}
    ➤ Duration : ${thirdResult.timestamp}
    ➤ Published : ${thirdResult.ago}
    ➤ Views: ${thirdResult.views}
    .............................................................
    ➤ ${fourthResult.title}
    ➤ Link : ${fourthResult.url}
    ➤ Duration : ${fourthResult.timestamp}
    ➤ Published : ${fourthResult.ago}
    ➤ Views: ${fourthResult.views}
    .............................................................
    ➤ ${fifthResult.title}
    ➤ Link : ${fifthResult.url}
    ➤ Duration : ${fifthResult.timestamp}
    ➤ Published : ${fifthResult.ago}
    ➤ Views: ${fifthResult.views}
    .............................................................
    ➤ ${sixthResult.title}
    ➤ Link : ${sixthResult.url}
    ➤ Duration : ${sixthResult.timestamp}
    ➤ Published : ${sixthResult.ago}
    ➤ Views: ${sixthResult.views}
    .............................................................
    ➤ ${seventhResult.title}
    ➤ Link : ${seventhResult.url}
    ➤ Duration : ${seventhResult.timestamp}
    ➤ Published : ${seventhResult.ago}
    ➤ Views: ${seventhResult.views}
    .............................................................
    ➤ ${eighthResult.title}
    ➤ Link : ${eighthResult.url}
    ➤ Duration : ${eighthResult.timestamp}
    ➤ Published : ${eighthResult.ago}
    ➤ Views: ${eighthResult.views}
    .............................................................
    ➤ ${ninthResult.title}
    ➤ Link : ${ninthResult.url}
    ➤ Duration : ${ninthResult.timestamp}
    ➤ Published : ${ninthResult.ago}
    ➤ Views: ${ninthResult.views}
    .............................................................
    ➤ ${tenthResult.title}
    ➤ Link : ${tenthResult.url}
    ➤ Duration : ${tenthResult.timestamp}
    ➤ Published : ${tenthResult.ago}
    ➤ Views: ${tenthResult.views}
    ........................................................

✧˚·̩̩̥͙˚̩̥̩̥·̩̩̥͙✧·̩̩̥͙˚̩̥̩̥˚·̩̩̥͙✧ 𝒯ℋℰ ℋ𝒪ℛℐ𝒵𝒪𝒩-ℳ𝒟 2024✧˚·̩̩̥͙˚̩̥̩̥·̩̩̥͙✧·̩̩̥͙˚̩̥̩̥˚·̩̩̥͙✧
    `
    m.react("✅")
    conn.sendFile(m.chat, firstResult.thumbnail, 'yts.jpeg', message, m)
  } catch (error) {
    m.react("❌")
    console.error(error)
    throw 'An error occurred while searching for YouTube videos.'
  }
}

handler.help = ['ytsearch']
handler.tags = ['downloader']
handler.command = ['ytsearch', 'yts']

export default handler
