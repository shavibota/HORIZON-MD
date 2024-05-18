import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import fs from 'fs'

global.owner = [['94743308757', 'BOT', true], ['94763108069', 'Shavishan', true]]

//global.pairingNumber = ""

global.mods = ['94763108069', '94743308757']
global.prems = ['94763108069', '94743308757']
global.allowed = ['94763108069', '94743308757']
global.keysZens = ['c2459db922', '37CC845916', '6fb0eff124']
global.keysxxx = keysZens[Math.floor(keysZens.length * Math.random())]
global.keysxteammm = [
  '29d4b59a4aa687ca',
  '5LTV57azwaid7dXfz5fzJu',
  'cb15ed422c71a2fb',
  '5bd33b276d41d6b4',
  'HIRO',
  'kurrxd09',
  'ebb6251cc00f9c63',
]
global.keysxteam = keysxteammm[Math.floor(keysxteammm.length * Math.random())]
global.keysneoxrrr = ['5VC9rvNx', 'cfALv5']
global.keysneoxr = keysneoxrrr[Math.floor(keysneoxrrr.length * Math.random())]
global.lolkeysapi = ['GataDios']

global.APIs = {
  xteam: 'https://api.xteam.xyz',
  dzx: 'https://api.dhamzxploit.my.id',
  lol: 'https://api.lolhuman.xyz',
  violetics: 'https://violetics.pw',
  neoxr: 'https://api.neoxr.my.id',
  zenzapis: 'https://zenzapis.xyz',
  akuari: 'https://api.akuari.my.id',
  akuari2: 'https://apimu.my.id',
  nrtm: 'https://fg-nrtm.ddns.net',
  bg: 'http://bochil.ddns.net',
  fgmods: 'https://api-fgmods.ddns.net'
}
global.APIKeys = {
  'https://api.xteam.xyz': 'd90a9e986e18778b',
  'https://api.lolhuman.xyz': '85faf717d0545d14074659ad',
  'https://api.neoxr.my.id': `${keysneoxr}`,
  'https://violetics.pw': 'beta',
  'https://zenzapis.xyz': `${keysxxx}`,
  'https://api-fgmods.ddns.net': 'fg-dylux',
}

// Sticker WM
global.botname = 'HORIZON-MD'
global.premium = 'true'
global.packname = 'H.MD'
global.author = 'shavishan'
global.menuvid = 'https://i.imgur.com/g0qhPWv.mp4'
global.igfg = '▢ Follow on Instagram\nNo I\'m NOT'
global.dygp = 'https://chat.whatsapp.com/KIpGJ7Z01T85Uq7NrEJu9q'
global.fgsc = 'https://github.com/shavibota/HORIZON-MD'
global.fgyt = 'https://github.com/shavibota/HORIZON-MD'
global.fgpyp = 'https://github.com/shavibota/HORIZON-MD'
global.fglog = './Horizon-Media/HORIZON-MD2.jpeg'
global.thumb = fs.readFileSync('./Horizon-Media/HORIZON-MD.png')

global.wait = 'Hey wait till the Horizon..'
global.rwait = '🕗'
global.dmoji = '🤭'
global.done = '✅'
global.error = '❌'
global.xmoji = '🔥'

global.multiplier = 69
global.maxwarn = '3'

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
