import { Box, Grid, Text } from "@chakra-ui/react";

export const Events = () => {
    return(
        <Grid 
            bg="#FFFFFF"
            gridTemplateColumns={{ 
                base: "repeat(1, 1fr)", 
                lg: "60% 40%"
            }}
            mt={{ 
                base: "40px", 
                lg: "50px"
            }}
            mb="70px"
        >
            <Box>
                <Text
                    as="h1"
                    fontSize={{ base: "45px", xs: "50px", sm: "50px", md: "50px", lg: "70px"}}
                    w={{ base: "100%", lg: "80%"}}
                    pl={{ base: "0", lg: "120px"}}
                    p={{ base: "0 10px", xs: "0 10px", sm: "0 10px", md: "0 10px", lg: "0"}}
                    mt="-10px"
                    mb={{ base: "30px", lg: "0px"}}
                    fontWeight="600"
                >
                    Our upcoming events
                </Text>
            </Box>

            <Box 
                mr={{ base: "0", lg: "20px"}}
                p={{ base: "0 10px", xs: "0 10px", sm: "0 10px", md: "0 10px", lg: "0"}}

            >
                <Box>
                    <Text 
                        as="h3"
                        fontSize={{ base: "25px", xs: "30px", lg: "32px"}}
                        mb="5px"
                        w="80%"
                    >
                        Niña Pastori in Valencia
                    </Text>

                    <Text
                        w={{ base: "100%", lg: "80%" }}
                        fontSize={{ base: "17px", xs: "20px" }}
                        color="#868686"
                        fontWeight="300"
                    >
                        She will present her latest album, “Camino” It's sure to be an unforgettable concert, tickets are now available on the platform
                    </Text>

                    <Text
                        w={{ base: "100%", lg: "80%" }}
                        fontSize={{ base: "17px", xs: "20px" }}
                        color="#868686"
                        fontWeight="600"
                        mb="40px"
                    >
                        Palacio de Conciertos de Valencia || May 27 
                    </Text>
                </Box>

                <Box>
                    <Text 
                        as="h3"
                        fontSize={{ base: "25px", xs: "30px", lg: "32px"}}
                        mb="5px"
                        w="80%"
                    >
                        <Text as="span" color="#868686">10 Sentidos:</Text> The most spectacular living arts festival 
                    </Text>

                    <Text
                        w={{ base: "100%", lg: "80%" }}
                        fontSize={{ base: "17px", xs: "20px" }}
                        color="#868686"
                        fontWeight="300"
                    >
                        Established and up-and-coming talents come together in the city, for shining a light on art's as a catalyst for social action
                    </Text>

                    <Text
                        w={{ base: "100%", lg: "80%" }}
                        fontSize={{ base: "17px", xs: "20px" }}
                        color="#868686"
                        fontWeight="600"
                        mb="40px"
                    >
                        Rio Turia  || Until May 21st
                    </Text>
                </Box>

                <Box>
                    <Text 
                        as="h3"
                        fontSize={{ base: "25px", xs: "30px", lg: "32px"}}
                        mb="5px"
                        w="80%"
                    >
                        <Text as="span" color="#868686">Concerts</Text> at La Pergola in the Marina
                    </Text>

                    <Text
                        w={{ base: "100%", lg: "80%" }}
                        fontSize={{ base: "17px", xs: "20px" }}
                        color="#868686"
                        fontWeight="300"
                    >
                        The Concert Series in La Pergola at the Valencia Marina is back with artists of all kinds. An event that no music lover can miss.
                    </Text>

                    <Text
                        w={{ base: "100%", lg: "80%" }}
                        fontSize={{ base: "17px", xs: "20px" }}
                        color="#868686"
                        fontWeight="600"
                        mb="40px"
                    >
                        Rio Turia  || Last one on June 3rd
                    </Text>
                </Box>

            </Box>
        </Grid>
    );
}