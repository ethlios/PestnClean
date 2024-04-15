function smoothScroll(target: any) {
    const target1 = document.querySelector(target);

    if (!!target1) {
        target1.scrollIntoView({
            behavior: 'smooth',
            block: 'center',
        });
    }
}

export default smoothScroll;
