'use server';

import { ContactFormEmail } from './../components/Admin/Discount/ContactFormEmail';
const nodemailer = require("nodemailer");
import { render } from '@react-email/render';
export const sendEmail = async (payload: any) => {
    const {data,user} = payload;
    let transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'info@pestnclean.vn',
            pass: 'cknl ulvm lpxi zggv',
        },
    });

    const emailHtml = render(ContactFormEmail({
        code: data.code,
        dateEnd: data.dateEnd,
        dateStart: data.dateStart,
        description: data.description,
        name: data.name,
        percent: data.percent,
        userName: user.name
    }));

    let info = await transporter.sendMail({
        from: 'PESTNCLEAN <info@pestnclean.vn>', // sender address
        to: user.email, // list of receivers
        subject: 'Thông báo mã khuyến mãi', // Subject line
        html: emailHtml, // html body
    });

    return info;
};
