// Icons
import { Button, Flex, Text } from '@chakra-ui/react';
import { HiMinusSmall, HiPlusSmall } from 'react-icons/hi2'

interface Props {
    type: any;
    setType: (action: any) => void;
    isDisable?: boolean;
}

export const Orders = (props: Props) => {
    const { type, setType, isDisable = false } = props;

    return (
        <Flex
            alignItems="center"
            gap="5px"
        >
            <Button
                fontSize="17px"
                bg="#000"
                rounded="50%"
                h="25px"
                w="25px"
                minW="25px"
                p="0px 0"
                color="#FFF"
                cursor="pointer"
                border="none"
                _active={{
                    transform: "scale(1.1)",
                    transition: "all 200ms ease"
                }}
                _disabled={{
                    bg: "rgba(0, 0, 0, .2)",
                    cursor: "not-allowed"
                }}
                isDisabled={type <= 0}
                onClick={() => {
                    type > 0 &&
                        setType((prev: number) => prev - 1)
                }}
            >
                <HiMinusSmall />
            </Button>

            <Text
                as="h4"
                minW="25px"
                minH="30px"
                textAlign="center"
                pt="3px"
                fontSize="17px"
                bg="transparent"
                fontWeight="500"
            >
                {type}
            </Text>

            <Button
                fontSize="17px"
                bg="#000"
                rounded="50%"
                h="25px"
                w="25px"
                minW="25px"
                p="0px 0"
                color="#FFF"
                cursor="pointer"
                border="none"
                _active={{
                    transform: "scale(1.1)",
                    transition: "all 200ms ease"
                }}
                _disabled={{
                    bg: "rgba(0, 0, 0, .2)",
                    cursor: "not-allowed"
                }}
                isDisabled={isDisable}
                onClick={
                    () => setType((prev: number) => prev + 1)
                }
            >
                <HiPlusSmall />
            </Button>
        </Flex>
    );
};