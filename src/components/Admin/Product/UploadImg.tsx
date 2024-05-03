import React, { useRef, useState } from 'react';
import { UploadButton } from '~/utils/uploadthing';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';

export interface IAppProps {
    imageList: String[];
    setImageList: any;
}

export default function UploadImgProduct({ imageList, setImageList }: IAppProps) {
    const fileRef = useRef<any>();
    const [imgIndex, setImgIndex] = useState<number>(-1);

    const handleDeleteImg = (ind: number) => {
        const newList = imageList.filter((image) => {
            return image !== imageList[ind];
        });
        setImageList(newList);
    };

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

                        setImageList((prev: any) => [...prev, res[0].url]);
                        // alert('Upload Completed');
                    }}
                    onUploadError={(error: Error) => {
                        // Do something with the error.
                        alert(`ERROR! ${error.message}`);
                    }}
                />
            </div>
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
            >
                Hình ảnh
            </button>
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
                {imageList.length > 0 &&
                    imageList.map((item, index) => {
                        return (
                            <div
                                key={index}
                                style={{
                                    backgroundImage: `url(${item})`,
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
                                    setImgIndex(index);
                                }}
                            >
                                {imgIndex === index && (
                                    <>
                                        <div
                                            style={{
                                                width: '100%',
                                                height: '100%',
                                                position: 'absolute',
                                                backgroundColor: 'rgba(0,0,0,0.5)',
                                            }}
                                            onClick={() => setImgIndex(-1)}
                                        ></div>
                                        <RemoveOutlinedIcon
                                            onClick={() => handleDeleteImg(index)}
                                            style={{
                                                color: '#fff',
                                                zIndex: 10,
                                            }}
                                        />
                                    </>
                                )}
                            </div>
                        );
                    })}
            </div>
        </div>
    );
}
