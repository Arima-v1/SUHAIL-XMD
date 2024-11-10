iconst fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api.kyuurzy.site/api/download/aio" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_01_55_11_10_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjMyLFxuICAgICAgICAxLFxuICAgICAgICAxNzEsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNDgsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTU5LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE3MCxcbiAgICAgICAgOTksXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTYsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNCxcbiAgICAgICAgOTUsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNjQsXG4gICAgICAgIDIsXG4gICAgICAgIDI0LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNCxcbiAgICAgICAgMjI0LFxuICAgICAgICAyNDcsXG4gICAgICAgIDMsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjAxLFxuICAgICAgICAwLFxuICAgICAgICAxMTRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDIwLFxuICAgICAgICA1MSxcbiAgICAgICAgNjIsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTM4LFxuICAgICAgICAxODYsXG4gICAgICAgIDE0NSxcbiAgICAgICAgOTIsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjAxLFxuICAgICAgICAxNjAsXG4gICAgICAgIDQ5LFxuICAgICAgICA5OCxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMTMsXG4gICAgICAgIDQ1LFxuICAgICAgICA0NCxcbiAgICAgICAgMTAxLFxuICAgICAgICAxMjYsXG4gICAgICAgIDczLFxuICAgICAgICAyMzgsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTkxLFxuICAgICAgICAyMjEsXG4gICAgICAgIDgxLFxuICAgICAgICA5LFxuICAgICAgICA0MSxcbiAgICAgICAgMjExLFxuICAgICAgICAxMjUsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTI2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4OCxcbiAgICAgICAgOTksXG4gICAgICAgIDIzNSxcbiAgICAgICAgNDIsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE0NyxcbiAgICAgICAgODgsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMzEsXG4gICAgICAgIDEwLFxuICAgICAgICAxMTMsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTAsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjYsXG4gICAgICAgIDE0LFxuICAgICAgICAwLFxuICAgICAgICAyNDQsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMzEsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNzMsXG4gICAgICAgIDg4LFxuICAgICAgICAyNDYsXG4gICAgICAgIDQ2LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxLFxuICAgICAgICA3OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODAsXG4gICAgICAgIDYwLFxuICAgICAgICAyMjUsXG4gICAgICAgIDg1LFxuICAgICAgICAxNTgsXG4gICAgICAgIDI4LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTU4LFxuICAgICAgICA1NCxcbiAgICAgICAgNDcsXG4gICAgICAgIDI3LFxuICAgICAgICA5OSxcbiAgICAgICAgNDYsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMDEsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTMxLFxuICAgICAgICA2MixcbiAgICAgICAgMjQ0LFxuICAgICAgICA4NCxcbiAgICAgICAgMTU5LFxuICAgICAgICAxNDIsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTM0LFxuICAgICAgICA0MixcbiAgICAgICAgMzcsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNCxcbiAgICAgICAgMTAxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzMixcbiAgICAgICAgMjcsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjM2LFxuICAgICAgICAxNzUsXG4gICAgICAgIDIwLFxuICAgICAgICAxMTEsXG4gICAgICAgIDU1LFxuICAgICAgICAxMzcsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTAyLFxuICAgICAgICAzOSxcbiAgICAgICAgMTE0LFxuICAgICAgICAyMTYsXG4gICAgICAgIDY0LFxuICAgICAgICAzMixcbiAgICAgICAgMTYyLFxuICAgICAgICAxMzYsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTc2LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjAxLFxuICAgICAgICAyNTIsXG4gICAgICAgIDU0LFxuICAgICAgICAyMzksXG4gICAgICAgIDEwLFxuICAgICAgICAxNSxcbiAgICAgICAgMTgxLFxuICAgICAgICAxMjMsXG4gICAgICAgIDExNixcbiAgICAgICAgMTExXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwNixcbiAgICAgICAgMjA1LFxuICAgICAgICAxOTIsXG4gICAgICAgIDMyLFxuICAgICAgICAxNjUsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNjgsXG4gICAgICAgIDQxLFxuICAgICAgICAxNCxcbiAgICAgICAgMjMwLFxuICAgICAgICAyNTEsXG4gICAgICAgIDY5LFxuICAgICAgICA2LFxuICAgICAgICAxNzgsXG4gICAgICAgIDIwOCxcbiAgICAgICAgODEsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTY2LFxuICAgICAgICA4OCxcbiAgICAgICAgMzQsXG4gICAgICAgIDI3LFxuICAgICAgICA3OSxcbiAgICAgICAgMTc0LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMzAsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjcsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTY5LFxuICAgICAgICA0MCxcbiAgICAgICAgMjJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxMTNcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDEyMVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzLFxuICAgICAgICA4MyxcbiAgICAgICAgMzYsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTA4LFxuICAgICAgICAyNDgsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTkxLFxuICAgICAgICAyMjUsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNDksXG4gICAgICAgIDg5LFxuICAgICAgICA3NCxcbiAgICAgICAgNDQsXG4gICAgICAgIDYwLFxuICAgICAgICAxODEsXG4gICAgICAgIDgyLFxuICAgICAgICAyOSxcbiAgICAgICAgMTcxLFxuICAgICAgICAyMDAsXG4gICAgICAgIDQ1LFxuICAgICAgICA1MixcbiAgICAgICAgMTMzLFxuICAgICAgICAxNTksXG4gICAgICAgIDE4NSxcbiAgICAgICAgNjMsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTEsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTM0LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjAsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTQwLFxuICAgICAgICA1NCxcbiAgICAgICAgMSxcbiAgICAgICAgMzEsXG4gICAgICAgIDU4LFxuICAgICAgICAxNixcbiAgICAgICAgMTY3LFxuICAgICAgICAxNDQsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjAwLFxuICAgICAgICAxMDUsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTkxLFxuICAgICAgICAxMzAsXG4gICAgICAgIDM3LFxuICAgICAgICA5OSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMSxcbiAgICAgICAgMjEwLFxuICAgICAgICA3NSxcbiAgICAgICAgNzQsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjAyLFxuICAgICAgICAyMzQsXG4gICAgICAgIDE3LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTE3LFxuICAgICAgICA4XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNTIsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwicDhYL0FQdXRTK05zZ09wOHJiV2lkdjM2eFhZaTBLdnR1Y2xZZWdmZHZYRT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiV0JjMW1wX1dSNXFiS3EwUkFIdDUtQVwiLFxuICBcInBob25lSWRcIjogXCIyYjkyMjA3Zi1hYTQzLTQyZTAtYmI1YS1lZTE1ZmJkNTJiYWRcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTI5LFxuICAgICAgMTMsXG4gICAgICAxNDksXG4gICAgICAyMzIsXG4gICAgICAxMzMsXG4gICAgICA0MixcbiAgICAgIDI1MCxcbiAgICAgIDIxMyxcbiAgICAgIDI0MCxcbiAgICAgIDYzLFxuICAgICAgMTY5LFxuICAgICAgNDUsXG4gICAgICAyNSxcbiAgICAgIDExOCxcbiAgICAgIDkzLFxuICAgICAgMTYwLFxuICAgICAgMjQwLFxuICAgICAgNSxcbiAgICAgIDIxMyxcbiAgICAgIDI1NFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA4MSxcbiAgICAgIDIzNSxcbiAgICAgIDEwNixcbiAgICAgIDE0MSxcbiAgICAgIDExOSxcbiAgICAgIDE3NCxcbiAgICAgIDIyMSxcbiAgICAgIDI4LFxuICAgICAgMjA2LFxuICAgICAgMTQzLFxuICAgICAgMTg5LFxuICAgICAgMTgsXG4gICAgICAxMDcsXG4gICAgICAxODgsXG4gICAgICAxMTMsXG4gICAgICAyMzQsXG4gICAgICA3NixcbiAgICAgIDY3LFxuICAgICAgMjQ0LFxuICAgICAgMTE1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIk1CM0NaRFoyXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMjUwNzk5Njg0ODE4OjlAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE4NzkwNTMzOTMxMDE0OTo5QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ1BtLzQ3VUdFSjZsd0xrR0dBSWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwibXlSRkNyYUlvNWtBMm45eWVuMUFrL0dpQTRMNFhIM0VHTHZxeXJtd3NsOD1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCI0Y1I5T2hubDVwOFZyNmhUQzZJYkswWG1LZjBGQzYybUdSU3FWM1hmVXJ4TTg3MnoySXQ5c2UrZ2NXdk1mNWhLSVdLQWpIdjVZV2gwQmRKTENoaG1DZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJmSUcrdCtPSU51RTZJUUdDWDVBdXM0NVJMV3J1ZmRDYUtWM2h5VGlBYlBOY01oWEpwNnViT2NheGtURXkremRKY3prczRrL0Q1SkN5d2s3akZMT0lBUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMjUwNzk5Njg0ODE4OjlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAzLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICA5NVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiaXBob25lXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzEyMDM3NDcsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFPTHpcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU9Mei5qc29uIjogIntcImtleURhdGFcIjpcInNEWlhMa0IwNHd5cE5xeEUxWFdEd2RORk9BOWFJeWNVZmJYZFR0c1dBTzA9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTcyMzM5MTk5MyxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzEsMF19LFwidGltZXN0YW1wXCI6XCIxNzMxMjAyNDM2MjQ5XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
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
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
