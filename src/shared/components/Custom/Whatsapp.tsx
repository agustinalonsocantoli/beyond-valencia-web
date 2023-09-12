'use client'
// Icons
import { Box, Icon } from '@chakra-ui/react';
import Link from 'next/link';
import { BsWhatsapp } from 'react-icons/bs'

export const Whatsapp = () => {
    return(
        <Box
            position="fixed"
            bottom="20px"
            right="20px"
            cursor="pointer"
            zIndex="399"
            bg="white"
            p="10px 12px 5px 12px"
            rounded="100%"
        >
            <Link href='https://wa.me/34722648023' target='_blank'  rel='noopener noreferrer'>
                <Icon as={BsWhatsapp} color="green" boxSize="40px"/>
            </Link>
        </Box>
    );
};