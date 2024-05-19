import fs from 'fs';
import ytdl from 'ytdl-core';

const handler = async (m, { conn, args, usedPrefix, command }) => {
  m.react("⬇");
  conn['youtubedl'] = conn['youtubedl'] || {};
  if (m.sender in conn['youtubedl']) {
    return;
  }
  if (!args[0]) {
    m.react("❌");
    return m.reply(`Example: *${usedPrefix + command}* <url> <quality>\nQuality options: high, medium, low`);
  }
  const isValid = await ytdl.validateURL(args[0]);
  if (!isValid) {
    m.react("❌");
    return m.reply('*Your link is not supported.*');
  }

  const quality = args[1] ? args[1].toLowerCase() : 'low';
  let filter;
  switch (quality) {
    case 'high':
      filter = 'highest';
      break;
    case 'medium':
      filter = 'highestvideo';
      break;
    case 'low':
      filter = 'lowest';
      break;
    default:
      m.react("❌");
      return m.reply('Invalid quality option. Choose from high, medium, or low.');
  }

  const _filename = `./tmp/${Math.random().toString(36).substring(2, 7)}.mp4`;
  const writer = fs.createWriteStream(_filename);

  conn['youtubedl'][m.sender] = true;
  try {
    const { formats, videoDetails } = await ytdl.getInfo(args[0]);
    const { title, publishDate, author } = videoDetails;
    const { user } = author;
    return new Promise((resolve, reject) => {
      ytdl(args[0], {
        quality: filter,
      }).pipe(writer);
      writer.on('error', () => {
        m.react("❌");
        m.reply('Failed to send video.');
        delete conn['youtubedl'][m.sender];
        resolve();
      });
      writer.on('close', async () => {
        try {
          m.react("⬆");
          await conn.sendMessage(
            m.chat,
            {
              video: {
                stream: fs.createReadStream(_filename),
              },
              caption: `
              ┌  • *YouTube - MP4*\n│
              ◦ *Title:* ${title}\n│  
              ◦ *Published:* ${publishDate}\n
              └  ◦ *Author:* ${user}`,
            },
            { quoted: m }
          );
        } catch {
          m.react("⬆");
          await conn.sendMessage(
            m.chat,
            {
              document: {
                stream: fs.createReadStream(_filename),
              },
              fileName: `${title}.mp4`,
              mimetype: 'video/mp4',
              caption: `
              ┌  • *YouTube - MP4*\n│
              ◦ *Title:* ${title}\n│  
              ◦ *Published:* ${publishDate}\n
              └  ◦ *Author:* ${user}`,
            },
            { quoted: m }
          );
        }
        m.react("✅");
        fs.unlinkSync(_filename);
        delete conn['youtubedl'][m.sender];
        resolve();
      });
    });
  } catch {
    m.react("❌");
    m.reply('*Failed to get the video!*');
  }
};

handler.help = ['ytmp4'].map(v => v + ' <url> <quality>');
handler.tags = ['downloader'];
handler.command = /^yt(v|mp4|video)?$/i;
handler.register = false;

export default handler;
