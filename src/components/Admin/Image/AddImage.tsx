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
import { addImgWork, clearMessage, updateImgWork } from '~/redux/actions';
import Loader from '~/components/Orther/Loader/Loader';
import axios from 'axios';
const cx = classNames.bind(styles);

export interface IAppProps {
    isOpen: boolean;
    isClose: Function;
    valueUpdate: any;
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

export default function AdminAddProduct({ isOpen, isClose, valueUpdate }: IAppProps) {
    const [open, setOpen] = useState(false);
    const [files, setFiles] = useState<File[]>([]);
    const [imageURL, setImageURL] = useState<string | null>(null);
    const [selectedOption, setSelectedOption] = useState('');
    const [isClicked, setIsClicked] = useState(false);
    const [loader, setLoader] = useState<boolean>(false);
    const dispatch = useDispatch();
    const session = useSession();
    const selector = useSelector((state: RootState) => state.main);

    const handleClose = () => {
        setOpen(false);
        isClose(false);
        resetValue();
    };

    const { startUpload } = useUploadThing('imageUploader', {
        onClientUploadComplete: (res: ClientUploadedFileData<null>[]) => {
            console.log(res);
            if (res && res.length > 0) {
                const { url } = res[0];
                if(valueUpdate?.id){
                    dispatch(updateImgWork({
                        id: valueUpdate.id,
                        authorId: session?.data?.user.id,
                        img: url,
                        type: selectedOption.trim(),
                    }));
                } else {
                    dispatch(
                        addImgWork({
                            authorId: session?.data?.user.id,
                            img: url,
                            type: selectedOption.trim(),
                        }),
                    );
                }
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
        if (imageURL !== '' && selectedOption !== '') {
            if(valueUpdate?.id){
                if(files.length === 0){
                    dispatch(updateImgWork({
                        id: valueUpdate.id,
                        authorId: session?.data?.user.id,
                        img: valueUpdate.img,
                        type: selectedOption.trim(),
                    }));
                    setLoader(true);
                } else {
                    startUpload(files);
                }
            } else {
                startUpload(files);
                setIsClicked(true);
            }
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

    const deleteImageUploadThing = async (url: string) => {
        try {
            const res = await axios.delete('api/uploadthing/delete', {
                data: {
                    url: url,
                },
            });
            if(res.data && res.data.message === "Success"){
                resetValue();
            }
        } catch (error) {
            // Xử lý lỗi ở đây
            console.error('Đã xảy ra lỗi khi xóa tệp:', error);
        }
    };

    const handleChangeSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedOption(event.target.value);
    };

    const resetValue = () => {
        setLoader(false);
        setIsClicked(false);
        setOpen(false);
        isClose(false);
        setImageURL('');
        setFiles([]);
        dispatch(clearMessage());
    }

    useEffect(() => {
        if (selector.message === 'Thêm hình ảnh mới thành công') {
            resetValue();
        } else if(selector.message === 'Cập nhập hình ảnh thành công') {
            console.log(files.length === 0);
            if(files.length === 0){
                resetValue();
                
            } else {
                deleteImageUploadThing(valueUpdate.img);
            }
        }
    }, [selector.message]);

    useEffect(() => {
        if (isOpen) {
            setOpen(true);
            setSelectedOption('Vệ sinh');
            setIsClicked(false);
        } else {
            setOpen(false);
        }
    }, [isOpen]);

    useEffect(() => {
        if (valueUpdate) {
            setImageURL(valueUpdate.img);
            setSelectedOption(valueUpdate.type);
            setIsClicked(false);
        }
    }, [valueUpdate]);
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
                            <button type="button" onClick={handleClose}>
                                Exit
                            </button>
                        </div>
                        <div className="h-300 flex items-center justify-around mt-1">
                            <div className="w-2/4">
                                <div className={cx('wrapper-content', 'mt-4')}>
                                    <select value={selectedOption} onChange={handleChangeSelect}>
                                        <option className={cx('wrapper-content-option')} value="Vệ sinh">
                                            Vệ sinh
                                        </option>
                                        <option
                                            className={cx('wrapper-content-option')}
                                            value="Diệt côn trùng"
                                        >
                                            Diệt côn trùng
                                        </option>
                                        <option className={cx('wrapper-content-option')} value="Đào tạo">
                                            Đào tạo
                                        </option>
                                    </select>
                                    <label htmlFor="upload-button" className="upload-label">
                                        <div className={cx('wrapper-content-choose', 'mt-4')}>
                                            Chọn hình ảnh
                                        </div>
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
                                    loading="lazy"
                                    src={imageURL ? imageURL : images.chooseCamera.src}
                                    alt="Ảnh được chọn"
                                    className={cx('wrapper-img')}
                                />
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <button
                                className={cx('wrapper-btnSubmit', 'mt-6')}
                                onClick={handleSave}
                                disabled={isClicked}
                            >
                                {loader ? (
                                    <Loader />
                                ) : valueUpdate?.id ? (
                                    'Chỉnh sửa hình ảnh'
                                ) : (
                                    'Thêm hình ảnh'
                                )}
                            </button>
                        </div>
                    </div>
                </Box>
            </Modal>
        </>
    );
}
