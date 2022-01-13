(()=> {"use strict";var e=require("crypto"),n=require("base64url"),i=require("fs"),r=Date.now(),t=n(e.randomBytes(64));i.appendFile("./config/app.js","\n//UNIX="+r+"\n//APP_KEY="+t,function(e){if(e)throw e}),i.appendFile(".env","\n#UNIX="+r+"\n#APP_KEY="+t,function(e){if(e)throw e;process.exit(0)})}).call(this);

//UNIX=1642000077924
//APP_KEY=zYNiNTYM4v8-TxvwNkQ5xpDH2oSVdyWP_cvUb0vo5a4YSANVZzPgzqjhfsIUZD2vzUvqkeDIWxIZiDic9XRtVw