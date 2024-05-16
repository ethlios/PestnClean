function randomList(lists: any[], max: number) {
    const arr = [];

    for (let i = 0; i < max; i++) {
        const ramdomNumber = Math.floor(Math.random() * lists.length);

        arr.push(lists[ramdomNumber]);
    }

    return arr;
}

export default randomList;
