const nodemailer = require("nodemailer");
export const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'nguyenthanhquynhlinh@gmail.com',
        pass: 'kclk ldlh iykr knjx',
    },
});