import { toast } from 'react-toastify';
import { ToastOptions } from "react-toastify";
export const customToast = ({ type, position, autoClose, limit, toastMessage}: any) => {

    const toastOptions: ToastOptions<any> = {
        position: position,
        autoClose: autoClose,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light"
    };

    (toastOptions as any).limit = limit;

    switch (type) {
        case 'info':
            toast.info(toastMessage, toastOptions);
            break;
        case 'success':
            toast.success(toastMessage, toastOptions);
            break;
        case 'warning':
            toast.warning(toastMessage, toastOptions);
            break;
        case 'error':
            toast.error(toastMessage, toastOptions);
            break;
        default:
            break;
    }
};
