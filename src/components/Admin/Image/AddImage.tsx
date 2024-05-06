'use client';

import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Image.module.scss';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import images from '~/assets/images';
import { useUploadThing } from '~/utils/uploadthing';
import { ClientUploadedFileData } from 'uploadthing/types';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '~/redux/provider/store';
import { useSession } from 'next-auth/react';
import Toast from '~/components/Orther/Toast';
import { addImgWork } from '~/redux/actions';
import Loader from '~/components/Orther/Loader/Loader';
import { flushAllTraces } from 'next/dist/trace';
const cx = classNames.bind(styles);

export interface IAppProps {
    isOpen: boolean;
    isClose: Function;
    valueUpdate: any;
}

export interface resUploadImage {
    url: string;
    size: Int32Array;
    name: string;
}
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 700,
    bgcolor: 'background.paper',
    boxShadow: 24,
    borderRadius: '5px',
    p: '10px',
};

type EndpointType = 'imageUploader' | 'otherEndpoint';
export default function AdminAddProduct({
    isOpen,
    isClose,
    valueUpdate
}: IAppProps) {
    const [open, setOpen] = useState(false);

    const [files, setFiles] = useState<File[]>([]);
    const [imageURL, setImageURL] = useState<string | null>(null);
    const [selectedOption, setSelectedOption] = useState<string>('Vệ sinh');
    const [loader,setLoader] = useState<boolean>(false);
    const dispatch = useDispatch();
    const session = useSession();
    const selector = useSelector((state: RootState) => state.main);
    
    const handleClose = () => {
        setOpen(false);
        isClose(false);
    };

    const { startUpload } = useUploadThing('imageUploader', {
        onClientUploadComplete: (res: ClientUploadedFileData<null>[]) => {
            if (res && res.length > 0) {
                const { url } = res[0];
                console.log({
                    url: url,
                    authorId: session?.data?.user?.id,
                })
                dispatch(addImgWork({
                    authorId: session?.data?.user.id,
                    img: url,
                    type: selectedOption.trim()
                }));
                setLoader(true);
            } else {
                console.error('No data received after upload.');
            }
        },
        onUploadError: () => {
            console.error('Error occurred while uploading.');
        },
        onUploadBegin: () => {
            console.log('Upload has begun.');
            setLoader(true);
        },
    });
    

    const handleSave = () => {
        if(imageURL !== ""){
            startUpload(files);
        }
    };

    const handleClickChooseImage = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            const selectedFile = event.target.files[0];
            setFiles([selectedFile]);
            const imageURL = URL.createObjectURL(selectedFile); // Tạo URL cho ảnh đã chọn
            setImageURL(imageURL); // Lưu URL vào state
        }
    };

    const handleChangeSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedOption(event.target.value);
    };

    useEffect(() => {
        console.log(selector.message);
        if(selector.message === "Thêm hình ảnh mới thành công"){
            setLoader(false);
            setFiles([]);
            setImageURL("");
            setTimeout(() => {
                setOpen(false);
            },1000);
        }
    },[selector.message])

    useEffect(() => {
        if (isOpen) {
            setOpen(true);
        } else {
            setOpen(false);
        }
    }, [isOpen]);

    useEffect(() => {
        if(valueUpdate){
            setImageURL(valueUpdate.img);
            setSelectedOption(valueUpdate.type);
        }
    },[valueUpdate]);
    return (
        <>
            <Modal
                open={open}
                onClose={handleClose}
                disablePortal
                disableEnforceFocus
                disableAutoFocus
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <div className={cx('wrapper')}>
                        <div className={cx('wrapper-header', 'flex items-center justify-between h-10')}>
                            <p className="font-medium underline">THÊM HÌNH ẢNH</p>
                            <button type="button" onClick={handleClose}>Exit</button>
                        </div>
                        <div className="h-300 flex items-center justify-around mt-1">
                            <div className="w-2/4">
                                <div className={cx('wrapper-content', 'mt-4')}>
                                    <select value={selectedOption} onChange={handleChangeSelect}>
                                        <option className={cx('wrapper-content-option')} value="Vệ sinh">Vệ sinh</option>
                                        <option className={cx('wrapper-content-option')} value="Diệt côn trùng">Diệt côn trùng</option>
                                        <option className={cx('wrapper-content-option')} value="Đào tạo">Đào tạo</option>
                                    </select>
                                    <label htmlFor="upload-button" className="upload-label">
                                        <div className={cx('wrapper-content-choose', 'mt-4')}>Chọn hình ảnh</div>
                                    </label>
                                    <input
                                        id="upload-button"
                                        type="file"
                                        accept="image/*"
                                        onChange={handleClickChooseImage}
                                        style={{ display: 'none' }}
                                    />
                                </div>
                            </div>
                            <div className="w-2/4 p-4 flex items-center justify-center">
                                <img
                                    src={imageURL ? imageURL : images.chooseCamera.src}
                                    alt="Ảnh được chọn"
                                    className={cx('wrapper-img')}
                                />
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <button className={cx('wrapper-btnSubmit', 'mt-6')} onClick={handleSave}>
                                {loader ? <Loader/> : "Thêm hình ảnh"}
                            </button>
                        </div>
                    </div>
                </Box>
            </Modal>
        </>
    );
}
