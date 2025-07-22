const { google } = require("googleapis");
const open = require("open");
const readline = require("readline");

const CLIENT_ID = "733411987246-jphm78giiasrdu4mvq8j0a3sim7r3ocs.apps.googleusercontent.com";
const CLIENT_SECRET = "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";
const REDIRECT_URI = "https://developers.google.com/oauthplayground";

const oAuth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);

// Get authorization URL
const SCOPES = ["https://mail.google.com/"];
const authUrl = oAuth2Client.generateAuthUrl({
  access_type: "offline",
  scope: SCOPES,
});
console.log("Authorize this app by visiting this url:", authUrl);
open(authUrl);

// Wait for user to paste code
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.question("Enter the code from that page here: ", async (code) => {
  const { tokens } = await oAuth2Client.getToken(code);
  console.log("Refresh Token:", tokens.refresh_token);
  rl.close();
});
