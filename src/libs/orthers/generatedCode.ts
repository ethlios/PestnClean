const { v4: uuidv4 } = require('uuid');

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

// TẠO CODE CHO DIS COUNT
// Hàm kiểm tra mã code đã tồn tại hay chưa
const isCodeExist = (code: string, existingCodes: { code: string }[]): boolean => {
    // Kiểm tra nếu existingCodes là mảng, nếu không trả về false
    if (!Array.isArray(existingCodes)) {
        return false;
    }
    return existingCodes.some((existingCode) => existingCode.code === code);
};

// Hàm tạo mã code ngẫu nhiên và kiểm tra
const generateUniqueCodeInDiscount = (existingCodes: { code: string }[] = []): string => {
    let newCode: string;
    do {
        newCode = uuidv4().substr(0, 6); // Tạo một mã code ngẫu nhiên
    } while (isCodeExist(newCode, existingCodes)); // Truyền mảng existingCodes vào hàm isCodeExist
    return newCode;
};

export { uid, uidOrder, generateUniqueCodeInDiscount };
