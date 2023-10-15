import { OrdersDataInt, ProductInt } from "@/interfaces/orders.model";
import { Orders } from "../Custom/Orders";
import { Box, Flex, Text } from "@chakra-ui/react";

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
            m="auto"
            mb="80px"
            mt={{ base: "20px", xs: "30px", lg: "45px" }}
            w={{ base: "85%", md: "75%", lg: "70%" }}
        >
            <Text
                as="h2"
                fontSize={{ base: "30px", xs: "35px", lg: "40px" }}
                fontWeight="700"
            >
                {title}
            </Text>

            <Text
                as="h3"
                w={{ base: "80%", xs: "60%", lg: "50%" }}
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
                    p={{ base: "5px 15px 5px 70px", xs: "10px 15px 10px 70px" }}
                    color="#000"
                    fontWeight="700"
                    fontSize={{ base: "15px", xs: "17px" }}
                    mt="10px"
                >
                    <Text as="span">{s.name}</Text>
                    <Orders type={small} setType={setSmall} />
                </Flex>

                <Flex
                    justifyContent="space-between"
                    mr="5%"
                    p={{ base: "5px 15px 5px 70px", xs: "10px 15px 10px 70px" }}
                    mb={{ base: "5px", xs: "10px" }}
                >
                    <Flex
                        direction="column"
                        fontWeight="400"
                        fontSize={{ base: "10px", xs: "15px" }}
                    >
                        <Text as="span">{s.description}</Text>
                        <Text as="span">{s.others}</Text>
                    </Flex>

                    <Text as="span" fontSize={{ base: "10px", xs: "15px" }}>
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
                    p={{ base: "5px 15px 5px 70px", xs: "10px 15px 10px 70px" }}
                    color="#000"
                    fontWeight="700"
                    fontSize={{ base: "15px", xs: "17px" }}
                    mt="10px"
                >
                    <Text as="span">{m.name}</Text>
                    <Orders type={medium} setType={setMedium} />
                </Flex>

                <Flex
                    justifyContent="space-between"
                    mr="5%"
                    p={{ base: "5px 15px 5px 70px", xs: "10px 15px 10px 70px" }}
                    mb={{ base: "5px", xs: "10px" }}
                >
                    <Flex
                        direction="column"
                        fontWeight="400"
                        fontSize={{ base: "10px", xs: "15px" }}
                    >
                        <Text as="span">{m.description}</Text>
                        <Text as="span">{m.others}</Text>
                    </Flex>

                    <Text as="span"  fontSize={{ base: "10px", xs: "15px" }}>
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
                    p={{base: "5px 15px 5px 70px", xs: "10px 15px 10px 70px"}}
                    color="#000"
                    fontWeight="700"
                    fontSize={{ base: "15px", xs: "17px" }}
                    mt="10px"
                >
                    <Text as="span">{n.name}</Text>
                    <Orders type={normal} setType={setNormal} />
                </Flex>

                <Flex
                    justifyContent="space-between"
                    mr="5%"
                    p={{base: "5px 15px 5px 70px", xs: "10px 15px 10px 70px"}}
                >
                    <Flex
                        direction="column"
                        fontWeight="400"
                        fontSize={{ base: "10px", xs: "15px" }}
                        w={{ base: '55%', xs: '50%'}}
                    >
                        <Text as="span">{n.description}</Text>
                        <Text as="span">{n.others}</Text>
                    </Flex>

                    {!product?.price?.normal
                        ?
                        <Text as="span" fontSize={{ base: "10px", xs: "15px" }}>Free</Text>
                        :
                        <Text as="span"  fontSize={{ base: "10px", xs: "15px" }}>
                            <Text as="span">Price per item {product?.price?.normal}€</Text>
                        </Text>
                    }

                </Flex>
            </Flex>
        </Box>
    );
};

