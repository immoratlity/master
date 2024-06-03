import { Box, Button, Container, Heading } from '@chakra-ui/react'
import React from 'react'
import { FiPocket } from "react-icons/fi";

const Uchkun = () => {
  return (
    <>
        <Box bgColor={"rgb(14, 14, 24)"} w={"full"}>
          <Container maxWidth={'container.xl'}>
            <Box display={"flex"} alignItems={"center"} justifyContent={"space-between"}>
            <Box>
              <Heading color={"rgb(99, 205, 246)"} fontSize={"26px"}  >
              3 kunlik Master-Klassda siz:
              </Heading>
              <Heading display={"flex"} alignItems={"center"} gap={"10px"} fontWeight={"300"} fontSize={'20px'} color={"#fff"} marginTop={"20px"}>
              <FiPocket /> Grafik dizayn qanday sohaligini tushunib olasiz;
              </Heading>
              <Heading display={"flex"} alignItems={"center"} gap={"10px"} fontWeight={"300"} fontSize={'20px'} color={"#fff"} marginTop={"10px"}>
              <FiPocket /> Fotoshopda ilk ishlaringizni qila olasiz;
              </Heading>
              <Heading display={"flex"} alignItems={"center"} gap={"10px"} fontWeight={"300"} fontSize={'20px'} color={"#fff"} marginTop={"10px"}>
              <FiPocket /> Grafik dizayn orqali daromad qilish yo’llarini o’rganib olasiz.
              </Heading>
            </Box>
            <Box>
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

export default Uchkun
