import { Box, Button, Container, Heading } from '@chakra-ui/react'
import React from 'react'
import { IoTimeOutline } from "react-icons/io5";
import { BsLightningCharge } from "react-icons/bs";

const Hero = () => {
  return (
    <>
      <Box w={"full"} h={"70vh"} bg={"url(/bg.png)"} bgPosition={"center"} bgRepeat={"no-repeat"} bgSize={"230vh"}>
        <Container maxWidth={'container.xl'}>
          <Box w={"600px"} h={"40vh"} paddingTop={"40px"}>
            <Box display={"flex"} alignItems={"center"} justifyContent={"space-between"}>
            <Heading color={"#black"} fontWeight={"200"} fontSize={"30px"} bgColor={"#fff"} w={"200px"} textAlign={"center"}>
            20-21-22-iyun
            </Heading>
            <Box display={"flex"} alignItems={"center"} justifyContent={"space-around"} gap={"10px"}>
              <Heading fontWeight={"200"} fontSize={"30px"} color={"rgb(91, 99, 117)"}>
                20:00
              </Heading>
                <IoTimeOutline fontSize={"30px"} fontWeight={"200"} color={"rgb(91, 99, 117)"} />
                <Button borderRadius={"100px"} bgColor={"red"} color={"#fff"}>
                  ONLINE
                </Button>
            </Box>
            </Box>
            <Heading fontSize={"80px"} color={"#fff"} letterSpacing={"3px"} >
            Grafik Dizayn
            </Heading>
            <Heading fontWeight={"200"} color={"#fff"} letterSpacing={"8px"} fontSize={"40px"} marginTop={"10px"}>
            SOHASIGA KIRISH
            </Heading>
            <Box display={"flex"} alignItems={"center"} gap={"15px"} marginTop={"15px"}>
            <BsLightningCharge color={"red"} fontSize={"30px"} />
            <Box>
              <Heading fontSize={"20px"} color={"#fff"} fontWeight={"200"}>
              Ismoil Mahmudjonovdan <br /> <Box as='span' fontWeight={"700"}>Bepul Master-Klass</Box>
              </Heading>
            </Box>
            </Box>
          </Box>
        </Container>
      </Box> 
    </>
  )
}

export default Hero


