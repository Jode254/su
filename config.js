const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


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

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_07_37_11_19_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAyNTQsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNTksXG4gICAgICAgIDM2LFxuICAgICAgICAxODMsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAzMixcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMjUsXG4gICAgICAgIDIsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMyxcbiAgICAgICAgNixcbiAgICAgICAgNDAsXG4gICAgICAgIDc0LFxuICAgICAgICAxNCxcbiAgICAgICAgNTksXG4gICAgICAgIDQ0LFxuICAgICAgICAwLFxuICAgICAgICAxMDYsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTI4LFxuICAgICAgICAxNjEsXG4gICAgICAgIDEyMyxcbiAgICAgICAgOCxcbiAgICAgICAgMTkxLFxuICAgICAgICAyMjcsXG4gICAgICAgIDcxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg2LFxuICAgICAgICA5MixcbiAgICAgICAgMTU2LFxuICAgICAgICAyNyxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMjYsXG4gICAgICAgIDE3NixcbiAgICAgICAgOCxcbiAgICAgICAgNjIsXG4gICAgICAgIDc3LFxuICAgICAgICA0NixcbiAgICAgICAgODEsXG4gICAgICAgIDIyMyxcbiAgICAgICAgOTcsXG4gICAgICAgIDc4LFxuICAgICAgICA2OSxcbiAgICAgICAgMTAxLFxuICAgICAgICAxMDIsXG4gICAgICAgIDE0MSxcbiAgICAgICAgOTQsXG4gICAgICAgIDU2LFxuICAgICAgICA1NCxcbiAgICAgICAgNzQsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNDIsXG4gICAgICAgIDEwMixcbiAgICAgICAgNDMsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTQyLFxuICAgICAgICAyMjYsXG4gICAgICAgIDE1NixcbiAgICAgICAgODdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwic

HJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzNixcbiAgICAgICAgMzcsXG4gICAgICAgIDgzLFxuICAgICAgICAxNDQsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMjAsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNjEsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTU5LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNjEsXG4gICAgICAgIDExOCxcbiAgICAgICAgNTksXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTY5LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE4LFxuICAgICAgICAxOTMsXG4gICAgICAgIDEyNixcbiAgICAgICAgMzQsXG4gICAgICAgIDI4LFxuICAgICAgICA4LFxuICAgICAgICAyNDAsXG4gICAgICAgIDExMixcbiAgICAgICAgMTAzLFxuICAgICAgICAyMTcsXG4gICAgICAgIDg5LFxuICAgICAgICAxMzUsXG4gICAgICAgIDc3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDUzLFxuICAgICAgICAyMDIsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTA1LFxuICAgICAgICA1NixcbiAgICAgICAgMjI5LFxuICAgICAgICAxMCxcbiAgICAgICAgNTgsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTc0LFxuICAgICAgICAyMTcsXG4gICAgICAgIDIyNixcbiAgICAgICAgNDMsXG4gICAgICAgIDE2LFxuICAgICAgICAxODgsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjExLFxuICAgICAgICAyNDcsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTE4LFxuICAgICAgICA5NixcbiAgICAgICAgMTUzLFxuICAgICAgICA5MSxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjE0LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTE0LFxuICAgICAgICAxLFxuICAgICAgICAxN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgX

CJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICA2NyxcbiAgICAgICAgNTAsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTc5LFxuICAgICAgICAxNjUsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTc2LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjEyLFxuICAgICAgICA2MCxcbiAgICAgICAgOTcsXG4gICAgICAgIDI0LFxuICAgICAgICAxNTgsXG4gICAgICAgIDMzLFxuICAgICAgICAxMyxcbiAgICAgICAgMTM0LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMSxcbiAgICAgICAgMTYzLFxuICAgICAgICA5MixcbiAgICAgICAgODksXG4gICAgICAgIDExOCxcbiAgICAgICAgMjQwLFxuICAgICAgICA4OCxcbiAgICAgICAgMTc0LFxuICAgICAgICAyNTEsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTc4LFxuICAgICAgICA3OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODYsXG4gICAgICAgIDEzNCxcbiAgICAgICAgODMsXG4gICAgICAgIDE4LFxuICAgICAgICAyMDIsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjA3LFxuICAgICAgICAzOSxcbiAgICAgICAgMTE3LFxuICAgICAgICA0LFxuICAgICAgICAxODgsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjIzLFxuICAgICAgICAxNTEsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTIzLFxuICAgICAgICAyMTUsXG4gICAgICAgIDk2LFxuICAgICAgICAyMTksXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTk3LFxuICAgICAgICAyMjIsXG4gICAgICAgIDY0LFxuICAgICAgICAyMzMsXG4gICAgICAgIDk2LFxuICAgICAgICAzLFxuICAgICAgICAxMjUsXG4gICAgICAgIDc2LFxuICAgICAgICA0NSxcbiAgICAgICAgMzYsXG4gICAgICAgIDE3LFxuICAgICAgICA3NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4OCxcbiAgICA

gICAgICAyNTEsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxMTRcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAzMixcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAyM1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gIC

AgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDc4LFxuICAgICAgICAxOTIsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTgxLFxuICAgICAgICAyNTEsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjQsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNTgsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTU0LFxuICAgICAgICAxNzIsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNTYsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMDksXG4gICAgICAgIDE5MCxcbiAgICAgICAgODMsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMzgsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNDMsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNTQsXG4gICAgICAgIDk3LFxuICAgICAgICAxMjcsXG4gICAgICAgIDQ1LFxuICAgICAgICAxNzYsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjE2LFxuICAgICAgICAxNzIsXG4gICAgICAgIDk2LFxuICAgICAgICAxNTAsXG4gICAgICAgIDk0LFxuICAgICAgICAxNDgsXG4gICAgICAgIDg3LFxuICAgICAgICA4LFxuICAgICAgICAxNjcsXG4gICAgICAgIDgsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTE2LFxuICAgICAgICAxOTYsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTU5LFxuICAgICAgICAyNTUsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTA0LFxuICAgICAgICAxMzMsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTQsXG4gICAgICAgIDI4LFxuICAgICAgICAxNDIsXG4gICAgICAgIDM3LFxuICAgICAgICAxMzAsXG4gICAgICAgIDk4LFxuICAgICAgICAxMTUsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjIxLFxuICAgICAgICA2MSxcbiAgICAgICAgMzUsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTUsXG4gICAgICAgIDRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE1NyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJ0VTVvR28rSDFrSUVzeEN6V3RRN2FuQ0h6WDM1MGd0TkI1Y3BWTVJnQVdRPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICA

gICAgICBcInJlbW90ZUppZFwiOiBcIjI1NDcyNzI5MzY1MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiNjlDMDkzNzhGQTgxNzlBMTBBOTU4QUY4RTc3NkVGQThcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzMyMDAxODYxXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkg0QmtZUDlhUmthdWVXQVpVUm9QMGdcIixcbiAgXCJwaG9uZUlkXCI6IFwiMTk0YmZlNGEtMDM1Zi00YWQyLTkwYTMtODZkM2Q2NTE4NzYyXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIyNSxcbiAgICAgIDc4LFxuICAgICAgMTE4LFxuICAgICAgODQsXG4gICAgICAyNTQsXG4gICAgICAxMzQsXG4gICAgICAyMTQsXG4gICAgICAxMjcsXG4gICAgICAyMDQsXG4gICAgICAyNDYsXG4gICAgICAyMTEsXG4gICAgICAxODYsXG4gICAgICAyNDQsXG4gICAgICAxMzIsXG4gICAgICAxMSxcbiAgICAgIDI0NyxcbiAgICAgIDE5LFxuICAgICAgMzEsXG4gICAgICA4NCxcbiAgICAgIDMzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI1LFxuICAgICAgMTQzLFxuICAgICAgMTgsXG4gICAgICAxODgsXG4gICAgICA5MixcbiAgICAgIDk0LFxuICAgICAgMjQ4LFxuICAgICAgNjQsXG4gICAgICAxNDAsXG4gICAgICAxNjIsXG4gICAgICAzOCxcbiAgICAgIDYxLFxuICAgICAgMTY3LFxuICAgICAgMjQ1LFxuICAgICAgMTM1LFxuICAgICAgODAsXG4gICAgICAxNDMsXG4gICAgICAzNCxcbiAgICAgIDIwMCxcbiAgICAgIDEwXG4gICAgXVxuICB9LFxu

ICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjUySFNSRjZIXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTQ3MjcyOTM2NTI6MjVAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjg5NTU0OTMzODgzODE6MjVAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDS243MGN3RUVMcUE4YmtHR0FJZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJjdmY2RWNoNGkrSlF3Z0tWeGNhaENmUVFhOUlJZ2JEOTNSKzVBbk5KM1ZNPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImVTQWdUU2I1eUcvd21lNlExMTFRajB3eWtJMTB2MkZ5WmNvalRIY1A0UDJQWGFkRWwvUkpKbDJOK0F1aXh3eEN4Y2I1TEw5OE5lK2FSZDJqWDQrbUN3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjc0Y3JxaWtEWmJKNDF2bC9oejdLeGtyRVdVUkEwUjNhUmhJYkwzU2JYKzJOZXVoRGZBTlI3eFJJZTQrYURXYTc2aHl2RWxqQU44dUQ0TzJhWTJJQ0JnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1NDcyNzI5MzY1MjoyNUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTA3LFxuICAgICAgI

CAgIDIxMCxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDgzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzIwMDE4NTQsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFBdnZcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUF2di5qc29uIjogIntcImtleURhdGFcIjpcIkR0d3VRYjFlcmkvMHM4OW1OVytvaUtBVlJjTkp2a3I4dURGRTN4dEdXSFU9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTIzNDQ2ODI2NSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzMyMDAxMzQ3MjI0XCJ9Igp9
"  // PUT your SESSION_ID 


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
