import ytdl from 'ytdl-core';

const handler = async (m, { conn, args }) => {
  m.react("🅰")
  if (!args || !args[0]) {
    throw `✳️ Example:\n${usedPrefix + command} https://youtu.be/YzkTFFwxtXI`;
  }
  
  if (!args[0].match(/youtu/gi)) {
    throw `❎ Verify that the YouTube link is correct.`;
  }

  try {
    const url = args[0];
    const info = await ytdl.getInfo(url);
    const formats = ytdl.filterFormats(info.formats, 'videoandaudio');
    
    if (!formats || formats.length === 0) {
      m.react("💥")
      throw 'No video formats found.';
    }
    
    const qualityPrompt = `Choose the video quality:\n\n${formats.map((format, index) => `${index + 1}. ${format.qualityLabel}`).join('\n')}\n\nReply with the number of your choice.`;
    
    // Send the prompt and wait for user's reply
    conn.sendMessage(m.chat, qualityPrompt, { quoted: m });
    
    const qualityHandler = async (reply) => {
      try {
        const choice = parseInt(reply.body);
        
        if (isNaN(choice) || choice < 1 || choice > formats.length) {
          m.react("💥")
          throw 'Invalid choice. Please reply with a valid number.';
        }
        
        const chosenFormat = formats[choice - 1];
        
        const title = info.videoDetails.title;
        const videoBuffer = await ytdl.downloadFromInfo(info, { format: chosenFormat });
        m.react("✅")
        conn.sendFile(m.chat, videoBuffer, 'video.mp4', `✼ ••๑⋯❀ Y O U T U B E ❀⋯⋅๑•• ✼\n\nTitle: ${title}`, m, false, { asDocument: false });
      } catch (error) {
        m.react("❌")
        console.error('Error:', error);
        conn.sendMessage(m.chat, error, { quoted: m });
      } finally {
        // Remove the listener to prevent multiple responses
        m.react("💚")
        conn.removeListener('chat-update', qualityHandler);
      }
    };
    
    // Listen for user's response
    conn.on('chat-update', qualityHandler);
    m.react("💜")

  } catch (error) {
    m.react("🖤")
    console.error('Error:', error);
    throw 'An error occurred while processing your request. Please try again later.';
  }
};

handler.help = ['ytmp4 <yt-link>'];
handler.tags = ['downloader'];
handler.command = ['ytmp4', 'video', 'ytv'];
handler.diamond = false;

export default handler;
