const fs = require('fs')
const fetch = require('node-fetch')
let handler = async(m, { conn, text, usedPrefix, command }) => {
let tag = `https://wa.me/6282214729677`
  let mentionedJid = [m.sender]
let pp = await conn.profilePictureUrl(m.chat).catch(_ => null)
let suka = `Saya Putra`
global.fkontak = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `status@broadcast` } : {}) }, message: { 'contactMessage': { 'displayName': suka, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${suka},;;;\nFN:${suka},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabell:Ponsel\nEND:VCARD`, 'jpegThumbnail': fs.readFileSync('./thumbnail.jpg'), thumbnail: fs.readFileSync('./thumbnail.jpg'),sendEphemeral: true}}}

let str = `*Hai Ngab*`
let isi =`ɪ'ᴍ xʏꜱʙᴏᴛ ʏᴀɴɢ ᴅɪ ʙᴜᴀᴛ ɢᴀᴋ ɴɪᴀᴛ ᴏʟᴇʜ ʟᴀɴꜱ ᴋᴀʀᴇɴᴀ ᴍᴀʟᴇꜱ ʀᴇᴄᴏᴅᴇ ᴊᴀᴅɪ ᴘᴀᴋᴇ ᴀᴊᴀ ᴀᴘᴀ ʏᴀɴɢ ᴀᴅᴀ ʏᴀʜ.\nKalau Ada Yg Error Bisa Langsung Report Ke Owner.\n #Owner Ganteng🗿`
let wibu = `https://api-reysekha.herokuapp.com/api/random/cosplay?apikey=apirey` 
let thumb = await(await fetch(wibu)).buffer()
conn.send3ButtonImg(m.chat, `https://telegra.ph/file/03e30d105286d420bf466.jpg`, str, isi, 'ListMenu', '.command', 'Pemilik', '.owner', 'Credit', '.credit', m, { contextInfo: { externalAdReply: { showAdAttribution: true,
    mediaUrl: 'https://instagram.com/lans.xys',
    mediaType: 2, 
    description: urlnya,
    title: "Follow Ig Gw",
    body: wm,
    thumbnail: thumb,
    sourceUrl: 'https://instagram.com/lans.xys'
     }}
  })
          }
handler.help = ['menu']
handler.tags = ['main']
handler.command =  /^(menu)$/i

handler.register = false

module.exports = handler
