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
        title: 'Sắp xếp theo',
        checkbox: ['Tất cả', 'Sản phẩm mới'],
    },
    {
        title: 'Giảm giá',
        checkbox: ['Đang giảm giá'],
    },
    {
        title: 'Theo mức giá',
        checkbox: ['Dưới 1.000.000đ', 'Từ 1.000.000đ - 5.000.000đ', 'Trên 5.000.000đ'],
    },
    {
        title: 'Dung tích',
        checkboxLeft: ['50ML', '100ML', '500ML'],
        checkboxRight: ['1L', '5L', '20L'],
    },
    {
        title: 'Gói',
        checkboxLeft: ['10gr', '20gr', '100gr', '200gr'],
        checkboxRight: ['500gr', 'Gói 20 viên', 'Hũ 400gr'],
    },
    {
        title: 'Hộp',
        checkboxLeft: ['Hộp 12 cục'],
        checkboxRight: ['360gr'],
    },
    {
        title: 'Miếng',
        checkboxLeft: ['1 miếng'],
        checkboxRight: ['10 miếng'],
    },
    {
        title: 'Túi',
        checkbox: ['1 túi', '1 bộ (5 túi bả và 1 trạm AGS)'],
    },
    {
        title: 'Tấm',
        checkbox: ['1 tấm'],
    },
];

export { filterMenu, checkboxFilter };
