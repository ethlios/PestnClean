import { useCallback, useRef } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import useSize from '~/libs/hooks/useSize';
import uploadToCloudinary from '~/libs/orthers/uploadClound';

export interface IAppProps {
    value: string;
    cb: any;
}

export default function QuillEditor({ cb, value }: IAppProps) {
    const reactQuillRef = useRef<any>();
    const { sizeX } = useSize();

    const imageHandler = useCallback(() => {
        const input = document.createElement('input');
        input.setAttribute('type', 'file');
        input.setAttribute('accept', 'image/*');
        input.click();
        input.onchange = async () => {
            if (input !== null && input.files !== null) {
                const file = input.files[0];
                const url = await uploadToCloudinary(file);
                const quill = reactQuillRef.current;
                if (quill) {
                    const range = quill.getEditorSelection();
                    range && quill.getEditor().insertEmbed(range.index, 'image', url);
                }
            }
        };
    }, []);

    return (
        <ReactQuill
            placeholder="Mô tả chi tiết..."
            ref={reactQuillRef}
            theme="snow"
            value={value}
            onChange={cb}
            id="Desciption"
            formats={[
                'header',
                'font',
                'size',
                'color',
                'background',
                'bold',
                'italic',
                'underline',
                'strike',
                'blockquote',
                'list',
                'indent',
                'align',
                'link',
                'image',
                'video',
                'code-block',
            ]}
            modules={{
                toolbar: {
                    container: [
                        [{ header: '1' }, { header: '2' }, { font: [] }],
                        [{ size: [] }],
                        [{ color: [] }, { background: [] }],
                        ['clean'],
                        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
                        [
                            { list: 'ordered' },
                            { list: 'bullet' },
                            { indent: '-1' },
                            { indent: '+1' },
                            { align: [] },
                        ],
                        ['link', 'image', 'video'],
                    ],
                    handlers: {
                        image: imageHandler, // <-
                    },
                },
                clipboard: {
                    matchVisual: false,
                },
            }}
            style={{
                height: '520px',
            }}
        />
    );
}
