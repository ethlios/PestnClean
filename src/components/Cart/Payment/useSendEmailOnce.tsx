import { useRef } from 'react';
import { sendEmailOrder } from '~/actions/sendEmailOrder';

 const useSendEmailOnce = (formData: any, cartOrder: any[], isConnected: boolean,payment: number) => {
    const hasSentEmail = useRef(false);

    const sendEmail = async () => {
        if (!hasSentEmail.current && formData && cartOrder && cartOrder.length > 0 && isConnected) {
            hasSentEmail.current = true;
            return await sendEmailOrder({ data: formData, cart: cartOrder , payment: payment });
        }
    };

    return sendEmail;
};
export default useSendEmailOnce;