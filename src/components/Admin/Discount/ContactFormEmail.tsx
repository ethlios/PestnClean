import {
    Body,
    Button,
    Container,
    Column,
    Head,
    Heading,
    Html,
    Img,
    Preview,
    Row,
    Section,
    Text,
} from '@react-email/components';
import moment from 'moment';
import * as React from 'react';
interface DisCountProps {
    code: string;
    dateEnd: string;
    dateStart: string;
    description: string;
    name: string;
    percent: number;
    userName: string;
}

export const ContactFormEmail = ({
    code,
    dateEnd,
    dateStart,
    description,
    name,
    percent,
    userName,
}: DisCountProps) => {
    return (
        <Html>
            <Head />
            <Preview>Thông báo bạn được tặng 1 mã khuyễn mãi!</Preview>
            <Body style={main}>
                <Container>
                    <Section style={logo}>
                        <Img
                            width={100}
                            src="https://res.cloudinary.com/dj2jarcxk/image/upload/v1715334923/logo_xc5esd.png"
                        />
                    </Section>

                    <Section style={content}>
                        <Row>
                            <Img
                                style={image}
                                width={620}
                                height={300}
                                src="https://res.cloudinary.com/dj2jarcxk/image/upload/v1715334926/banner_1_momhf9.jpg"
                            />
                        </Row>

                        <Row style={{ ...boxInfos, paddingBottom: '0' }}>
                            <Column>
                                <Heading
                                    style={{
                                        fontSize: 32,
                                        fontWeight: 'bold',
                                        textAlign: 'center',
                                    }}
                                >
                                    Hi {userName},
                                </Heading>
                                <Heading
                                    as="h2"
                                    style={{
                                        fontSize: 24,
                                        fontWeight: 'bold',
                                        textAlign: 'center',
                                    }}
                                >
                                    Chúng tôi có 1 mã khuyến mãi gửi đến bạn
                                </Heading>

                                <Text style={paragraph}>
                                    <b>Tiêu đề: </b>
                                    {name}
                                </Text>
                                <Text style={{ ...paragraph, marginTop: -5 }}>
                                    <b>Mã code: </b>
                                    {code}
                                </Text>
                                <Text style={{ ...paragraph, marginTop: -5 }}>
                                    <b>Tỷ lệ giảm: </b>
                                    {percent + '%'}
                                </Text>
                                <Text
                                    style={{
                                        color: 'rgb(0,0,0, 0.5)',
                                        fontSize: 14,
                                        marginTop: -5,
                                    }}
                                >
                                    Lưu ý chương trình áp dụng vào khoảng thời gian từ{' '}
                                    {moment(dateStart).format('DD/MM/YYYY')} và kết thúc từ{' '}
                                    {moment(dateEnd).format('DD/MM/YYYY')}
                                </Text>

                                <Text style={paragraph}>{description}</Text>
                                <Text style={{ ...paragraph, marginTop: -5 }}>
                                    Nếu đây không phải là bạn hoặc nếu bạn có thêm câu hỏi, vui lòng xem trang
                                    hỗ trợ của chúng tôi.
                                </Text>
                            </Column>
                        </Row>
                        <Row style={{ ...boxInfos, paddingTop: '0' }}>
                            <Column style={containerButton} colSpan={2}>
                                <Button style={button}>Đọc thêm</Button>
                            </Column>
                        </Row>
                    </Section>
                    <Text
                        style={{
                            textAlign: 'center',
                            fontSize: 12,
                            color: 'rgb(0,0,0, 0.7)',
                        }}
                    >
                        © 2024 | PestnClena, Ho Chi Minh City, VietNam| www.pestclean.com
                    </Text>
                </Container>
            </Body>
        </Html>
    );
};
export default ContactFormEmail;

const main = {
    backgroundColor: '#fff',
    fontFamily:
        '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const paragraph = {
    fontSize: 15,
};

const logo = {
    padding: '30px 20px',
    width: '100px',
    height: '50px',
};

const containerButton = {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
};

const button = {
    backgroundColor: '#e00707',
    borderRadius: 3,
    color: '#FFF',
    fontWeight: 'bold',
    border: '1px solid rgb(0,0,0, 0.1)',
    cursor: 'pointer',
    padding: '12px 30px',
};

const content = {
    border: '1px solid rgb(0,0,0, 0.1)',
    borderRadius: '3px',
    overflow: 'hidden',
};

const image = {
    maxWidth: '100%',
};

const boxInfos = {
    padding: '20px',
};

const containerImageFooter = {
    padding: '45px 0 0 0',
};
