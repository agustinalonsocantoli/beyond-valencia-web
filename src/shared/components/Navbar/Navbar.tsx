'use client'

import { TfiMenu } from "react-icons/tfi";
import logo from "../../../../public/logoW.png";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Box, Flex, Text, useDisclosure } from "@chakra-ui/react";
import { Menu } from "./Menu";
import { Monoton } from "next/font/google";

const monoton = Monoton({
    subsets: ['latin'],
    display: 'swap',
    weight: ['400']
})

interface Props {
    title: string;
    subtitle: string;
}

export const Navbar = ({ title, subtitle }: Props) => {
    const router = useRouter()
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <Flex
            bg="#000000"
            justifyContent="space-between"
            p={{ base: "0 5px 10px 5px", lg: "10px" }}
            color="#FFFFFF"
        >

            <Flex
                gap="10px"
            >
                <Box
                    position="relative"
                    mt={{base: "0", lg: "28px"}}
                >
                    <Box display={{ base: "block", xs: "none" }}>
                        <TfiMenu
                            onClick={onOpen}
                            style={{
                                fontSize: "22px",
                                cursor: "pointer"
                            }}
                        />
                    </Box>

                    <Box display={{ base: "none", xs: "block", sm: "none" }}>
                        <TfiMenu
                            onClick={onOpen}
                            style={{
                                fontSize: "36px",
                                cursor: "pointer"
                            }}
                        />
                    </Box>

                    <Box display={{ base: "none", sm: "block" }}>
                        <TfiMenu
                            onClick={onOpen}
                            style={{
                                fontSize: "45px",
                                cursor: "pointer"
                            }}
                        />
                    </Box>

                    <Menu
                        isOpen={isOpen}
                        onClose={onClose}
                    />
                </Box>

                <Box
                    display={{ base: "block", xs: "none" }}
                >
                    <Image
                        src={logo} alt="img/logo"
                        onClick={() => router.push("/")}
                        width={120}
                        style={{
                            objectFit: "contain",
                            height: "100%",
                            cursor: "pointer"
                        }}
                    />
                </Box>

                <Box
                    display={{ base: "none", xs: "block" }}
                >
                    <Image
                        src={logo} alt="img/logo"
                        onClick={() => router.push("/")}
                        width={250}
                        style={{
                            objectFit: "contain",
                            height: "100%",
                            cursor: "pointer"
                        }}
                    />
                </Box>
            </Flex>

            <Box
                color="#262626"
                pos="relative"
                pr={{ base: "20px", xs: "50px" }}
                className={monoton.className}
            >
                <Text
                    as="h1"
                    fontSize={{ base: "20px", xs: "50px", lg: "100px" }}
                    ml={{ base: "15px", xs: "0" }}
                    mt={{ base: "10px", xs: "0" }}
                    _after={{
                        content: `'${subtitle}'`,
                        fontSize: { base: "13px", xs: "25px", lg: "50px" },
                        pos: "absolute",
                        top: { base: "50%", xs: "35%", lg: "40%" },
                        right: { base: "12%", lg: "10%" },
                        color: "rgba(255, 255, 255, .8)",
                    }}
                >
                    {title}
                </Text>
            </Box>
        </Flex>
    );
}