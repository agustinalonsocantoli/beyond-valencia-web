// Interfaces
import { ProductInt } from "@/interfaces/orders.model";
import { TypeProductEnum } from "@/shared/utils/types/types";
import { Box, Flex, FormLabel, Grid, Select, Text } from "@chakra-ui/react";

interface Props {
    title: string;
    subtitle: string;
    time: string | null;
    setTime: (action: string) => void;
    products: ProductInt[] | undefined;
    setPage: (action: any) => void;
}

export const First = (props: Props) => {
    const { title, subtitle, time, setTime, products, setPage } = props;

    return (
        <Box
            m="auto"
            mt={{base: "20px", xs: "30px", lg: "50px"}}
            w={{base: "85%", md: "75%", lg: "70%"}}
        >
            <Text
                as="h2"
                fontSize={{base: "30px", xs: "35px", lg: "40px"}}
                fontWeight="700"
            >
                {title}
            </Text>
            
            <Text
                as="h3"
                w={{base: "80%", xs: "60%" ,lg: "50%"}}
                fontSize="15px"
                color="#6D6D6D"
                fontWeight="700"
            >
                {subtitle}
            </Text>

            <Grid
                gridTemplateColumns="repeat(2, 1fr)"
                mt={{base: "30px", xs: "50px"}}
                gap={{base: "15px", xs: "20px", lg: "30px"}}
                mb={{base: "80px", xs: "0"}}
                justifyItems="center"
                textAlign="center"
            >
                {products?.map((product: ProductInt, index: number) => {
                    if (product.type === TypeProductEnum.LONGER)
                        return (
                            <Flex 
                                key={index}
                                direction="column"
                                gridColumn="1 / 3"
                                ml={{base: "70px", xs: "170px"}}
                                mt="20px"
                                w="100%"
                            >
                                <Flex
                                    alignItems="center"
                                    gap="10px"
                                    w="100%"
                                >
                                    <Text
                                        color="#000000"
                                        fontWeight="700"
                                        fontSize={{base: "15px", xs: "17px"}}
                                        mb="5px"
                                        w="30%"
                                    >
                                        {product.title}
                                    </Text>
                                    
                                    <Select 
                                        w="50%"
                                        name='longerTime' 
                                        defaultValue="default" 
                                        border="1px solid #000000"
                                        rounded="20px"
                                        color="#000000"
                                        fontWeight="700"
                                        fontSize={{base: "15px", xs: "17px"}}
                                        bg="transparent"
                                        textAlign="center"
                                        outline="none"
                                        mb="5px"
                                        cursor="pointer"
                                        iconColor="transparent"
                                        onChange={(e) => {
                                            setTime(e.target.value);
                                            setPage((prev: number) => prev + 1);
                                        }}
                                    >
                                        <option value="default" disabled>How many days?</option>
                                        
                                        {product?.select?.map((item: string, index: number) => (
                                            <option key={index} value={item}>{index + 2}</option>
                                        ))}
                                    </Select>
                                </Flex>

                                <Text 
                                    as="span"
                                    ml="80px"
                                >
                                    {product.description}
                                </Text>
                            </Flex>
                        );

                    return (
                        <Flex
                            direction="column"
                            key={index}
                        >
                            <Text
                                as="span"
                                border="1px solid #000"
                                rounded="20px"
                                p={{base: "10px 50px", xs: "10px 70px"}}
                                color="#000000"
                                fontWeight="700"
                                fontSize={{base: "15px", xs: "17px"}}
                                mb="5px"
                                cursor="pointer"
                                onClick={() => {
                                    setTime(product?.select);
                                    setPage((prev: number) => prev + 1);
                                }}
                            >
                                {product.title}
                            </Text>

                            <Text
                                as="span"
                                fontSize="15px"
                                fontWeight="400"
                            >
                                {product.description}
                            </Text>
                        </Flex>
                    )
                })}

            </Grid>
        </Box>
    );
};