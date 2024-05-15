import React, { useEffect, useRef, useState } from 'react';
import { UploadButton } from '~/utils/uploadthing';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import { arrToStr } from '~/libs/orthers/removeImg';

export interface IAppProps {
    imageList: String;
    setImageList: any;
}

export default function UploadImgProduct({ imageList, setImageList }: IAppProps) {
    const fileRef = useRef<any>();
    const [imgIndex, setImgIndex] = useState<boolean>(false);

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            <div
                ref={fileRef}
                style={{
                    display: 'none',
                }}
            >
                <UploadButton
                    endpoint="imageUploader"
                    onClientUploadComplete={(res: any) => {
                        // Do something with the response
                        setImageList(res[0].url);
                    }}
                    onUploadError={(error: Error) => {
                        // Do something with the error.
                        alert(`ERROR! ${error.message}`);
                    }}
                />
            </div>
            {!imageList && (
                <button
                    style={{
                        width: '100%',
                        borderRadius: '10px',
                        padding: '10px 40px',
                        fontWeight: '600',
                        fontSize: '13px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        border: 'solid 1.5px #000',
                    }}
                    className="opacity"
                    onClick={() => fileRef.current.firstChild.childNodes[0].click()}
                    type="button"
                >
                    Hình ảnh
                </button>
            )}
            {!!imageList && (
                <div
                    style={{
                        display: 'flex',
                        flex: 1,
                        flexWrap: 'wrap',
                        flexDirection: 'row',
                        gap: '10px',
                        marginTop: '10px',
                    }}
                >
                    <div
                        style={{
                            backgroundImage: `url(${imageList})`,
                            backgroundPosition: 'center',
                            backgroundSize: 'cover',
                            width: '60px',
                            height: '60px',
                            cursor: 'pointer',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            fontSize: '18px',
                            position: 'relative',
                        }}
                        onClick={(e) => {
                            e.stopPropagation();
                            setImgIndex(true);
                        }}
                    >
                        {imgIndex && (
                            <>
                                <div
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        position: 'absolute',
                                        backgroundColor: 'rgba(0,0,0,0.5)',
                                    }}
                                    onClick={() => setImgIndex(false)}
                                ></div>
                                <RemoveOutlinedIcon
                                    onClick={() => setImageList('')}
                                    style={{
                                        color: '#fff',
                                        zIndex: 10,
                                    }}
                                />
                            </>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}
