let handler = async m =>
  m.react("❤️")
  m.reply(
    `

≡  *𝑯𝑶𝑹𝑰𝒁𝑶𝑵  ┃ ᴮᴼᵀ*   GROUPS

─────────────
▢ Join  support Group
https://chat.whatsapp.com/KIpGJ7Z01T85Uq7NrEJu9q
─────────────

`.trim()
  )
handler.help = ['groups']
handler.tags = ['main']
handler.command = ['groups']

export default handler
