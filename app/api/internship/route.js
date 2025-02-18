import { NextResponse } from 'next/server';
import { google } from 'googleapis';

export async function POST(req) {
    try {
        const { name, email, phone, highesteducation, collegename, linkedin, resume, domain } = await req.json();
        let sheetID = "";
        if (domain === "VAPT") {
            sheetID = process.env.GOOGLE_SHEET_ID_VAPT;
        } else if (domain === "REDTEAMING") {
            sheetID = process.env.GOOGLE_SHEET_ID_REDTEAMING;
        } else if (domain === "GRC") {
            sheetID = process.env.GOOGLE_SHEET_ID_GRC;
        } else if (domain === "IAM") {
            sheetID = process.env.GOOGLE_SHEET_ID_IAM;
        } else {
            sheetID = process.env.GOOGLE_SHEET_ID_CYBERSECURITY;
        }

        const auth = new google.auth.GoogleAuth({
            credentials: {
                client_email: process.env.GOOGLE_CLIENT_EMAIL,
                private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n')
            },
            scopes: [
                'https://www.googleapis.com/auth/drive',
                'https://www.googleapis.com/auth/drive.file',
                'https://www.googleapis.com/auth/spreadsheets'
            ]
        });

        const sheets = google.sheets({ auth, version: 'v4' });

        await sheets.spreadsheets.values.append({
            spreadsheetId: sheetID,
            range: 'A1:G1',
            valueInputOption: 'USER_ENTERED',
            requestBody: {
                values: [[name, email, phone, highesteducation, collegename, linkedin, resume]]
            }
        });

        const response = NextResponse.json({ message: 'Successfully sent form data' });
        response.headers.set("Cache-Control", "no-store, no-cache, must-revalidate, proxy-revalidate");
        return response;
    } catch (error) {
        const response = NextResponse.json({ message: 'Unable to send form data' }, { status: 500 });
        response.headers.set("Cache-Control", "no-store, no-cache, must-revalidate, proxy-revalidate");
        return response;
    }
}