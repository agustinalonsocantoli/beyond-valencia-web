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
            p="10px"
            color="#FFFFFF"
        >

            <Flex
                gap="20px"
            >
                <Box 
                    position="relative"
                    mt="38px"
                >
                    <TfiMenu 
                        onClick={onOpen} 
                        style={{
                            fontSize: "36px",
                            cursos: "pointer"
                        }}
                    />

                    <Menu
                        isOpen={isOpen}
                        onClose={onClose}
                    />
                </Box>

                <Image
                    src={logo} alt="img/logo"
                    onClick={() => router.push("/")}
                    width={190}
                    style={{
                        objectFit: "contain",
                        height: "100%",
                        cursor: "pointer"
                    }}
                />
            </Flex>

            <Box 
                color="#262626"
                pos="relative"
                pr="50px"
                className={monoton.className}
            >
                <Text 
                    fontSize="100px"
                    _after={{
                        content: `'${subtitle}'`,
                        fontSize: "50px",
                        pos: "absolute",
                        top: "40%",
                        right: "10%",
                        color: "rgba(255, 255, 255, .8)",
                    }}
                >
                    {title}
                </Text>
            </Box>
        </Flex>
    );
}