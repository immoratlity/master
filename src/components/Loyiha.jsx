import { Box, Container, Heading, Image } from '@chakra-ui/react'
import React from 'react'
import { LiaPaletteSolid } from "react-icons/lia";

const Loyiha = () => {
  return (
    <>
     <Box bgColor={"rgb(0, 0, 0)"} paddingTop={"100px"} w={"full"}>
        <Container>
            <Box marginLeft={"230px"}>
            <LiaPaletteSolid color={"#FFF"} fontSize={"20px"}  /> 
            </Box>
            <Heading color={"#fff"} fontSize={"20px"} textAlign={"center"}>__________ _ _</Heading>
            <Heading color={"#fff"} textAlign={"center"} paddingTop={"20px"} >Bajarilgan loyihalardan misollar:</Heading>
        </Container>
     </Box>

     <Box display={"flex"} alignItems={"center"}>
        <Image src='/1.jpg' w={"350px"}></Image>
        <Image src='/2.jpg' w={"350px"}></Image>
        <Image src='/3.jpg' w={"350px"}></Image>
        <Image src='/4.jpg' w={"350px"}></Image>
        <Image src='/5.jpg' w={"350px"}></Image>
     </Box>
     <Box display={"flex"} alignItems={"center"}>
        <Image src='/6.jpg' w={"350px"}></Image>
        <Image src='/7.jpg' w={"350px"}></Image>
        <Image src='/8.jpg' w={"350px"}></Image>
        <Image src='/9.jpg' w={"350px"}></Image>
        <Image src='/10.jpg' w={"350px"}></Image>
     </Box>

    </>
  )
}

export default Loyiha
