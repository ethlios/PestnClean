export const removeImg = (str: string) => {
    let arr = [];

    for (let i = 0; i < str.split(' - ').length - 1; i++) {
        arr.push(str.split(' - ')[i]);
    }

    return arr;
};

export const arrToStr = (arr: any[]) => {
    let str = '';

    for (let i = 0; i < arr.length; i++) {
        str += `${arr[i]} - `;
    }

    return str;
};
