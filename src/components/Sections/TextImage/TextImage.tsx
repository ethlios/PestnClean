import Section from '~/components/Sections/Section';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Image from 'next/image';
import banner1 from '../../../../public/img/banner 1.jpg';
import bug from '../../../../public/icon/bug.svg';

const giaiphap = [
    {
        id: 1,
        title: 'KIỂM SOÁT CÔN TRÙNG',
        icon: bug,
    },
    {
        id: 2,
        title: 'VỆ SINH CÔNG CỘNG',
        icon: bug,
    },
    {
        id: 3,
        title: 'GIẢI PHÁP VỆ SINH',
        icon: bug,
    },
    {
        id: 4,
        title: 'KIỂM SOÁT MỐI',
        icon: bug,
    },
    {
        id: 5,
        title: 'VỆ SINH NHÀ Ở',
        icon: bug,
    },
    {
        id: 6,
        title: 'GIẢI PHÁP MÙI HƯƠNG',
        icon: bug,
    },
];

export default function TextImage() {
    return (
        <>
            <Section classes={'py-5'}>
                <Container>
                    <h1 className={'pb-5 text-center font-bold underline underline-offset-2 text-2xl'}>
                        GIẢI PHÁP DÀNH CHO BẠN</h1>
                    <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={6}>
                                {giaiphap.map((item) => (
                                    <div
                                        key={item.id}
                                        className={'px-3 py-4 shadow-md'}
                                        style={{ borderRadius: '12px' }}
                                    >
                                        <h2 className={'flex text-xl'}>
                                            <Image src={item.icon} alt={'bug'} width={25} />
                                            <strong className={'ml-2'}>{item.title}</strong>
                                        </h2>
                                    </div>
                                ))}

                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Card sx={{ borderRadius: '12px' }}>
                                    <div className={'relative'}>
                                        <Image src={banner1} alt={'banner'} />
                                        <div
                                            className={'absolute bottom-0 p-2 text-justify text-white w-full'}
                                            style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
                                        >
                                            <p>Lorem Ipsum is simply dummy text of the printing and
                                                typesetting
                                                industry.
                                                Lorem Ipsum has
                                                been the standard dummy text ever since the 1500s, when an unknown
                                                printer
                                                took a galley
                                                of type and scrambled it to make a type specimen book.</p>
                                        </div>
                                    </div>
                                </Card>
                            </Grid>
                        </Grid>
                    </Box>
                </Container>
            </Section>
        </>
    );
};