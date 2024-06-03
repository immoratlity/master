import { Box, Button, Container, Heading, Image } from '@chakra-ui/react';
import React from 'react'
import { MdOutlineReceiptLong } from "react-icons/md";
import { CiCircleCheck } from "react-icons/ci";


const Ega = () => {
  return (
    <>
       <Box bgColor={"rgb(0, 0, 0)"} paddingTop={"70px"} w={"full"}>
        <Container maxWidth={'container.xl'}>
            <Box>
            <Box display={"flex"} alignItems={"center"} gap={"10px"}>
                <MdOutlineReceiptLong fontSize={"20px"} color={"#fff"} /> <Heading color={"#fff"} fontSize={"20px"} textAlign={"center"} paddingBottom={"13px"}>__________ _ _</Heading>
                </Box>
                <Heading color={"#fff"} fontWeight={"200"} marginTop={"15px"}>
                 <Box as='span' fontWeight={"700"}>3 kunlik Master-Klassda</Box> <br />
                 siz quyidagi bilimlarga ega bo’lasiz: 
                </Heading>
            </Box>
            <Box position={"relative"} paddingTop={"80px"} display={"flex"} flexWrap={"wrap"} alignItems={"center"} justifyContent={"space-around"} w={"1100px"}>
            <Image src='/podarok.png' position={"absolute"} left={"260px"} top={"160px"}></Image>
                <Box display={"flex"} alignItems={"center"} gap={"10px"}>
                <CiCircleCheck color={"#fff"} fontSize={"20px"} /> <Heading color={"#fff"} fontSize={"20px"} fontWeight={"400"}>Grafik dizayner bo’lish uchun <br /> nimalarni bilish kerak</Heading>
                </Box>
                <Box display={"flex"} alignItems={"center"} gap={"10px"}>
                <CiCircleCheck color={"#fff"} fontSize={"20px"} /> <Heading color={"#fff"} fontSize={"20px"} fontWeight={"400"}>Fotoshopdagi boshlang’ich barcha <br /> elementlarni qo’llash</Heading>
                </Box>
                <Box display={"flex"} alignItems={"center"} gap={"10px"}>
                <CiCircleCheck color={"#fff"} fontSize={"20px"} /> <Heading color={"#fff"} fontSize={"20px"} fontWeight={"400"}>Rasmlarni PNG holatga o’tkazish <br /> (Orqa fonni kesish)</Heading>
                </Box>
                <Box display={"flex"} alignItems={"center"} gap={"10px"} paddingTop={"80px"} paddingRight={"100px"}>
                <CiCircleCheck color={"#fff"} fontSize={"20px"} /> <Heading color={"#fff"} fontSize={"20px"} fontWeight={"400"}>Bonus</Heading>
                </Box>
                <Box display={"flex"} alignItems={"center"} gap={"10px"} paddingTop={"80px"}>
                <CiCircleCheck color={"#fff"} fontSize={"20px"} /> <Heading color={"#fff"} fontSize={"20px"} fontWeight={"400"}>O’zingizni go’yoki Dubayda <br /> turgandek qilib dizayn qilish</Heading>
                </Box>
                <Box paddingTop={"80px"}>
                <Heading color={"rgb(99, 205, 246)"} fontWeight={"700"} fontSize={"26px"}>
                BEPUL <Box as='span' color={"#fff"} fontWeight={"300"} textDecoration={"line-through"}>300.000 SO'M</Box>
                </Heading>
                <Button borderRadius={"100px"} bgColor={"rgb(99, 205, 246)"} color={"#fff"} marginTop={"5px"}>
                    ISHTIROK ETISH
                </Button>
            </Box>
            </Box>
        </Container>
       </Box>
    </>
  )
}

export default Ega
