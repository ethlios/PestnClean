import classNames from 'classnames';
import { useSession } from 'next-auth/react';
import React, { useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getEmail } from '~/redux/actions';
import { RootState } from '~/redux/provider/store';
import styles from "./page.module.scss";
export interface IAppProps {}

export default function AdminEmail(props: IAppProps) {
    const dispatch = useDispatch();
    const cx = classNames.bind(styles);
    const selector = useSelector((state : RootState) => state.main);
    const session = useSession();
    
    useEffect(() => {
        if(session.data?.user?.id && !selector.emails.length) {
            dispatch(getEmail({ id: session.data?.user?.id}))
        }
    }, [session.data?.user?.id, dispatch, selector.emails.length]);
    

    const handleLClickBtn = () => {
        if(selector.emails.length > 0){
            let str = '';
            let emails = selector.emails;
            const email = emails.map((email) => {
                return (str += `${email.email} `);
            });
            navigator.clipboard.writeText(email[email.length - 1]);
        }
    }
    return (
        <div>
            <button 
                className={cx('')}
                type='button'
                onClick={handleLClickBtn}>
                Coppy
            </button>
        </div>
    );
}
