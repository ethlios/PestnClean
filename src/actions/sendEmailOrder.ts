'use server';

import FormEmailOrders from '~/components/Cart/Payment/FormEmailOrder';
import { render } from '@react-email/render';
import { transporter } from './createTransport';
export const sendEmailOrder = async (payload: any) => {
    const { data, cart , payment } = payload;

    const emailHtml = render(
        FormEmailOrders({
            cart: cart,
            address: data.address,
            city: data.city,
            district: data.district,
            email: data.email,
            messages: data.message,
            name: data.name,
            phone: data.phone,
            ward: data.ward,
            payment: payment
        }),
    );

    let info = await transporter.sendMail({
        from: 'PESTNCLEAN <sender@gmail.com>', // sender address
        to: data.email, // list of receivers
        subject: 'Bạn vừa đặt hàng thành công tại PestnClean', // Subject line
        html: emailHtml, // html body
    });

    return info;
};
