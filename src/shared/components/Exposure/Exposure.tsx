// Interfaces
import { MultimediaInt } from "@/interfaces/exposure.model";
import { Box, Grid, Link as LinkChakra, Text } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
// React

interface Props {
    data: MultimediaInt[] | undefined;
    fromCall?: "details" | "landing";
}

export const Exposure = ({ data, fromCall = "landing" }: Props) => {

    return (
        <Grid
            gridTemplateColumns={{base: "repeat(1, 1fr)", xs: "repeat(1, 1fr)", sm: "repeat(1, 1fr)", md: "repeat(3, 1fr)"}}
            gap="10px"
            pb={{md: "30px"}}
            p={{xs: "0 3% 10px 3%", sm: "0 3% 10px 3%"}}
            bg="#000000"
        >
            {
                data?.map((item: MultimediaInt, index: number) => (
                    <Box
                        key={index}
                        gridColumn={
                            index === 0 ? {base: "1 / 1", xs: "1 / 1", sm: "1 / 1", md: "1 / 2"} :
                                index === 1 ? {base: "1 / 1", xs: "1 / 1", sm: "1 / 1", md: "2 / 3"} :
                                    index === 2 ? {base: "1 / 1", xs: "1 / 1", sm: "1 / 1", md: "3 / 4"}
                                        : {base: "1 / 1", xs: "1 / 1", sm: "1 / 1", md: "2 / 4"}
                        }
                        gridRow={
                            index === 0 ? {base: "1 / 1", xs: "1 / 1", sm: "1 / 1", md: "1 / 3"} :
                                index === 1 ? {base: "2 / 2", xs: "2 / 2", sm: "2 / 2", md: "1 / 2"} :
                                    index === 2 ? {base: "3 / 3", xs: "3 / 3", sm: "3 / 3", md: "1 / 2"}  
                                        : {base: "4 / 4", xs: "4 / 4", sm: "4 / 4", md: "2 / 3"} 
                        }
                        pos="relative"
                        border={fromCall === "landing" ? "1px solid #FFF" : "none"}
                        rounded={fromCall === "landing" ? "20px" : "0"}
                        overflow="hidden"
                        height={index === 0 ? {base: "550px", xs: "550px", sm: "550px", md: "560px"} : "275px"}
                    >
                        <LinkChakra as={Link} href={item?.navigate ? item?.navigate : ""}>
                            {item?.type === "image" &&
                                <Image
                                    src={item?.src}
                                    alt={`img`}
                                    fill={true}
                                    style={{
                                        objectFit: "cover",
                                        width: "100%",
                                        height: "100%"
                                    }}
                                />
                            }

                            {fromCall === "landing" &&
                                <Box
                                    p={item?.h3 || item?.p ? "5px 0 5px 20px" : 0}
                                    pos="absolute"
                                    color="#FFF"
                                    bottom="0"
                                    left="0"
                                    rounded="0 0 20px 20px"
                                    textAlign="left"
                                    bg="rgba(0, 0, 0, .7)"
                                    w="100%"
                                >
                                    <Text
                                        as="h3"
                                        fontSize="20px"
                                        fontWeight="800"
                                    >
                                        {item?.h3}
                                    </Text>

                                    <Text
                                        fontSize="15px"
                                    >
                                        <Text
                                            as="strong"
                                            mr="3px"
                                        >
                                            {item?.span}
                                        </Text>
                                        {item?.p}
                                    </Text>
                                </Box>
                            }
                        </LinkChakra>
                    </Box>
                ))
            }
        </Grid>
    );
}