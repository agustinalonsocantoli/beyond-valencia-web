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
            gridTemplateColumns="repeat(3, 1fr)"
            gap="10px"
            pb="30px"
            bg="#000000"
        >
            {
                data?.map((item: MultimediaInt, index: number) => (
                    <Box
                        key={index}
                        gridColumn={
                            index === 0 ? "1 / 2" :
                                index === 1 ? "2 / 3" :
                                    index === 2 ? "3 / 4" : "2 / 4"
                        }
                        gridRow={
                            index === 0 ? "1 / 3" :
                                index === 1 ? "1 / 2" :
                                    index === 2 ? "1 / 2" : "2 / 3"
                        }
                        pos="relative"
                        border={fromCall === "landing" ? "1px solid #FFF" : "none"}
                        rounded={fromCall === "landing" ? "20px" : "0"}
                        overflow="hidden"
                        height={index === 0 ? "560px" : "275px"}
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