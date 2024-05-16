import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { clearMessage, deleteImgWork } from '~/redux/actions';
import { RootState } from '~/redux/provider/store';

export interface IAppProps {
    isOpen: boolean;
    isClose: Function;
    imageWorkItem: any;
    messageDeleteSuccess: Function;
}
export default function DialogDelete({ isOpen, isClose, imageWorkItem , messageDeleteSuccess }: IAppProps) {
    const [open, setOpen] = React.useState(false);
    const dispatch = useDispatch();
    const selector = useSelector((state: RootState) => state.main);
    const handleClose = () => {
        setOpen(false);
        isClose(false);
    };

    const deleteImageUploadThing = async (url: string) => {
        try {
            const res = await axios.delete('api/uploadthing/delete', {
                data: {
                    url: url,
                },
            });
            if(res.data && res.data.message === "Success"){
                messageDeleteSuccess(true);
            }
        } catch (error) {
            // Xử lý lỗi ở đây
            console.error('Đã xảy ra lỗi khi xóa tệp:', error);
        }
    };

    const handleDelete = () => {
        console.log(imageWorkItem);
        if (imageWorkItem) {
            dispatch(
                deleteImgWork({
                    id: imageWorkItem.id,
                }),
            );
        }
    };

    React.useEffect(() => {
        if(selector.message === "Xóa imgWork thành công"){
            setOpen(false);
            isClose(false);
            deleteImageUploadThing(imageWorkItem.img);
            dispatch(clearMessage());
        }
    },[selector.message]);

    React.useEffect(() => {
        if (isOpen) {
            setOpen(true);
        } else {
            setOpen(false);
        }
    }, [isOpen]);

    return (
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">
                <div className="font-system font-bold text-lg">Bạn có chắc chắn xóa hình ảnh này?</div>
            </DialogTitle>
            <DialogActions>
                <Button onClick={handleClose}>
                    <div className="font-system text-xs font-semibold">Không đồng ý</div>
                </Button>
                <Button onClick={handleDelete} autoFocus>
                    <div className="font-system text-xs font-semibold">Đồng ý</div>
                </Button>
            </DialogActions>
        </Dialog>
    );
}
