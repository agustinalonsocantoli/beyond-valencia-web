import { Text } from "@chakra-ui/react";

interface Props {
    time: string | null;
    setTime: (action: string) => void;
    hour: string;
}

export const SelectTime = (props: Props) => {
    const { time, setTime, hour } = props;

    return(
        <Text
            as="span"
            rounded="20px"
            p="7px 15px"
            fontSize="15px"
            mr="5px"
            cursor="pointer"
            border="1px solid #000"
            bg={(time === hour) ? "#000" : "transparent"}
            color={(time === hour) ? "#FFF" : "#000"}
            opacity="1"
            onClick={() => {
                setTime(hour);
            }}
        >
            {hour}
        </Text>
    )
};