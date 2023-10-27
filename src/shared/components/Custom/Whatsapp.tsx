'use client'
// Icons
import { Box, Flex, Icon } from '@chakra-ui/react';
import Link from 'next/link';
import { BsWhatsapp } from 'react-icons/bs'

export const Whatsapp = () => {
    return(
        <Flex
            position="fixed"
            bottom="20px"
            right="20px"
            cursor="pointer"
            zIndex="399"
            bg="white"
            alignItems="center"
            justifyContent="center"
            boxSize={{ base: "35px", xs: "50px", sm: "60px" }}
            pt={{ base: "4px", xs: "3px", sm: "3px" }}
            pl={{ base: "1px", xs: "2px", sm: "3px" }}
            rounded="100%"
        >
            <Link href='https://wa.me/34722648023' target='_blank'  rel='noopener noreferrer'>
                <Icon 
                    as={BsWhatsapp} 
                    color="green" 
                    boxSize={{ base: "20px", xs: "30px", sm: "35px" }}
                />
            </Link>
        </Flex>
    );
};