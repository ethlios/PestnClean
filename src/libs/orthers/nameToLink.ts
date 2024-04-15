import { removeVietnameseTones } from './removeVietnamese';

function nameToLink(str: string) {
    const removeVietnamese = removeVietnameseTones(str);

    const path: string = removeVietnamese.replaceAll(' ', '-').toLowerCase();

    return path;
}

export { nameToLink };
