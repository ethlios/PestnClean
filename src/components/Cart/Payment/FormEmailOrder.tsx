import {
    Body,
    Container,
    Column,
    Head,
    Heading,
    Hr,
    Html,
    Img,
    Link,
    Preview,
    Row,
    Section,
    Text,
} from '@react-email/components';
import moment from 'moment';
import * as React from 'react';
import formatter from '~/libs/orthers/formatMoney';
interface OrdersProps {
    cart: [];
    address: string;
    city: string;
    district: string;
    email: string;
    messages: number;
    name: string;
    phone: number;
    ward: string;
    payment: number;
}

export const FormEmailOrders = ({
    cart,
    address,
    city,
    district,
    email,
    messages,
    name,
    phone,
    ward,
    payment,
}: OrdersProps) => (
    <Html>
        <Head />
        <Preview>Nhận tóm tắt đơn hàng, ngày giao hàng ước tính và nhiều thông tin khác</Preview>
        <Body style={main}>
            <Container style={container}>
                <Hr style={global.hr} />
                <Section style={message}>
                    <Img
                        src="https://res.cloudinary.com/dj2jarcxk/image/upload/v1715334923/logo_xc5esd.png"
                        width="100"
                        alt="PestnClean"
                        style={{ margin: 'auto' }}
                    />
                    {/* HEADER TIÊU ĐỀ MUỐN GỬI */}
                    <Heading style={global.heading}>Sản phẩm đang trên đường đi.</Heading>
                    <Text style={global.text}>Bạn vừa đặt hàng thành công các đơn đặt hàng sau đây</Text>
                    <Text style={{ ...global.text, marginTop: 24 }}>
                        Chúng tôi cũng đã tính phí đơn hàng của bạn vào phương thức thanh toán của bạn và sẽ
                        bị xóa mọi khoản giữ ủy quyền. Để biết chi tiết thanh toán, vui lòng truy cập trang
                        Đơn hàng của bạn trên PestnClean.com
                    </Text>
                </Section>
                <Hr style={global.hr} />
                {/* THÔN TIN NGƯỜI GỬI */}
                <Section style={global.defaultPadding}>
                    <Text style={adressTitle}>Thông tin người đặt:</Text>
                    <Text style={{ ...global.text, fontSize: 14 }}>Họ và tên: {name}</Text>
                    <Text style={{ ...global.text, fontSize: 14 }}>Email: {email}</Text>
                    <Text style={{ ...global.text, fontSize: 14 }}>Số điện thoại: {phone}</Text>
                    <Text style={{ ...global.text, fontSize: 14 }}>
                        Gửi tới: {address + ', ' + ward + ', ' + district + ', ' + city}
                    </Text>
                    <Text style={{ ...global.text, fontSize: 14 }}>Lới nhắn: {messages}</Text>
                </Section>
                <Hr style={global.hr} />
                {/* CÁC SẢN PHẨM ĐÃ ĐƯỢC ĐẶT */}
                <Section style={{ ...paddingX, paddingTop: '40px', paddingBottom: '40px' }}>
                    {cart.map((item: any, index: number) => {
                        return (
                            <Row style={{ paddingTop: '20px', paddingBottom: '20px' }} key={index}>
                                <Column>
                                    <Img
                                        src={item.img}
                                        alt={item.title}
                                        style={{ float: 'left' }}
                                        width="260px"
                                    />
                                </Column>
                                <Column style={{ verticalAlign: 'top', paddingLeft: '12px' }}>
                                    <Text style={{ ...paragraph, fontWeight: '500' }}>{item.title}</Text>
                                    <Text style={global.text}>Mô tả:{item.description}</Text>
                                    <Text style={global.text}>Giá gốc:{formatter.format(item.price)}</Text>
                                    {item.priceSales && item.priceSales > 0 && (
                                        <Text style={global.text}>
                                            Giá giảm:{formatter.format(item.priceSales)}
                                        </Text>
                                    )}
                                    <Text style={global.text}>Số lượng:{item.quantity}</Text>
                                </Column>
                            </Row>
                        );
                    })}
                </Section>
                <Hr style={global.hr} />
                <Section style={global.defaultPadding}>
                    <Row style={{ display: 'inline-flex', marginBottom: 40 }}>
                        <Column style={{ width: '170px' }}>
                            <Text style={global.paragraphWithBold}>Mã đơn hàng</Text>
                            <Text style={track.number}>C0106373851</Text>
                        </Column>
                        <Column>
                            <Text style={global.paragraphWithBold}>Ngày đặt</Text>
                            <Text style={track.number}>{moment().format('lll')}</Text>
                        </Column>
                        <Column style={{ width: '170px' }}>
                            <Text style={global.paragraphWithBold}>Tổng tiền</Text>
                            <Text style={track.number}>{formatter.format(payment)}</Text>
                        </Column>
                    </Row>
                    <Row>
                        <Column align="center">
                            <Link style={global.button}>Trạng thái đợn hàng</Link>
                        </Column>
                    </Row>
                </Section>
                <Hr style={global.hr} />
                <Section style={paddingY}>
                    <Row>
                        <Text style={global.heading}>PestnClean.com</Text>
                    </Row>
                </Section>
                <Hr style={{ ...global.hr, marginTop: '12px' }} />
                <Section style={paddingY}>
                    <Row style={footer.policy}>
                        <Column>
                            <Text style={footer.text}>Web Version</Text>
                        </Column>
                        <Column>
                            <Text style={footer.text}>Privacy Policy</Text>
                        </Column>
                    </Row>
                    <Row>
                        <Text style={{ ...footer.text, paddingTop: 30, paddingBottom: 30 }}>
                            Vui lòng liên hệ với chúng tôi nếu bạn có bất kỳ câu hỏi. (Nếu bạn trả lời email
                            này, chúng tôi sẽ không có thể nhìn thấy nó.)
                        </Text>
                    </Row>
                    <Row>
                        <Text style={footer.text}>
                            © 2024 | PestnClena, Ho Chi Minh City, VietNam| www.pestclean.com
                        </Text>
                    </Row>
                </Section>
            </Container>
        </Body>
    </Html>
);

