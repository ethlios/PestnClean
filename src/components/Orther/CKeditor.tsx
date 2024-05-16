import { CKEditor } from '@ckeditor/ckeditor5-react';
import DecoupledEditor from '@ckeditor/ckeditor5-build-decoupled-document';
import uploadToCloudinary from '~/libs/orthers/uploadClound';

export interface IAppProps {
    value: string;
    cb?: any;
    readOnly?: boolean;
}

function MyCustomUploadAdapterPlugin(editor: any) {
    editor.plugins.get('FileRepository').createUploadAdapter = (loader: any) => {
        return new CloudinaryUploadAdapter(loader);
    };
}

export default function CKeditor({ cb, value, readOnly }: IAppProps) {
    return (
        <div className={'ql-editor'}>
            <CKEditor
                editor={DecoupledEditor}
                data={value}
                onChange={(event, editor) => {
                    const data = editor.getData();
                    cb(data);
                }}
                disabled={readOnly}
                config={{
                    extraPlugins: [MyCustomUploadAdapterPlugin],
                    heading: {
                        options: [
                            { model: 'paragraph', title: 'Paragraph', class: 'ck-heading_paragraph' },
                            {
                                model: 'heading2',
                                view: 'h2',
                                title: 'Heading 2',
                                class: '',
                            },
                            {
                                model: 'heading3',
                                view: 'h3',
                                title: 'Heading 3',
                                class: '',
                            },
                            {
                                model: 'heading4',
                                view: 'h4',
                                title: 'Heading 4',
                                class: '',
                            },
                        ],
                    },
                }}
                onReady={(editor) => {
                    editor.ui
                        .getEditableElement()
                        ?.parentElement?.insertBefore(
                            editor.ui.view.toolbar.element as Node,
                            editor.ui.getEditableElement() as Node,
                        );
                }}
            />
        </div>
    );
}

export class CloudinaryUploadAdapter {
    loader: any;

    constructor(loader: any) {
        this.loader = loader;
    }

    upload() {
        return this.loader.file.then(
            (file: any) =>
                new Promise((resolve, reject) => {
                    uploadToCloudinary(file)
                        .then((response) => {
                            resolve({ default: response });
                        })
                        .catch(reject);
                }),
        );
    }
}
