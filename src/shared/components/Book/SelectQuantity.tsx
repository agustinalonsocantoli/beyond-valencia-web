import { Box, Flex, Text } from "@chakra-ui/react";
import { Orders } from "../Custom/Orders";

interface Props {
    adults: number;
    setAdults: (action: number) => void;
    children: any;
    setChildren: (action: number) => void;
    infants: number;
    setInfants: (action: number) => void;
    isDisable?: boolean;
}

export const SelectQuantity = (props: Props) => {
    const { adults, setAdults, children, setChildren, infants, setInfants, isDisable } = props;

    return(
        <Box
            mt="20px"
            mb="20px"
        >
            <Flex
                w="350px"
                justifyContent="space-between"
                alignItems="center"
                mb="10px"
            >
                <Box>
                    <Text 
                        as="h3"
                        fontSize="18px"
                        fontWeight="600px"
                    >
                        Adults
                    </Text>

                    <Text
                        fontSize="10px"
                        fontWeight="300px"
                    >
                        Age 18 - 99
                    </Text>
                </Box>

                <Orders 
                    type={adults} 
                    setType={setAdults} 
                />
            </Flex>

            <Flex
                w="350px"
                justifyContent="space-between"
                alignItems="center"
                mb="10px"
            >
                <Box>
                    <Text 
                        as="h3"
                        fontSize="18px"
                        fontWeight="600px"
                    >
                        Children
                    </Text>

                    <Text
                        fontSize="10px"
                        fontWeight="300px"
                    >
                        Age 6 - 17
                    </Text>
                </Box>

                {isDisable
                    ?
                    <Flex
                        alignItems="center"
                        justifyContent="center"
                    >
                        <Text
                            fontSize="12px"
                            color="#C62828"
                        >
                            Not available
                        </Text>    
                    </Flex>
                    :
                    <Orders 
                        type={children} 
                        setType={setChildren} 
                        isDisable={isDisable}
                    />
                }
            </Flex>

            <Flex
                w="350px"
                justifyContent="space-between"
                alignItems="center"
                mb="10px"
            >
                <Box>
                    <Text 
                        as="h3"
                        fontSize="18px"
                        fontWeight="600px"
                    >
                        Infants
                    </Text>

                    <Text
                        fontSize="10px"
                        fontWeight="300px"
                    >
                        Age 0 - 5
                    </Text>
                </Box>

                {isDisable
                    ?
                    <Flex
                        alignItems="center"
                        justifyContent="center"
                    >
                        <Text
                            fontSize="12px"
                            color="#C62828"
                        >
                            Not available
                        </Text>    
                    </Flex>
                    :
                    <Orders 
                        type={infants} 
                        setType={setInfants}
                        isDisable={isDisable} 
                    />
                }
            </Flex>
        </Box>
    );
};