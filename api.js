const { google } = require('googleapis');
const { join } = require('path');
const { createReadStream } = require('fs');

const CLIENT_ID = '271762087593-8v8c5fmtf48719m7csr592iphlstmibh.apps.googleusercontent.com';
const CLIENT_SECRET = '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';
const REDIRECT_URL = 'https://developers.google.com/oauthplayground';

const REFRESH_TOKEN = '1//04lS7a7V-8v-2CgYIARAAGAQSNwF-L9IrISi8lZBRaDm7h_soDG7f76_aZa5en7ffaVpnE3-vvnib75VxaTUe6PVi9U6jpr-FPIA';

const oauth2Client = new google.auth.OAuth2(
    CLIENT_ID,
    CLIENT_SECRET,
    REDIRECT_URL
);

oauth2Client.setCredentials({refresh_token: REFRESH_TOKEN});

const drive = google.drive({
    version: 'v3',
    auth: oauth2Client
});

const filePath = join(__dirname, 'images/otherDilyanLopez.jpg');

async function uploadFile() {
    try {
        const response = await drive.files.create({
            requestBody: {
                name: 'DLImage.jpg',
                mimeType: 'image/jpg'
            },
            media: {
                mimeType: 'image/jpg',
                body: createReadStream(filePath)
            }
         })
    
         console.log(response.data);
    } catch (error) {
        console.log(error.message);
    }
}

uploadFile();