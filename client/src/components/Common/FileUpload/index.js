import React from 'react';
import { Upload, message } from 'antd';
import { InboxOutlined } from '@ant-design/icons';

const { Dragger } = Upload;

const FileUpload = (props) => {
    return (
        <React.Fragment>
            <Dragger listType='picture' action="/api/book/uploadImage" onChange={(image) => props.uploadImageHandler(image)}>
                <p className="ant-upload-drag-icon">
                    <InboxOutlined />
                </p>
                <p className="ant-upload-text">Click or drag images to this area to upload</p>
                <p className="ant-upload-hint">
                    Support for a single or bulk upload. Strictly prohibit from uploading company data or other
                    band files
      </p>
            </Dragger>
        </React.Fragment>
    );
}

export default FileUpload;
