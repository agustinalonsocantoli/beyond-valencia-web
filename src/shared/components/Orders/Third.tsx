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
            w="70%"
            m="auto"
            mt="50px"
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