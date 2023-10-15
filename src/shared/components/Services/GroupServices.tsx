'use client'

// interfaces
import { ContentInt, DataInt } from "../../../interfaces/services.model"
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/react';
import Link from "next/link";
import { Box, Flex, Text, Link as ChakraLink } from "@chakra-ui/react";
import Image from "next/image";

interface Props {
    sliderPage1: DataInt | undefined;
    sliderPage2?: ContentInt[];
    sliderPage3?: ContentInt[];
}

export const GroupServices = (props: Props) => {
    const { sliderPage1, sliderPage2, sliderPage3, } = props;

    return (
        <Box
            bg="#000000"
            mt="-10px"
            color="#FFFFFF"
        >
            <Flex
                direction="column"
                gap="40px"
                pl={{ base: "10%", xs: "10%", sm: "10%", md: "10%", lg: "10%", xl: "175px"}}
            >
                <Text
                    as='h1'
                    pt="20px"
                    fontSize={{ base: "18px", xs: "30px", sm: "30px", md: "30px", lg: "45px", xl: "60px"}}
                    fontWeight="600"
                >
                    {sliderPage1?.h1}
                </Text>

                <Text
                    as="h2"
                    w={{ base: "80%", xs: "40%", sm: "40%", md: "40%", lg: "30%", xl: "25%"}}
                    textAlign="center"
                    mb="60px"
                    bg="#FFFFFF"
                    color="#000000"
                    rounded="50px"
                    p="12px 0"
                    fontSize={{base: "15px", xs: "18px"}}
                    fontWeight="600"
                    letterSpacing="1.5px"
                >
                    {sliderPage1?.navigate
                        ? <a href={sliderPage1?.navigate}>{sliderPage1?.h2}</a>
                        : sliderPage1?.h2
                    }
                </Text>
            </Flex>

            <Swiper
                modules={[Navigation]}
                navigation
                spaceBetween={80}
                slidesPerView={1}
                style={{ padding: "15px 3%" }}
            >
                <SwiperSlide
                    style={{
                        gap: "70px",
                        position: "relative",
                        marginBottom: "-50px",
                        display: "flex"

                    }}
                >
                    {
                        sliderPage1?.content?.map((item: ContentInt, index: number) => (
                            <ChakraLink
                                as={Link}
                                key={index}
                                href={item?.link}
                                display="flex"
                                flex="1"
                                minHeight="600px"
                                position="relative"
                                _hover={{
                                    base: {
                                        transform: "scale(1)"
                                    },
                                    md:{
                                        transform: "scale(1.05)",
                                        transition: "all 1s ease-in-out"
                                    }
                                }}
                                _after={{
                                    content: '""',
                                    position: "absolute",
                                    top: "0",
                                    right: "0",
                                    left: "0",
                                    bottom: "0",
                                    width: "385px",
                                    height: "100%",
                                    backgroundColor: "rgba(0, 0, 0, .4)",
                                    borderRadius: "20px"
                                }}
                            >
                                <Image
                                    src={item?.img}
                                    alt={`img/${item?.h3}`}
                                    width={385}
                                    height={600}
                                    style={{
                                        objectFit: "cover",
                                        height: "100%",
                                        borderRadius: "20px"
                                    }}
                                />

                                <Box
                                    pos="absolute"
                                    bottom="30px"
                                    color="#FFFFFF"
                                    zIndex="99"
                                    w="70%"
                                    left="0"
                                    right="0"
                                    m="auto"
                                >
                                    <Text
                                        as="h3"
                                        fontSize="30px"
                                    >
                                        {item?.h3}
                                    </Text>

                                    <Text
                                        fontSize="20px"
                                        w="93%"
                                    >
                                        {item?.p}
                                    </Text>
                                </Box>
                            </ChakraLink>
                        ))
                    }
                </SwiperSlide>


                {sliderPage2 &&
                    <SwiperSlide
                        style={{
                            gap: "70px",
                            position: "relative",
                            marginBottom: "-50px",
                            display: "flex"

                        }}
                    >
                        {
                            sliderPage2?.map((item: ContentInt, index: number) => (
                                <ChakraLink
                                    as={Link}
                                    key={index}
                                    href={item?.link}
                                    display="flex"
                                    flex="1"
                                    minHeight="600px"
                                    position="relative"
                                    _hover={{
                                        base: {
                                            transform: "scale(1)"
                                        },
                                        md:{
                                            transform: "scale(1.05)",
                                            transition: "all 1s ease-in-out"
                                        }
                                    }}
                                    _after={{
                                        content: '""',
                                        position: "absolute",
                                        top: "0",
                                        right: "0",
                                        left: "0",
                                        bottom: "0",
                                        width: "385px",
                                        height: "100%",
                                        backgroundColor: "rgba(0, 0, 0, .4)",
                                        borderRadius: "20px"
                                    }}
                                >
                                    <Image
                                        src={item?.img}
                                        alt={`img/${item?.h3}`}
                                        width={385}
                                        height={600}
                                        style={{
                                            objectFit: "cover",
                                            height: "100%",
                                            borderRadius: "20px"
                                        }}
                                    />

                                    <Box
                                        pos="absolute"
                                        bottom="30px"
                                        color="#FFFFFF"
                                        zIndex="99"
                                        w="70%"
                                        left="0"
                                        right="0"
                                        m="auto"
                                    >
                                        <Text
                                            as="h3"
                                            fontSize="30px"
                                        >
                                            {item?.h3}
                                        </Text>

                                        <Text
                                            fontSize="20px"
                                            w="93%"
                                        >
                                            {item?.p}
                                        </Text>
                                    </Box>
                                </ChakraLink>
                            ))
                        }
                    </SwiperSlide>
                }

                {sliderPage3 &&
                    <SwiperSlide
                        style={{
                            gap: "70px",
                            position: "relative",
                            marginBottom: "-50px",
                            display: "flex"

                        }}
                    >
                        {
                            sliderPage3?.map((item: ContentInt, index: number) => (
                                <ChakraLink
                                    as={Link}
                                    key={index}
                                    href={item?.link}
                                    display="flex"
                                    flex="1"
                                    minHeight="600px"
                                    position="relative"
                                    _hover={{
                                        base: {
                                            transform: "scale(1)"
                                        },
                                        md:{
                                            transform: "scale(1.05)",
                                            transition: "all 1s ease-in-out"
                                        }
                                    }}
                                    _after={{
                                        content: '""',
                                        position: "absolute",
                                        top: "0",
                                        right: "0",
                                        left: "0",
                                        bottom: "0",
                                        width: "385px",
                                        height: "100%",
                                        backgroundColor: "rgba(0, 0, 0, .4)",
                                        borderRadius: "20px"
                                    }}
                                >
                                    <Image
                                        src={item?.img}
                                        alt={`img/${item?.h3}`}
                                        width={385}
                                        height={600}
                                        style={{
                                            objectFit: "cover",
                                            height: "100%",
                                            borderRadius: "20px"
                                        }}
                                    />

                                    <Box
                                        pos="absolute"
                                        bottom="30px"
                                        color="#FFFFFF"
                                        zIndex="99"
                                        w="70%"
                                        left="0"
                                        right="0"
                                        m="auto"
                                    >
                                        <Text
                                            as="h3"
                                            fontSize="30px"
                                        >
                                            {item?.h3}
                                        </Text>

                                        <Text
                                            fontSize="20px"
                                            w="93%"
                                        >
                                            {item?.p}
                                        </Text>
                                    </Box>
                                </ChakraLink>
                            ))
                        }
                    </SwiperSlide>
                }
            </Swiper>

            <Box
                h="100px"
                bg="#FFFFFF"
                mt="-50px"
            />

        </Box>
    );
}