function randomList(lists: any[]) {
    const arr = [];

    for (let i = 0; i < 2; i++) {
        const ramdomNumber = Math.floor(Math.random() * lists.length);

        arr.push(lists[ramdomNumber]);
    }

    return arr;
}

export default randomList;
