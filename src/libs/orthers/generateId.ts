const generateId = () => {
    return Math.floor(Math.random() * 100000000000000).toString();
};

export default generateId;
