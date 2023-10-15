// Interfaces
import { OrdersGroupsInt } from "@/interfaces/books.model";
import { Box, Button, Flex, Text } from "@chakra-ui/react";

interface Props {
    handleSelect: (type: string) => void;
    groups: any[]
}

export const SelectGroup = ({ handleSelect, groups }: Props) => {

    return (
        <Box>
            {groups?.map((order: OrdersGroupsInt, i: number) => (
                <Flex
                    key={i}
                    justifyContent="space-between"
                    alignItems="center"
                    p="10px"
                    rounded="8px"
                    border="1px solid rgba(0, 0, 0, 1)"
                    pos="relative"
                    minW={{base: "300px", xs: "400px", lg: "350px"}}
                    mb="10px"
                >
                    <Flex
                        alignItems="center"
                    >
                        <Text
                            as="h3"
                            width="50%"
                            fontSize="20px"
                            fontWeight="600"
                        >
                            {order.title}
                        </Text>

                        <Box>
                            <Text 
                                as="h4"
                                fontSize="16px"
                                fontWeight="600"
                                textDecoration="underline"
                            >
                                Price
                            </Text>

                            {order?.prices?.adults && 
                                <Text
                                    as="h5"
                                    fontSize="13px"
                                    fontWeight="300"
                                >
                                    Adults €{order?.prices?.adults}
                                </Text>
                            }

                            {order?.prices?.children && 
                                <Text
                                    as="h5"
                                    fontSize="13px"
                                    fontWeight="300"
                                >
                                    Children €{order?.prices?.children}
                                </Text>
                            }
                        </Box>
                    </Flex>

                    <Box
                        w="30%"
                        textAlign="center"
                    >
                        <Button
                            border="none"
                            bg="rgba(0, 0, 0, .7)"
                            rounded="20px"
                            w="100%"
                            padding="10px"
                            h="fit-content"
                            color="#FFF"
                            fontWeight="300"
                            fontSize="12px"
                            _active={{ transform: "scale()0.9", transition: "all 200ms ease" }}
                            _hover={{ bg: "rgba(0, 0, 0, 1)" }}
                            onClick={() => {
                                handleSelect(order?.type);
                            }}
                        >
                            Select
                        </Button>
                    </Box>
                </Flex>
            ))}
        </Box>
    );
};