import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req) {
    try {
        const { username, email, message } = await req.json();

        const sender = {
            name: 'Mukesh Kumar',
            address: 'tech@hakxcore.io'
        };

        const recipients = [
            'support@hakxcore.io',
            'help@hakxcore.io',
            'mukeshkumarcharak@gmail.com',
            'hakxcore@gmail.com'
        ];

        const transport = nodemailer.createTransport({
            host: process.env.MAIL_HOST,
            port: process.env.MAIL_PORT,
            secure: true,
            auth: {
                user: process.env.MAIL_USER,
                pass: process.env.MAIL_PASSWORD
            }
        });

        const mailOptions = {
            from: sender,
            to: recipients,
            subject: 'New Contact Form Submission',
            html: `<p>Name: ${username}</p>
                   <p>Email: ${email}</p>
                   <p>Message: ${message}</p>`
        };

        await transport.sendMail(mailOptions);

        const response = NextResponse.json({ message: 'Successfully sent mail' });
        response.headers.set("Cache-Control", "no-store, no-cache, must-revalidate, proxy-revalidate");
        return response;
    } catch (error) {
        const response = NextResponse.json({ message: 'Unable to send mail' }, { status: 500 });
        response.headers.set("Cache-Control", "no-store, no-cache, must-revalidate, proxy-revalidate");
        return response;
    }
}