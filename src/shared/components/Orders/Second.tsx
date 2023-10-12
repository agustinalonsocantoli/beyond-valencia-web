import { OrdersDataInt, ProductInt } from "@/interfaces/orders.model";
import { Orders } from "../Custom/Orders";
import { Box, Flex, Text } from "@chakra-ui/react";
import { isMobile } from "react-device-detect";

interface Props {
    title: string;
    subtitle: string;
    small: number;
    setSmall: (action: number) => void;
    medium: number;
    setMedium: (action: number) => void;
    normal: number;
    setNormal: (action: number) => void;
    data: OrdersDataInt;
    product: ProductInt | undefined;
}

export const Second = (props: Props) => {
    const {
        title,
        subtitle,
        small,
        setSmall,
        medium,
        setMedium,
        normal,
        setNormal,
        data,
        product,
    } = props;
    const { s, m, n } = data;

    return (
        <Box
            width="70%"
            m="auto"
            mt="50px"
            mb="80px"
        >
            <Text
                as="h2"
                fontSize="40px"
                fontWeight="700"
            >
                {title}
            </Text>

            <Text
                as="h3"
                w="50%"
                color="#6D6D6D"
                mb="20px"
                fontSize="15px"
                fontWeight="700"
            >
                {subtitle}
            </Text>

            <Flex
                direction="column"
            >
                <Flex
                    justifyContent="space-between"
                    alignItems="center"
                    border="1px solid #000000"
                    rounded="20px"
                    p="10px 15px 10px 70px"
                    color="#000"
                    fontWeight="700"
                    fontSize="17px"
                    mt="10px"
                >
                    <Text as="span">{s.name}</Text>
                    <Orders type={small} setType={setSmall} />
                </Flex>

                <Flex
                    justifyContent="space-between"
                    mr="5%"
                    p="10px 15px 10px 70px"
                    mb="10px"
                >
                    <Flex
                        direction="column"
                        fontWeight="400"
                        fontSize="15px"
                    >
                        <Text as="span">{s.description}</Text>
                        <Text as="span">{s.others}</Text>
                    </Flex>

                    <Text as="span">
                        <Text as="span">Price per item {product?.price?.small}€</Text>
                    </Text>
                </Flex>
            </Flex>

            <Flex
                direction="column"
            >
                <Flex
                    justifyContent="space-between"
                    alignItems="center"
                    border="1px solid #000000"
                    rounded="20px"
                    p="10px 15px 10px 70px"
                    color="#000"
                    fontWeight="700"
                    fontSize="17px"
                    mt="10px"
                >
                    <Text as="span">{m.name}</Text>
                    <Orders type={medium} setType={setMedium} />
                </Flex>

                <Flex
                    justifyContent="space-between"
                    mr="5%"
                    p="10px 15px 10px 70px"
                    mb="10px"
                >
                    <Flex
                                                direction="column"
                                                fontWeight="400"
                                                fontSize="15px"
                    >
                        <Text as="span">{m.description}</Text>
                        <Text as="span">{m.others}</Text>
                    </Flex>

                    <Text as="span">
                        <Text as="span">Price per item {product?.price.medium}€</Text>
                    </Text>
                </Flex>
            </Flex>

            <Flex
                direction="column"
            >
                <Flex
                    justifyContent="space-between"
                    alignItems="center"
                    border="1px solid #000000"
                    rounded="20px"
                    p="10px 15px 10px 70px"
                    color="#000"
                    fontWeight="700"
                    fontSize="17px"
                    mt="10px"
                >
                    <Text as="span">{n.name}</Text>
                    <Orders type={normal} setType={setNormal} />
                </Flex>

                <Flex
                    justifyContent="space-between"
                    mr="5%"
                    p="10px 15px 10px 70px"
                >
                    <Flex
                        direction="column"
                        fontWeight="400"
                        fontSize="15px" 
                        w={isMobile ? '55%' : '50%'}
                    >
                        <Text as="span">{n.description}</Text>
                        <Text as="span">{n.others}</Text>
                    </Flex>

                    {!product?.price?.normal
                        ?
                        <Text as="span">Free</Text>
                        :
                        <Text as="span">
                            <Text as="span">Price per item {product?.price?.normal}€</Text>
                        </Text>
                    }

                </Flex>
            </Flex>
        </Box>
    );
};

