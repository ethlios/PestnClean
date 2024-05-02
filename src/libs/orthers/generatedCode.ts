const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

function generateString(length: number) {
    let result = ' ';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
}

const uid = function () {
    return Math.floor(Math.random() * 100000) + '-' + generateString(5).toUpperCase().trim();
};

const uidOrder = function () {
    return (
        Math.floor(Math.random() * 100000) +
        '-' +
        generateString(5).toUpperCase().trim() +
        '-' +
        generateString(5).toUpperCase().trim()
    );
};

export { uid, uidOrder };
