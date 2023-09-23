import lockers from '../../../../public/Options/lockers.jpg';
import bikes from '../../../../public/Options/bikes.jpg';
import Link from 'next/link';
import Image from 'next/image';
import { Box, Flex, Text } from '@chakra-ui/react';

export const Options = () => {
    return (
        <Flex
            h="100vh"
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

                <Link
                    style={{
                        position: "absolute",
                        top: "40%",
                        left: "10%",
                        padding: "10px 25px",
                        background: "rgba(0, 0, 0, .7)",
                        borderRadius: "12px"
                    }}
                    href="/lockers"
                >
                    <Text
                        as="h1"
                        color="#FFFFFF"
                        fontSize="80px"
                        fontWeight="600"
                    >
                        LOCKERS &
                    </Text>

                    <Text
                        as="h1"
                        color="#FFFFFF"
                        fontSize="80px"
                        fontWeight="600"
                        mt="-50px"
                    >
                        CONSIGNAS
                    </Text>

                </Link>
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

                <Link
                    style={{
                        position: "absolute",
                        top: "40%",
                        left: "25%",
                        padding: "10px 25px",
                        background: "rgba(0, 0, 0, .7)",
                        borderRadius: "12px"
                    }}
                    href="/bikes"
                >
                    <Text
                        as="h1"
                        color="#FFFFFF"
                        fontSize="80px"
                        fontWeight="600"
                    >
                        BIKE
                    </Text>

                    <Text
                        as="h1"
                        color="#FFFFFF"
                        fontSize="80px"
                        fontWeight="600"
                        mt="-50px"
                    >
                        RENTAL
                    </Text>

                </Link>
            </Box>
        </Flex>
    );
};