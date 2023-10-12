// Interfaces
import { OrdersDataInt } from "@/interfaces/orders.model";
import { Button, Flex, FormLabel, Input, Text } from "@chakra-ui/react";

interface Props {
    small: number;
    medium: number;
    normal: number;
    subTotal: number;
    validateCode: (action: any) => void;
    handleGetCode: (action: any) => void;
    discount: number;
    totalPay: number;
    data: OrdersDataInt;
}

export const CodeOrders = (props: Props) => {
    const { small, medium, normal, subTotal, validateCode, handleGetCode, discount, totalPay, data } = props;
    const { s, m, n } = data;

    return (
        <Flex
            flex="1"
            direction="column"
            border="1px solid #000000"
            p="10px"
            rounded="12px"
            justifyContent="space-between"
        >
            {small > 0 &&
                <Text
                    as="h3"
                    fontSize="15px"
                    fontWeight="400"
                >
                    {s.name} x {small}
                </Text>
            }

            {medium > 0 &&
                <Text
                    as="h3"
                    fontSize="15px"
                    fontWeight="400"
                >
                    {m.name} x {medium}
                </Text>
            }

            {normal > 0 &&
                <Text
                    as="h3"
                    fontSize="15px"
                    fontWeight="400"
                >
                    {n.name} x {normal}
                </Text>
            }

            <Text
                as="h2"
                fontSize="18px"
                fontWeight="600"
                m="5px 0 5px 0"
            >
                Subtotal €{subTotal}
            </Text>

            <Text
                fontSize="13px"
                color="rgb(198, 40, 40)"
                fontWeight="600"
                mb="5px"
            >
                Si te alojas con uno de nuestros socios solicita el codígo para obtener un descuento.
            </Text>

            <FormLabel
                fontSize="15px"
                fontWeight="600"
                mb="5px"
            >
                Enter your code here!
            </FormLabel>

            <Flex
                direction="column"
                gap="15px"
            >
                <Input 
                    type="text" 
                    name="discountCode" 
                    onChange={handleGetCode}
                    outline="none"
                    p="5px 2px"
                    fontSize="13px"
                    rounded="0"
                    h="fit-content"
                    fontWeight="300"
                    w="60%"
                    border="1px solid rgb(198, 40, 40)"
                />

                <Button
                    border="none"
                    w="60%"
                    bg="rgba(0, 0, 0, .7)"
                    p="7px 15px"
                    rounded="20px"
                    color="#FFFFFF"
                    fontWeight="400"
                    fontSize="15px"
                    outline="none"
                    mb="10px"
                    textTransform="uppercase"
                    h="fit-content"
                    onClick={validateCode}
                    _active={{
                        transform: "scale(0.9)",
                        transition: "all 200ms ease"
                    }}
                    _hover={{
                        bg: "rgba(0, 0, 0, 1)"
                    }}
                >
                    Validate Code
                </Button>
            </Flex>

            <Text
                as="h3"
                fontSize="15px"
                fontWeight="400"
            >
                Discount %{discount}
            </Text>

            <Text
                as="h2"
                fontSize="18px"
                fontWeight="600"
                ml="auto"
            >
                Total €{totalPay}
            </Text>
        </Flex>
    );
}