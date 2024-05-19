import { cons } from 'effect/List';

const filterMenu = [
    {
        title: 'Kiểm soát côn trùng',
        field: 'category1',
        subMenu: [
            {
                title: 'Thiết bị máy móc',
                field: 'category2',
                subMenu: [{ title: 'Đèn' }, { title: 'Máy phun xịt' }],
            },
            {
                title: 'Hoá Chất Diệt Côn Trùng',
                field: 'category2',
                subMenu: [
                    { title: 'Dạng dung dịch' },
                    { title: 'Dạng bả' },
                    { title: 'Dạng bột' },
                    { title: 'Dạng gel' },
                    { title: 'Dạng keo' },
                    { title: 'Dạng viên' },
                ],
            },
            { title: 'Bẫy côn trùng', field: 'category2' },
        ],
    },
    {
        title: 'Vệ sinh công nghiệp',
        field: 'category1',
        subMenu: [
            {
                title: 'Máy vệ sinh công nghiệp',
                field: 'category2',
                subMenu: [
                    { title: 'Máy chà sàn' },
                    { title: 'Máy hút bụi' },
                    { title: 'Máy lau sàn' },
                    { title: 'Máy giặt thảm giặt ghế' },
                ],
            },
            {
                title: 'Dụng cụ vệ sinh',
                field: 'category2',
                subMenu: [{ title: 'Xe quét rác công nghiệp' }],
            },
            { title: 'Thiết bị Khách Sạn - Nhà Hàng', field: 'category2' },
            {
                title: 'Dung dịch Hóa chất',
                field: 'category2',
                subMenu: [
                    { title: 'DEW' },
                    { title: 'ECOLAB' },
                    { title: 'GOODMAID' },
                    { title: 'AROMA CLEANING' },
                ],
            },
            {
                title: 'Thiết bị công nghiệp',
                field: 'category2',
                subMenu: [
                    { title: 'Xe đẩy hàng' },
                    { title: 'Máy phun xịt áp lực' },
                    { title: 'Quạt công nghiệp' },
                    { title: 'Quạt hơi nước' },
                ],
            },
            {
                title: 'Phụ kiện',
                field: 'category2',
                subMenu: [{ title: 'Phụ kiện máy chà sàn' }, { title: 'phụ kiện máy hút bụi' }],
            },
        ],
    },
    {
        title: 'Giải pháp vệ sinh',
        field: 'category1',
        subMenu: [
            {
                title: 'Giải Pháp Mùi Hương',
                field: 'category2',
                subMenu: [
                    { title: 'Máy Khuếch Tán' },
                    {
                        title: 'Tinh Dầu',
                        subMenu: [
                            { title: 'KODO' },
                            { title: 'VIETOIL' },
                            { title: 'BIZSCENT' },
                            { title: 'MICROAROMA' },
                        ],
                    },
                ],
            },
            {
                title: 'Thiết bị Vệ Sinh',
                field: 'category2',
                subMenu: [
                    { title: 'Thiết bị đựng xà phòng' },
                    { title: 'Thiết bị rửa tay sát khuẩn' },
                    { title: 'Máy sấy tay' },
                    { title: 'Hộp giấy lau tay' },
                ],
            },
            {
                title: 'Vệ sinh không khí',
                field: 'category2',
                subMenu: [{ title: 'Máy lọc không khí' }],
            },
            {
                title: 'Giải pháp bảo vệ sàn',
                field: 'category2',
                subMenu: [{ title: 'Thảm kiểm soát bụi' }],
            },
        ],
    },
];

const checkboxFilter = [
    {
        title: 'Dung tích',
        field: 'weight',
        checkbox: [],
    },
    {
        title: 'Gói',
        field: 'package',
        checkbox: [],
    },
    {
        title: 'Hộp',
        field: 'box',
        checkbox: [],
    },
    {
        title: 'Miếng',
        field: 'pieces',
        checkbox: [],
    },
    {
        title: 'Túi',
        field: 'bag',
        checkbox: [],
    },
    {
        title: 'Tấm',
        field: 'plate',
        checkbox: [],
    },
];

const filterPrice = [
    {
        title: 'Theo giá',
        field: 'price',
        checkbox: [
            { title: 'Dưới 1.000.000', max: 1000000 },
            { title: 'Từ 1.000.000đ - 5.000.000đ', min: 1000000, max: 5000000 },
            { title: 'Trên 5.000.000đ', min: 5000000 },
        ],
    },
];

export { filterMenu, checkboxFilter, filterPrice };
