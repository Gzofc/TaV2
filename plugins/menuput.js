import fs from'fs'
let { MessageType } = (await import('@adiwajshing/baileys')).default
let handler = async (m, { conn }) => {
let putramodz = fs.readFileSync('./mp3/putramodzmenu.mp3') 
conn.sendFile(m.chat, putramodz, '', '', m, true)
}

handler.customPrefix = /^(tes|test)$/i
handler.command = new RegExp

export default handler
