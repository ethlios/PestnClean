'use server';

import { ContactFormEmail } from './../components/Admin/Discount/ContactFormEmail';
import { render } from '@react-email/render';
import { transporter } from './createTransport';
export const sendEmail = async (payload: any) => {
    const {data,user} = payload;

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
        from: 'PESTNCLEAN <sender@gmail.com>', // sender address
        to: user.email, // list of receivers
        subject: 'Thông báo mã khuyến mãi', // Subject line
        html: emailHtml, // html body
    });

    return info;
};
