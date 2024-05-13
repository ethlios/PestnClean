const filterMenu = [
    {
        title: 'Kiểm soát côn trùng',
        subMenu: [
            { title: 'Mối' },
            {
                title: 'Thiết bị máy móc',
                subMenu: [{ title: 'Đèn' }, { title: 'Máy phun xịt' }],
            },
            {
                title: 'Hoá Chất Diệt Côn Trùng',
                subMenu: [
                    { title: 'Dạng dung dịch' },
                    { title: 'Dạng bả' },
                    { title: 'Dạng bột' },
                    { title: 'Dạng gel' },
                    { title: 'Dạng keo' },
                    { title: 'Dạng viên' },
                ],
            },
            { title: 'Bẫy côn trùng' },
        ],
    },
    {
        title: 'Vệ sinh công nghiệp',
        subMenu: [
            {
                title: 'Máy vệ sinh công nghiệp',
                subMenu: [
                    { title: 'Máy chà sàn' },
                    { title: 'Máy hút bụi' },
                    { title: 'Máy lau sàn' },
                    { title: 'Máy giặt thảm giặt ghế' },
                ],
            },
            {
                title: 'Dụng cụ vệ sinh',
                subMenu: [{ title: 'Xe quét rác công nghiệp' }],
            },
            { title: 'Thiết bị Khách Sạn - Nhà Hàng' },
            {
                title: 'Dung dịch Hóa chất',
                subMenu: [
                    { title: 'DEW' },
                    { title: 'ECOLAB' },
                    { title: 'GOODMAID' },
                    { title: 'AROMA CLEANING' },
                ],
            },
            {
                title: 'Thiết bị công nghiệp',
                subMenu: [
                    { title: 'Xe đẩy hàng' },
                    { title: 'Máy phun xịt áp lực' },
                    { title: 'Quạt công nghiệp' },
                    { title: 'Quạt hơi nước' },
                ],
            },
            {
                title: 'Phụ kiện',
                subMenu: [{ title: 'Phụ kiện máy chà sàn' }, { title: 'phụ kiện máy hút bụi' }],
            },
        ],
    },
    {
        title: 'Giải pháp vệ sinh',
        subMenu: [
            {
                title: 'Giải Pháp Mùi Hương',
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
                subMenu: [
                    { title: 'Thiết bị đựng xà phòng' },
                    { title: 'Thiết bị rửa tay sát khuẩn' },
                    { title: 'Máy sấy tay' },
                    { title: 'Hộp giấy lau tay' },
                ],
            },
            {
                title: 'Vệ sinh không khí',
                subMenu: [{ title: 'Máy lọc không khí' }],
            },
            {
                title: 'Giải pháp bảo vệ sàn',
                subMenu: [{ title: 'Thảm kiểm soát bụi' }],
            },
        ],
    },
];

const checkboxFilter = [
    {
        title: 'Dung tích',
        checkbox: ['1l', '2l', '3l', '4l'],
    },
    {
        title: 'Gói',
        checkbox: ['10g', '12g', '50g', '100g'],
    },
    {
        title: 'Hộp',
        checkbox: ['6 cục', '12 cục'],
    },
    {
        title: 'Miếng',
        checkbox: ['1 miếng', '10 miếng'],
    },
    {
        title: 'Túi',
        checkbox: ['1 túi', '5 túi'],
    },
    {
        title: 'Tấm',
        checkbox: ['1 tấm'],
    },
];

export { filterMenu, checkboxFilter };
