import villareal from "../../../../public/img/villarealBanner.jpg";
import Link from 'next/link';
import Image from 'next/image';
import { Box, Drawer, DrawerBody, DrawerContent, DrawerOverlay, Text } from '@chakra-ui/react';

interface Props {
    isOpen: boolean;
    onClose: () => void;
}

export const Menu = ({ isOpen, onClose }: Props) => {

    const links = [
        { href: "/", text: "Home" },
        { href: "/experiences", text: "Experiences" },
        { href: "/daytrips", text: "Day Trips" },
        { href: "/bikes", text: "Bike Rentals" },
        { href: "/lockers", text: "Locker Services" },
        // { href: "/food", text: "Food & Dinning" }, 
        // { href: "/aboutus", text: "About Us" }
    ]

    return (
            <Drawer placement={'left'} onClose={onClose} isOpen={isOpen}>
                <DrawerOverlay />
                <DrawerContent
                        w="300px"
                        boxShadow="0 4px 30px rgba(255, 255, 255, 0.1)"
                        backdropFilter="blur(13px)"
                        bg="rgba(0, 0, 0, 0.1)"
                        display="flex"
                        flexDirection="column"
                        py="10px"
                >
                    <DrawerBody
                        display="flex"
                        flexDir="column"
                        gap="15px"
                    >
                        {links?.map((link: any, index: number) => (
                            <Link 
                                href={link?.href} 
                                key={index}
                                style={{
                                    color: "#000000",
                                    textDecoration: "none",
                                    display: "block",
                                    width: "100%",
                                    textAlign: "center",
                                    cursor: "pointer"
                                }}
                            >
                                <Text
                                    as={"span"}
                                    p="7px"
                                    display="block"
                                    w="100%"
                                    fontSize="20px"
                                    fontWeight="300"
                                    borderRadius="8px"
                                    bg={link?.text === "Bike Rentals" || link?.text === "Locker Services" 
                                        ? "rgba(255, 230, 103)" 
                                        : "rgba(255, 255, 255, .7)"
                                    }
                                    _hover={{ bg: "rgba(255, 230, 103, .5)"}}
                                    _active={{ transform: "scale(.9)" }}
                                >
                                    {link?.text}
                                </Text>
                            </Link>
                        ))}

                        <Box
                            bg="rgba(255, 230, 103, .3)"
                            p="15px"
                            rounded="12px"
                            color="#FFFFFF"
                            mt="15px"
                        >
                            <Text
                                textAlign="center"
                                marginBottom="10px"
                                fontSize="20px"
                                fontWeight="700"
                            >
                                Villareal CF en un dia
                            </Text>

                            <Image 
                                src={villareal} 
                                alt="img/villareal" 
                                style={{
                                    objectFit: "contain",
                                    height: "auto",
                                    width: "100%",
                                    borderRadius: "8px",
                                }}
                            />

                            <p>Celebra con nosotros los 100 años de club Español "Campeon de La Liga Europea"</p>
                            <Text
                                as="span"
                                padding="7px"
                                display="block"
                                w="100%"
                                fontSize="15px"
                                fontWeight="600"
                                rounded="8px"
                                bg="rgba(255, 230, 103)"
                                textAlign="center"
                                mt="30px"
                                color="#000000"
                                textTransform="uppercase"
                                cursor="pointer"
                                _hover={{ bg: "rgba(255, 230, 103, .5)"}}
                                _active={{ transform: "scale(.9)" }}
                            >
                                <Link href={"/"}>
                                    BOOK NOW
                                </Link>
                            </Text>
                        </Box>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
    );
};