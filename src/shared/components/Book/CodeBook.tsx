import { PricesInt } from "@/interfaces/ExperiencesInt";
import { Button, Flex, FormLabel, Input, Text } from "@chakra-ui/react";

interface Props {
    adults: number;
    children: number;
    subTotal: number;
    validateCode: (action: any) => void;
    handleGetCode: (action: any) => void;
    discount: number;
    totalPay: number | null;
    date: any;
    time: string | null;
    prices: PricesInt | undefined;
}

export const CodeBook = (props: Props) => {
    const { adults, children, subTotal, validateCode, handleGetCode, discount, totalPay, date, time, prices } = props;

    return (
        <Flex
            direction="column"
            border="1px solid #000"
            mb="20px"
            p="10px"
            rounded="12px"
            w="400px"
        >
            <Flex
                justifyContent="space-between"
                mr="10px"
            >
                <Flex
                    alignItems="start"
                    direction="column"
                    gap="0"
                >
                    {prices?.adults &&
                        <Text
                            as="h3"
                            fontSize="15px"
                            fontWeight="400px"
                        >
                            Adults {adults !== null ? adults : 0} x €{prices?.adults}
                        </Text>
                    }

                    {prices?.children &&
                        <Text
                            as="h3"
                            fontSize="15px"
                            fontWeight="400px"
                        >
                            Children {children !== null ? children : 0} x €{prices?.children}
                        </Text>
                    }
                </Flex>

                <Flex
                    alignItems="start"
                    direction="column"
                    gap="0"
                >
                    {date &&
                        <Text
                            as="h3"
                            fontSize="15px"
                            fontWeight="400px"
                        >
                            Date: {date}
                        </Text>
                    }

                    {time &&
                        <Text
                            as="h3"
                            fontSize="15px"
                            fontWeight="400px"
                        >
                            Time: {time}
                        </Text>
                    }
                </Flex>
            </Flex>

            <Text
                as="h2"
                fontSize="18px"
                fontWeight="600"
                m="5px 0 5px 0"
            >
                Subtotal €{subTotal}
            </Text>

            <Text
                fontSize="10px"
                color="rgb(198, 40, 40)"
                fontWeight="600"
                mb="5px"
            >
                Si te alojas con uno de nuestros socios pidele el codigo para obtener un descuento.
            </Text>

            <FormLabel
                fontSize="15px"
                fontWeight="600"
                mb="5px"
            >
                Enter your code here!
            </FormLabel>

            <Flex
                gap="15px"
                alignItems="center"
            >
                <Input 
                    type="text" 
                    name="discountCode" 
                    onChange={handleGetCode} 
                    outline="none"
                    fontSize="13px"
                    fontWeight="300"
                    mb="5px"
                    w="60%"
                    border="1px solid rgb(198, 40, 40)"
                />

                <Button 
                    onClick={validateCode}
                    border="none"
                    bg="rgba(0, 0, 0, .7)"
                    p="7px 15px"
                    h="fit-content"
                    rounded="20px"
                    color="#FFF"
                    fontWeight="300"
                    fontSize="13px"
                    mb="7px"
                    outline="none"
                    _active={{ transform: "scale(0.9)", transition: "all 200ms ease" }}
                    _hover={{ bg: "rgba(0, 0, 0, 1)" }}
                >
                    Validate Code
                </Button>
            </Flex>

            <Text
                as="h3"
                fontSize="15px"
                fontWeight="400px"
            >
                Discount %{discount}
            </Text>

            <Text
                as="h2"
                fontSize="18px"
                fontWeight="600"
                m="5px 0 5px 0"
                ml="auto"
            >
                Total €{totalPay}
            </Text>
        </Flex>
    );
};