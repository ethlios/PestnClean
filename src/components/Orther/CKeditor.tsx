import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
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
                editor={ClassicEditor}
                data={value}
                onChange={(event, editor) => {
                    const data = editor.getData();
                    cb(data);
                }}
                disabled={readOnly}
                config={{
                    extraPlugins: [MyCustomUploadAdapterPlugin],
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
