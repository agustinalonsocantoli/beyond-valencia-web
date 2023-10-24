import lockers from '../../../../public/Options/lockers.jpg';
import bikes from '../../../../public/Options/bikes.jpg';
import Link from 'next/link';
import Image from 'next/image';
import { Box, Flex, Text, Link as ChakraLink } from '@chakra-ui/react';

export const Options = () => {
    return (
        <Flex
            h={{ base: "auto", lg: "100vh"}}
            w={{ base: "100%", lg: "auto"}}
            direction={{ base: "column", lg: "row"}}
        >
            <Box
                flex="1"
                position="relative"
            >
                <Image
                    src={lockers}
                    alt="img/lockers"
                    style={{
                        objectFit: "cover",
                        width: "100%",
                        height: "100%"
                    }}
                />

                <ChakraLink
                    as={Link}
                    position= "absolute"
                    top= "40%"
                    left={{base: "13%", md: "25%", lg: "10%"}}
                    padding= "10px 25px"
                    background= "rgba(0, 0, 0, .7)"
                    borderRadius= "12px"
                    textDecoration="none"
                    _hover={{ textDecoration: "none" }}
                    href="/lockers"
                >
                    <Text
                        as="h1"
                        color="#FFFFFF"
                        fontSize={{ base: "35px", xs: "60px", md: "80px"}}
                        fontWeight="600"
                    >
                        LOCKERS &
                    </Text>

                    <Text
                        as="h1"
                        color="#FFFFFF"
                        fontSize={{ base: "35px", xs: "60px", md: "80px"}}
                        fontWeight="600"
                        mt={{ base: "0", md: "-50px"}}
                    >
                        CONSIGNAS
                    </Text>

                </ChakraLink>
            </Box>

            <Box w="10px" bg="#000000"/>

            <Box
                flex="1"
                position="relative"
            >
                <Image
                    src={bikes}
                    alt="img/bikes"
                    style={{
                        objectFit: "cover",
                        width: "100%",
                        height: "100%"
                    }}
                />

                <ChakraLink
                    as={Link}
                    position= "absolute"
                    top= "40%"
                    left={{base: "25%", md: "30%", lg: "25%"}}
                    padding= "10px 25px"
                    background= "rgba(0, 0, 0, .7)"
                    borderRadius= "12px"
                    textDecoration="none"
                    _hover={{ textDecoration: "none" }}
                    href="/bikes"
                >
                    <Text
                        as="h1"
                        color="#FFFFFF"
                        fontSize={{ base: "35px", xs: "60px", md: "80px"}}
                        fontWeight="600"
                    >
                        BIKE
                    </Text>

                    <Text
                        as="h1"
                        color="#FFFFFF"
                        fontSize={{ base: "35px", xs: "60px", md: "80px"}}
                        fontWeight="600"
                        mt={{ base: "0", md: "-50px"}}
                    >
                        RENTAL
                    </Text>

                </ChakraLink>
            </Box>
        </Flex >
    );
};