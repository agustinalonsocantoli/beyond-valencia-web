// Video & Img
import homeImg from '../../public/img/home.jpg';
import logo from '../../public/logoW.png';
import { AiOutlineInstagram } from 'react-icons/ai';
import { Whatsapp } from "@/shared/components/Custom/Whatsapp";
import { Events } from "@/shared/components/Events/Events";
import { Footer } from "@/shared/components/Footer/Footer";
import { Box, Button, Flex, Text } from "@chakra-ui/react";
import Image from 'next/image';
import Link from 'next/link';
import { getRevalidatedData } from '@/shared/middlewares/fetcher';
import { Options } from '@/shared/components/Options/Options';
import { Cards } from '@/shared/components/Services/Cards';
import { POST } from './api/send/route';

export default async function Home() {
  const { data } = await getRevalidatedData("content?landing=home")

  const homeData = {
    h1: "Easy, safe and unique... #Valencia",
    h2: "LOCKERS & BIKE RENTALS",
    navigate: "#options",
    content: data
  }

  return (
    <Box
      pos="relative"
    >
      <Box 
        w="100%"
        h="750px"
        pos="relative"
      >
        <Box
          pos="absolute"
          left="50px"
          top="20px"
          zIndex="399"
        >
          <Link 
            href="https://www.instagram.com/beyond_valencia_/" 
            target='_blank' 
            rel='noopener noreferrer'
            style={{
              display: "flex",
              fontSize: "15px",
              cursor: "pointer",
              alignItems: "center",
              color: "#545454"
            }}
          >
            #weareonfire
            <AiOutlineInstagram style={{ color: "#545454", fontSize: "20px" }} />
          </Link>
        </Box>

        <Box
          pos="absolute"
          top="40%"
          left="0"
          right="0"
          textAlign="center"
        >
          <Flex
            display={{ base: "none", xs: "none", sm: "none", md: "none", lg: "flex"}}
            mb="50px"
            w="100%"
            justifyContent="center"
          >
            <Image src={logo} alt="img/logo"
              style={{
                width: "28%",
                height: "100%",
                objectFit: "cover"
              }}
            />
          </Flex>

          <Flex
            display={{ base: "flex", xs: "flex", sm: "flex", md: "flex", lg: "none"}}
            mb="50px"
            w="100%"
            justifyContent="center"
          >
            <Image src={logo} alt="img/logo"
              style={{
                width: "65%",
                height: "100%",
                objectFit: "cover"
              }}
            />
          </Flex>

          <Text
            color="#FFFFFF"
            w={{ base: "60%", xs: "40%", sm: "40%", md: "40%", lg: "20%"}}
            m="auto"
            p="10px"
            bgColor="#000000"
            rounded="50px"
            fontSize={{ base: "13px", xs: "15px", sm: "15px", md: "15px", lg: "15px"}}
            fontWeight="600"
            letterSpacing="1px"
          >
            CURATED EXPERIENCES
          </Text>
        </Box>

        <Image src={homeImg} alt="img/home"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover"
          }}
        />
      </Box>

      <Cards
          data={homeData}
        />

      <Events />

      <Box id="options">
        <Options />
      </Box>

      <Whatsapp />

      <Footer />
    </Box>
  )
}