export default FormEmailOrders;

const paddingX = {
    paddingLeft: '40px',
    paddingRight: '40px',
};

const paddingY = {
    paddingTop: '22px',
    paddingBottom: '22px',
};

const paragraph = {
    margin: '0',
    lineHeight: '2',
};

const global = {
    paddingX,
    paddingY,
    defaultPadding: {
        ...paddingX,
        ...paddingY,
    },
    paragraphWithBold: { ...paragraph, fontWeight: 'bold' },
    heading: {
        fontSize: '32px',
        lineHeight: '1.3',
        fontWeight: '700',
        textAlign: 'center',
        letterSpacing: '-1px',
    } as React.CSSProperties,
    text: {
        ...paragraph,
        color: '#747474',
        fontWeight: '500',
    },
    button: {
        border: '1px solid #929292',
        fontSize: '16px',
        textDecoration: 'none',
        padding: '10px 0px',
        width: '220px',
        display: 'block',
        textAlign: 'center',
        fontWeight: 500,
        color: '#000',
    } as React.CSSProperties,
    hr: {
        borderColor: '#E5E5E5',
        margin: '0',
    },
};

const main = {
    backgroundColor: '#ffffff',
    fontFamily:
        '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
    margin: '10px auto',
    width: '600px',
    maxWidth: '100%',
    border: '1px solid #E5E5E5',
};

const track = {
    container: {
        padding: '22px 40px',
        backgroundColor: '#F7F7F7',
    },
    number: {
        margin: '12px 0 0 0',
        fontWeight: 500,
        lineHeight: '1.4',
        color: '#6F6F6F',
    },
};

const message = {
    padding: '40px 74px',
    textAlign: 'center',
} as React.CSSProperties;

const adressTitle = {
    ...paragraph,
    fontSize: '15px',
    fontWeight: 'bold',
};

const footer = {
    policy: {
        width: '166px',
        margin: 'auto',
    },
    text: {
        margin: '0',
        color: '#AFAFAF',
        fontSize: '13px',
        textAlign: 'center',
    } as React.CSSProperties,
};
