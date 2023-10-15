import { ContentInt } from "@/interfaces/ContentInt"
import { DataInt } from "@/interfaces/services.model"
import { Box, Flex, Link as ChakraLink, Text } from "@chakra-ui/react"
import Image from "next/image";
import Link from "next/link"

interface Props {
    data: DataInt | undefined;
}

export const Cards = ({ data }: Props) => {

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
                    {data?.h1}
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
                    {data?.navigate
                        ? <ChakraLink as={Link} href={data?.navigate}>{data?.h2}</ChakraLink>
                        : data?.h2
                    }
                </Text>
            </Flex>

            <Flex
                p={{ base: "15px 5%", xs: "15px 5%", sm: "15px 5%", md: "15px 5%", lg: "15px 5%", xl: "15px 5%", '2xl': "15px 3%"}}
                mb="150px"
            >
                <Flex 
                    position="relative" 
                    gap="70px"
                    mb="-50px"
                    direction={{ base: "column", xs: "column", sm: "column", md: "row", }}
                    // justifyContent={{base: "center"}}
                >
                    {
                        data?.content?.map((item: ContentInt, index: number) => (
                            <ChakraLink
                                as={Link}
                                key={index} 
                                href={item?.link}
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
                </Flex>
            </Flex>
        </Box>
    )
}