// Video & Img
import homeImg from '../../public/img/home.jpg';
import logo from '../../public/logoW.png';
import { AiOutlineInstagram } from 'react-icons/ai';
import { Whatsapp } from "@/shared/components/Custom/Whatsapp";
import { Events } from "@/shared/components/Events/Events";
import { Footer } from "@/shared/components/Footer/Footer";
import { Box, Flex, Heading, Icon } from "@chakra-ui/react";
import Image from 'next/image';
import Link from 'next/link';
import { getStaticData } from '@/shared/middlewares/fetcher';
import { Options } from '@/shared/components/Options/Options';
import { GroupServices } from '@/shared/components/Services/GroupServices';

export default async function Home() {
  const { data } = await getStaticData("content?landing=home")

  const homeData = {
    h1: "Easy, safe and unique... #Valencia",
    h2: "LOCKERS & BIKE RENTALS",
    navigate: "#options",
    content: data
  }

  return (
    <Box
      pos="relative"
      className="home"
    >
      <div className="home_video">
        <div className="video_hashtag">
          <Link href="https://www.instagram.com/beyond_valencia_/" target='_blank' rel='noopener noreferrer'>
            #weareonfire
            <AiOutlineInstagram style={{ color: "#545454", fontSize: "20px" }} />
          </Link>
        </div>

        <Box
          pos="absolute"
          top="40%"
          left="0"
          right="0"
          textAlign="center"
        >
          <Flex
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

          <Heading
            color="#FFFFFF"
            w="20%"
            m="auto"
            p="10px"
            bgColor="#000000"
            rounded="50px"
            fontSize="15px"
            fontWeight="600"
            letterSpacing="1px"
          >
            CURATED EXPERIENCES
          </Heading>
        </Box>

        <Image src={homeImg} alt="img/home"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover"
          }}
        />
      </div>

      <GroupServices
          sliderPage1={homeData}
        />

      <Events />

      <div id="options">
        <Options />
      </div>

      <Whatsapp />

      <Footer />
    </Box>
  )
}
