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
                pl="175px"
            >
                <Text 
                    as='h1'
                    pt="20px"
                    fontSize='60px'
                    fontWeight="600"
                >
                    {data?.h1}
                </Text>

                <Text
                    as="h2"
                    w="25%"
                    textAlign="center"
                    mb="60px"
                    bg="#FFFFFF"
                    color="#000000"
                    rounded="50px"
                    p="12px 0"
                    fontSize="18px"
                    fontWeight="600"
                    letterSpacing="1.5px"
                >
                    {data?.navigate
                        ? <a href={data?.navigate}>{data?.h2}</a>
                        : data?.h2
                    }
                </Text>
            </Flex>

            <Flex
                // style={{ padding: resposive ? "15px 5%" : "15px 3%" }}
                style={{ padding: "15px 5%" }}
                mb="150px"
            >
                <Flex 
                    position="relative" 
                    gap="70px"
                    mb="-50px"
                >
                    {
                        data?.content?.map((item: ContentInt, index: number) => (
                            <ChakraLink
                                as={Link}
                                key={index} 
                                href={item?.link}
                                display="flex"
                                flex="1"
                                minHeight="600px"
                                position="relative"
                                _hover={{
                                    transform: "scale(1.05)",
                                    transition: "all 1s ease-in-out"
                                }}
                                _after={{
                                    content: '""',
                                    position: "absolute",
                                    width: "100%",
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