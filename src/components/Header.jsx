import { Box, Container, Flex, Heading, Icon, Image, Text } from '@chakra-ui/react';
import { IoPhonePortraitOutline } from "react-icons/io5";
import React from 'react';

const Header = () => {
    return (
        <Box w={'full'} backgroundColor={'#0E0E18'} h={'10vh'} display={'flex'} alignItems="center">
            <Container maxWidth={'container.xl'}>
                <Flex display={'flex'} alignItems="center" justifyContent="space-between">
                    <Box display={'flex'} alignItems="center" justifyContent="center" gap={'13px'}>
                        <Image src={'/logo.png'} w={'100px'} h={'30px'}/>
                        <Text fontSize='xs' color={'#fff'}>3 yildan ortiq tajribaga ega <br /> grafik dizayner</Text>
                    </Box>
                     <Box display={'flex'} alignItems="center">
                        <Box>
                     <Text fontSize='sm' color={'#414157'}>Biz bilan bog’laning:</Text>
                     <Text fontSize='sm' color={'#fff'}>+998 99 821 33 91</Text>
                        </Box>
                        <IoPhonePortraitOutline color='#fff' fontSize={'25px'}/>
                     </Box>
                </Flex>
            </Container>
        </Box>
    );
};

export default Header;

