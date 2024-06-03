import { Box, Container, Heading } from '@chakra-ui/react'
import React from 'react'
import { MdOutlineReceiptLong } from "react-icons/md";
import { BsChatHeart } from "react-icons/bs";
import { GiProgression } from "react-icons/gi";
import { IoPencilSharp } from "react-icons/io5";

const Haqida = () => {
  return (
    <>
      <Box bgColor={"rgb(14, 14, 24)"} paddingTop={"100px"} position={"relative"}>
        <Container maxWidth={'container.xl'}>
            <Box>
                <Box display={"flex"} alignItems={"center"} gap={"10px"}>
                <MdOutlineReceiptLong fontSize={"20px"} color={"#fff"} /> <Heading color={"#fff"} fontSize={"20px"} textAlign={"center"} paddingBottom={"13px"}>__________ _ _</Heading>
                </Box>
                <Heading color={"#fff"} fontWeight={"200"} marginTop={"15px"}>
                ISMOIL MAHMUDJONOV <br />
                 <Box as='span' fontWeight={"700"}>HAQIDA</Box>
                </Heading>
                <Box marginTop={"30px"} display={"flex"} alignItems={"center"} gap={'20px'}>
                    <Box bgColor={"#fff"} w={"40px"} h={"40px"} borderRadius={"20px"} paddingLeft={"11px"} paddingTop={"10px"} position={"absolute"} left={"460px"} bottom={"95px"} boxShadow={"1px -3px 85px 3px rgba(0,0,0,0.56);"} > 
                    <BsChatHeart color={"red"} fontSize={"18px"} />
                    </Box>
                    <Box bgColor={"rgb(255, 255, 255)"} w={"300px"} h={"120px"} borderRadius={"5px"}>
                        <Heading fontSize={"15px"} paddingLeft={"50px"} paddingTop={"35px"} fontWeight={"600"}>
                        Grafik dizayn sohasida 120 <br />
                        dan oshiq muvaffaqiyatli <br />
                        loyihalar.
                        </Heading>
                    </Box>
                    <Box bgColor={"#fff"} w={"40px"} h={"40px"} borderRadius={"20px"} paddingLeft={"11px"} paddingTop={"10px"} position={"absolute"} left={"780px"} bottom={"95px"} boxShadow={"1px -3px 85px 3px rgba(0,0,0,0.56);"} > 
                    <GiProgression color={"red"} fontSize={"18px"} />
                    </Box>
                    <Box bgColor={"rgb(255, 255, 255)"} w={"300px"} h={"120px"} borderRadius={"5px"}>
                        <Heading fontSize={"15px"} paddingLeft={"50px"} paddingTop={"35px"} fontWeight={"600"}>
                        Grafik dizayn sohasida 120 <br />
                        dan oshiq muvaffaqiyatli <br />
                        loyihalar.
                        </Heading>
                    </Box>
                    <Box bgColor={"#fff"} w={"40px"} h={"40px"} borderRadius={"20px"} paddingLeft={"11px"} paddingTop={"10px"} position={"absolute"} left={"1100px"} bottom={"95px"} boxShadow={"1px -3px 85px 3px rgba(0,0,0,0.56);"} > 
                    <IoPencilSharp color={"red"} fontSize={"18px"} />
                    </Box>
                    <Box bgColor={"rgb(255, 255, 255)"} w={"300px"} h={"120px"} borderRadius={"5px"}>
                        <Heading fontSize={"15px"} paddingLeft={"50px"} paddingTop={"35px"} fontWeight={"600"}>
                        Grafik dizayn sohasida 120 <br />
                        dan oshiq muvaffaqiyatli <br />
                        loyihalar.
                        </Heading>
                    </Box>
                </Box>
            </Box>
        </Container>
      </Box>

    </>
  )
}

export default Haqida
