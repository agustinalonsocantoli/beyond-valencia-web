"use client"

import { Box, Flex, Text } from '@chakra-ui/react';
// Calendar
import { Calendar } from 'primereact/calendar';

interface Props {
    title: string;
    subtitle: string;
    date: any;
    setDate: (action: any) => void;
}

export const Third = ({ title, subtitle, date, setDate }: Props) => {
    const dateNow: Date = new Date();

    return(
        <Box
            m="auto"
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
                w="100%"
                justifyContent="center"
            >
                <Calendar value={date} onChange={(e) => setDate(e.value)} inline />
            </Flex>
        </Box>
    );
};