import jwt, { Jwt, JwtPayload } from 'jsonwebtoken';

interface SignOption {
    expiresIn: number | string;
}

const DEFAULT_SIGN_OPTION: SignOption = {
    expiresIn: '7d',
};

export function signJwtAccessToken(payload: JwtPayload, options: SignOption = DEFAULT_SIGN_OPTION) {
    const secret_key = process.env.SECRET_KEY;
    const token = jwt.sign(payload, secret_key!, options);
    return token;
}

export function verifyJwt(token: string) {
    try {
        const secret_key = process.env.SECRET_KEY;
        const decoded = jwt.verify(token, secret_key!);
        return decoded as JwtPayload;
    } catch (err) {
        console.log(err);
        return null;
    }
}
