//nodemailer with hakxcore domain as smtp server

import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';


export async function POST(req){
    try{
        const {username,email,message} = await req.json();

        const sender = {
            name: 'aditya sharma',
            address: 'tech@hakxcore.com'
        }

        const recipients = ['adityasharma.officially01@gmail.com','help@hakxcore.com']

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
            subject: 'Test subject',
            html: `<p>Name: ${username}</p>
                   <p>Email: ${email}</p>
                   <p>Message: ${message}</p>`,
        }

        await transport.sendMail(mailOptions)
        return NextResponse.json({message: 'Successfull to send mail'});
    } catch (error){
        return NextResponse.json({message: 'Unable to send mail'});
    }
}







// this is the sendGrid method of sending mails


// const sgMail = require('@sendgrid/mail');

// sgMail.sendApiKey(process.env.SG_API_KEY);

// export async function POST(req){
//     try{
//         const {username,email,message} = await req.json();
//         const msg = {
//             from: process.env.FROM_EMAIL,
//             to: process.env.TO_EMAIL,
//             subject: 'Test subject',
//             html: `<p>Name: ${username}</p>
//                    <p>Email: ${email}</p>
//                    <p>Message: ${message}</p>`,
//         }
//         await sgMail.send(msg);
//         return NextResponse.json({message: 'Successfull to send mail'});
//     } catch (error){
//         return NextResponse.json({message: 'Unable to send mail'});
//     }
// }




// nodemailer with gmail as smtp server

// import nodemailer from 'nodemailer';
// import { NextResponse } from 'next/server';

// export async function POST(req){
//     try{
//         const {username,email,message} = await req.json();

//         const sender = {
//             name: 'aditya sharma',
//             address: 'help@hakxcore.com'
//         }

//         const recipients = ['adityasharma.officially01@gmail.com']

//         const transport = nodemailer.createTransport({
//             service: 'gmail',
//             host: process.env.MAIL_HOST,
//             port: process.env.MAIL_PORT,
//             secure: false,
//             auth: {
//                 user: process.env.MAIL_USER,
//                 pass: process.env.MAIL_APP_PASSWORD
//             }
//         });
    
//         const mailOptions = {
//             from: sender,
//             to: recipients,
//             subject: 'Test subject',
//             html: `<p>Name: ${username}</p>
//                    <p>Email: ${email}</p>
//                    <p>Message: ${message}</p>`,
//         }
    
    
//         await transport.sendMail(mailOptions)
//         return NextResponse.json({message: 'Successfull to send mail'});
//     }catch (error){
//         return NextResponse.json({message: 'Unable to send mail'});
//     }
// }