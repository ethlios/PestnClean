import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';
import DiscountOutlinedIcon from '@mui/icons-material/DiscountOutlined';
import NoteAltOutlinedIcon from '@mui/icons-material/NoteAltOutlined';

const admins = [
    {
        id: 1,
        title: 'Users',
        icon: PeopleAltOutlinedIcon,
    },
    {
        id: 2,
        title: 'Sản phẩm',
        icon: CategoryOutlinedIcon,
    },
    {
        id: 3,
        title: 'Mã giảm giá',
        icon: DiscountOutlinedIcon,
    },
    {
        id: 4,
        title: 'Thông báo',
        icon: NotificationsActiveOutlinedIcon,
    },
    {
        id: 5,
        title: 'Đơn đặt hàng',
        icon: LocalMallOutlinedIcon,
    },
    {
        id: 6,
        title: 'Email khuyến mãi',
        icon: EmailOutlinedIcon,
    },
    {
        id: 7,
        title: 'Hình ảnh',
        icon: CameraAltOutlinedIcon,
    },
    {
        id: 8,
        title: 'Blogs',
        icon: NoteAltOutlinedIcon,
    },
];

const profiles = [
    {
        id: 1,
        title: 'Tài khoản của tôi',
        icon: PeopleAltOutlinedIcon,
    },

    {
        id: 2,
        title: 'Thông báo',
        icon: NotificationsActiveOutlinedIcon,
    },
    {
        id: 3,
        title: 'Đơn đặt hàng',
        icon: LocalMallOutlinedIcon,
    },
];

export { admins, profiles };
