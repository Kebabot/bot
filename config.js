const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="Lahore,Pakistan."
global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"
global.DATABASE_URI = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5',  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3,
global.disablepm = process.env.DISABLE_PM || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES|| "text",
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "/",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "V.1.2.8",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Choou-MD",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "choou-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Choou",

  sessionName:process.env.SESSION_ID || "SUHAIL_06_00_03_01_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDU4LFxuICAgICAgICA1MCxcbiAgICAgICAgOTgsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxOSxcbiAgICAgICAgMjU1LFxuICAgICAgICAxMjUsXG4gICAgICAgIDYxLFxuICAgICAgICAxNDcsXG4gICAgICAgIDUsXG4gICAgICAgIDM4LFxuICAgICAgICA3NSxcbiAgICAgICAgODUsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMzksXG4gICAgICAgIDU3LFxuICAgICAgICAyMzEsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjAsXG4gICAgICAgIDE4NCxcbiAgICAgICAgOTYsXG4gICAgICAgIDI1LFxuICAgICAgICAxMzAsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTIsXG4gICAgICAgIDk2LFxuICAgICAgICAxMTMsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNjZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc0LFxuICAgICAgICAxODAsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTU4LFxuICAgICAgICAxNTEsXG4gICAgICAgIDQ3LFxuICAgICAgICA5MixcbiAgICAgICAgNTEsXG4gICAgICAgIDU2LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjUyLFxuICAgICAgICA2MixcbiAgICAgICAgODUsXG4gICAgICAgIDExMixcbiAgICAgICAgNDcsXG4gICAgICAgIDMsXG4gICAgICAgIDI0NixcbiAgICAgICAgNjYsXG4gICAgICAgIDE5LFxuICAgICAgICAxMjIsXG4gICAgICAgIDY1LFxuICAgICAgICA2OCxcbiAgICAgICAgMTYxLFxuICAgICAgICAyNDAsXG4gICAgICAgIDcxLFxuICAgICAgICAzOCxcbiAgICAgICAgOTYsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMCxcbiAgICAgICAgMTg1LFxuICAgICAgICAxMjJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcyLFxuICAgICAgICA5MixcbiAgICAgICAgNCxcbiAgICAgICAgODYsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTM1LFxuICAgICAgICAxNTUsXG4gICAgICAgIDcyLFxuICAgICAgICAxMDgsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjM2LFxuICAgICAgICAxNjUsXG4gICAgICAgIDEsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTIzLFxuICAgICAgICA2OSxcbiAgICAgICAgMjE5LFxuICAgICAgICA0MSxcbiAgICAgICAgMjM0LFxuICAgICAgICA1NCxcbiAgICAgICAgMjIyLFxuICAgICAgICAxNyxcbiAgICAgICAgMixcbiAgICAgICAgMzUsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTQyLFxuICAgICAgICAxLFxuICAgICAgICA4NSxcbiAgICAgICAgOCxcbiAgICAgICAgMTgxLFxuICAgICAgICA2MSxcbiAgICAgICAgODZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTMsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTY2LFxuICAgICAgICAxNjAsXG4gICAgICAgIDcxLFxuICAgICAgICAxNixcbiAgICAgICAgMjUyLFxuICAgICAgICA0OCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxOCxcbiAgICAgICAgOSxcbiAgICAgICAgODUsXG4gICAgICAgIDczLFxuICAgICAgICAxNzcsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNDEsXG4gICAgICAgIDgxLFxuICAgICAgICA3MyxcbiAgICAgICAgMjE5LFxuICAgICAgICA4OCxcbiAgICAgICAgNCxcbiAgICAgICAgMzEsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjAzLFxuICAgICAgICAxNTIsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTYyLFxuICAgICAgICAxMjEsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNDYsXG4gICAgICAgIDY5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxOTIsXG4gICAgICAgIDExLFxuICAgICAgICA2NixcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMzksXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTY1LFxuICAgICAgICAxMzEsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjM1LFxuICAgICAgICAyMjQsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTQxLFxuICAgICAgICA5MixcbiAgICAgICAgOTMsXG4gICAgICAgIDQwLFxuICAgICAgICAyMTksXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTUwLFxuICAgICAgICA5NSxcbiAgICAgICAgMixcbiAgICAgICAgMTQyLFxuICAgICAgICA3NixcbiAgICAgICAgNTUsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTkxLFxuICAgICAgICAxNzUsXG4gICAgICAgIDY2LFxuICAgICAgICA2MCxcbiAgICAgICAgOTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICAxNTEsXG4gICAgICAgIDE1LFxuICAgICAgICAxNjMsXG4gICAgICAgIDM1LFxuICAgICAgICA2NyxcbiAgICAgICAgMjA0LFxuICAgICAgICAxNDYsXG4gICAgICAgIDYxLFxuICAgICAgICA5NCxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNjksXG4gICAgICAgIDAsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTIyLFxuICAgICAgICAyNSxcbiAgICAgICAgMTEzLFxuICAgICAgICAxNjIsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMzQsXG4gICAgICAgIDkyLFxuICAgICAgICAyMjMsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjEwLFxuICAgICAgICA0MCxcbiAgICAgICAgMjExLFxuICAgICAgICAxOCxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMTcsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTg5LFxuICAgICAgICA5OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDg5XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE3NixcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICA5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTUsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMzksXG4gICAgICAgIDI1MixcbiAgICAgICAgOTAsXG4gICAgICAgIDE3NSxcbiAgICAgICAgODMsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTgwLFxuICAgICAgICAzNixcbiAgICAgICAgMjEyLFxuICAgICAgICA1MCxcbiAgICAgICAgMTcyLFxuICAgICAgICAxOTMsXG4gICAgICAgIDEzOCxcbiAgICAgICAgODUsXG4gICAgICAgIDMxLFxuICAgICAgICAyLFxuICAgICAgICAxNDMsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjM4LFxuICAgICAgICAzNyxcbiAgICAgICAgMjI1LFxuICAgICAgICAxMzEsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNDAsXG4gICAgICAgIDcsXG4gICAgICAgIDc4LFxuICAgICAgICAxNDUsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjE4LFxuICAgICAgICAyNTQsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTM4LFxuICAgICAgICAyMzMsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyNTUsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTcyLFxuICAgICAgICA5MSxcbiAgICAgICAgMTE0LFxuICAgICAgICA3NSxcbiAgICAgICAgMTczLFxuICAgICAgICA5OSxcbiAgICAgICAgMTExLFxuICAgICAgICAxNixcbiAgICAgICAgNDksXG4gICAgICAgIDM1LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTM3LFxuICAgICAgICAxMjAsXG4gICAgICAgIDE1MixcbiAgICAgICAgNTUsXG4gICAgICAgIDczLFxuICAgICAgICAyMTIsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTE5LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE0OSxcbiAgICAgICAgOTYsXG4gICAgICAgIDEzM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogODUsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiNEhZOXl3R2tLZ0JTcnhVUzR2OUlEditzVEFKbU03bm91NlBPbU1uOW5XRT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwieU4xak5ZT3NTOVd6VVY5ZG9KNG85QVwiLFxuICBcInBob25lSWRcIjogXCJhZmI2NjVmYS0wYjlhLTQzNzMtODg3Yi0xYzM3M2I4ODdjNDNcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTgxLFxuICAgICAgMjgsXG4gICAgICAxNDMsXG4gICAgICAyMjYsXG4gICAgICAxODYsXG4gICAgICAyMDYsXG4gICAgICAxODYsXG4gICAgICAyMDUsXG4gICAgICAxMDgsXG4gICAgICAxOTgsXG4gICAgICAyMjQsXG4gICAgICA4MCxcbiAgICAgIDIzOCxcbiAgICAgIDcwLFxuICAgICAgMTYyLFxuICAgICAgMTMzLFxuICAgICAgODAsXG4gICAgICAxMzQsXG4gICAgICA3MyxcbiAgICAgIDE3NVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMzQsXG4gICAgICAzNCxcbiAgICAgIDEzMyxcbiAgICAgIDIzNixcbiAgICAgIDE5NyxcbiAgICAgIDQxLFxuICAgICAgOTMsXG4gICAgICAyNDksXG4gICAgICAxMjUsXG4gICAgICAzNCxcbiAgICAgIDIzNixcbiAgICAgIDExLFxuICAgICAgMTEzLFxuICAgICAgMTgzLFxuICAgICAgMTg2LFxuICAgICAgMTc5LFxuICAgICAgMTg1LFxuICAgICAgNzIsXG4gICAgICA2LFxuICAgICAgMTMwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjFaTU04RzRSXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MTg3OTg4Nzk1MjQ6OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIuS4reWciyBjaG9vdVwiLFxuICAgIFwibGlkXCI6IFwiMjcyMTM4MjM3OTUyMDYwOjhAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDS3o3bzhJSEVPZkVpcjRHR0FJZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJlaDVkQkwxLzRIUzBQeldIY05XMnBJTGY0VDEzaURlbXRGYVpPeVJZRlFZPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlJHSDA2aFRtRm16YVhNYkNTOUdZYXJrc3cwVGcvQXl4czBPY0wrWGNBS0FWUkFwYS9WQjFPT25ZbDdGekVEUWZwVlg0SmxFd1BBdlF4VWZOR01TSENRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImhmUlh5d0VVc3hKSGxuRTRJcWtPeWxia3JqWWRCT2k2WUc1NktvOEpTSHh5S2F2R2FFem16emwvM1ZBQU84dGhGdmN5bndURFI0YXNUMm40UFhwUGh3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkxODc5ODg3OTUyNDo4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgNlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzQwODA4ODE1LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRmpTXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFGalMuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJxdVIvVmlXeE5LU0pSZHBTVnkyQkpGR0dGVUpQUVBKcndyU1p3aDh5YmtVPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjIwMTgwNDk0NTIsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTc0MDgwNDQyMjMzNlwifSIKfQ==",  // PUT SESSION ID HERE 
  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "private",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "SUHAIL",



};




























global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
 
