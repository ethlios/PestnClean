import Link from 'next/link';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import Badge, { BadgeProps } from '@mui/material/Badge';
import { styled } from '@mui/material/styles';

const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
    '& .MuiBadge-badge': {
        right: -0,
        top: 13,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: '0 4px',
    },
}));

export default function ShoppingCart() {
    const localCart = localStorage.getItem('cart');
    const cart = localCart ? JSON.parse(localCart) : [];
    const totalAmount = cart.reduce((acc: number, item: any) => acc + item.quantity, 0);

    return (
        <Link href={'/giohang'} className={'icon-hover ' + (totalAmount > 0 ? 'mr-2' : '')} aria-label="cart">
            <StyledBadge badgeContent={totalAmount} color="primary">
                <ShoppingBagOutlinedIcon />
            </StyledBadge>
        </Link>
    );
}
