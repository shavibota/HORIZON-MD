import fetch from 'node-fetch';
import ytSearch from 'yt-search';
import ytdl from 'ytdl-core';
import axios from 'axios';

const handler = async (msg, { command, conn, text }) => {
  m.react("❌")
  if (!text) throw 'No text to search, please enter the name of the song you want to play.\n\n*EXAMPLE:\n#play2 - Hope Dilo*';

  try {
    if (command === 'play2') {
      conn.sendMessage(msg.chat, '*_sending your audio..._*', msg);
      m.react("🕒")
      try {
        let response = await fetch(`https://api.lolhuman.xyz/api/ytplay2?apikey=${lolkeysapi}&query=${text}`);
        let data = await response.json();
        let audioUrl = data.result.audio;

        let audioMessage = await conn.sendFile(msg.chat, {
          audio: { url: audioUrl },
          fileName: 'error.mp3',
          mimetype: 'audio/mp4'
        }, { quoted: msg });


        if (!audioMessage) {
          m.react("❌")
          await conn.sendFile(msg.chat, audioUrl, 'error.mp3', null, msg, false, { mimetype: 'audio/mp4' });
        }
      } catch {
        let playResult = await ytPlay(text);
        let audioUrl = playResult.result || playResult.result2[0].audio;

        await conn.sendFile(msg.chat, { audio: { url: audioUrl }, fileName: 'error.mp3', mimetype: 'audio/mp4' }, { quoted: msg });
        m.react(done)
      }
    } else if (command === 'playvid') {
      m.react(rwait)
      conn.sendMessage(msg.chat, '*_⏳Processing your video...⏳_*', msg);
      try {
        let playResult = await ytPlayVid(text);
        m.react(done)
        await conn.sendFile(msg.chat, {
          video: { url: playResult.result },
          fileName: 'error.mp4',
          caption: 'HORIZON-MD',
          thumbnail: playResult.thumb,
          mimetype: 'video/mp4'
        }, { quoted: msg });
      } catch {
        let response = await fetch(`https://api.lolhuman.xyz/api/ytplay2?apikey=${lolkeysapi}&query=${text}`);
        let data = await response.json();
        await conn.sendFile(msg.chat, data.result.video, 'error.mp4', 'HORIZON-MD', msg);
      }
    }
  } catch (error) {
    m.react("❌")
    msg.reply('*Error occurred, please try again later.*');
  }
};

handler.help = ['play2', 'playvid'].map(cmd => cmd + ' <text>');
handler.tags = ['downloader'];
handler.command = ['play2', 'playvid'];

export default handler;

function bytesToSize(bytes) {
  return new Promise((resolve) => {
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    if (bytes === 0) return 'n/a';
    const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)), 10);
    resolve((bytes / (1024 ** i)).toFixed(1) + ' ' + sizes[i]);
  });
}

async function ytMp3(url) {
  return new Promise((resolve, reject) => {
    ytdl.getInfo(url).then(async info => {
      let formats = info.formats.filter(format => format.container === 'mp4' && format.hasAudio && !format.hasVideo);
      let sortedFormats = formats.sort((a, b) => a.audioBitrate - b.audioBitrate);
      let result = await axios.get(`https://tinyurl.com/api-create.php?url=${sortedFormats[0].url}`);
      let title = info.videoDetails.title;
      let thumb = info.player_response.microformat.playerMicroformatRenderer.thumbnail.thumbnails[0].url;
      resolve({ title, result: result.data, result2: sortedFormats, thumb });
    }).catch(reject);
  });
}

async function ytMp4(url) {
  return new Promise((resolve, reject) => {
    ytdl.getInfo(url).then(async info => {
      let formats = info.formats.filter(format => format.container === 'mp4' && format.hasAudio && format.hasVideo);
      let sortedFormats = formats.sort((a, b) => a.qualityLabel - b.qualityLabel);
      let result = await axios.get(`https://tinyurl.com/api-create.php?url=${sortedFormats[0].url}`);
      let title = info.videoDetails.title;
      let thumb = info.player_response.microformat.playerMicroformatRenderer.thumbnail.thumbnails[0].url;
      resolve({ title, result: result.data, result2: sortedFormats[0].url, thumb });
    }).catch(reject);
  });
}

async function ytPlay(query) {
  return new Promise((resolve, reject) => {
    ytSearch(query).then(async result => {
      let videos = result.videos.slice(0, 5);
      let urls = videos.map(video => video.url);
      let playResult = await ytMp3(urls[0]);
      resolve(playResult);
    }).catch(reject);
  });
}

async function ytPlayVid(query) {
  return new Promise((resolve, reject) => {
    ytSearch(query).then(async result => {
      let videos = result.videos.slice(0, 5);
      let urls = videos.map(video => video.url);
      let playResult = await ytMp4(urls[0]);
      resolve(playResult);
    }).catch(reject);
  });
}
