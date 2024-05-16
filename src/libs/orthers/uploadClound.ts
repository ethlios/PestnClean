const uploadToCloudinary = async (file: File): Promise<string> => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'e4tvwxf5');
    const res = await fetch(`https://api.cloudinary.com/v1_1/dj2jarcxk/upload`, {
        method: 'POST',
        body: formData,
    });
    const data = await res.json();
    const url = data.url;

    return url;
};

export default uploadToCloudinary;
